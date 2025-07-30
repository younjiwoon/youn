import React, { useState, useCallback } from 'react';
import { GameState, MBTITrait, MBTIResult } from './types';
import { QUESTIONS, LEARNING_STYLES } from './constants';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import { GoogleGenAI, Type } from '@google/genai';

const svgBackground = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 800'%3e%3cg fill='none' stroke='white' stroke-opacity='0.2' stroke-width='2'%3e%3cpath d='M 100 200 Q 300 100 500 300 T 900 400' /%3e%3cpath d='M 1300 150 Q 1100 250 950 500 T 700 700' /%3e%3cpath d='M 200 750 Q 400 600 600 650 T 1000 550' /%3e%3ccircle cx='100' cy='200' r='8'/%3e%3ccircle cx='900' cy='400' r='6'/%3e%3ccircle cx='1300'cy='150' r='10'/%3e%3ccircle cx='700' cy='700' r='5'/%3e%3ccircle cx='200' cy='750' r='7'/%3e%3ccircle cx='1000'cy='550' r='9'/%3e%3ccircle cx='450' cy='180' r='4'/%3e%3ccircle cx='1150'cy='650' r='4'/%3e%3ccircle cx='700' cy='250' r='4'/%3e%3c/g%3e%3c/svg%3e";

const appStyle: React.CSSProperties = {
  backgroundImage: `url("${svgBackground}"), linear-gradient(to bottom right, #c7d2fe, #e9d5ff, #fbcfe8)`,
  backgroundSize: 'cover, cover',
  backgroundPosition: 'center, center',
  backgroundAttachment: 'fixed',
};


const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<MBTITrait, number>>({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
  });
  const [mbtiResult, setMbtiResult] = useState<MBTIResult | null>(null);

  const [aiTips, setAiTips] = useState<string[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const handleStart = useCallback(() => {
    setGameState(GameState.Playing);
  }, []);

  const handleAnswer = useCallback((trait: MBTITrait) => {
    const newAnswers = { ...answers, [trait]: answers[trait] + 1 };
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newAnswers);
      setGameState(GameState.Result);
    }
  }, [answers, currentQuestionIndex]);

  const calculateResult = (finalAnswers: Record<MBTITrait, number>) => {
    const first = finalAnswers.E > finalAnswers.I ? 'E' : 'I';
    const second = finalAnswers.S > finalAnswers.N ? 'S' : 'N';
    const third = finalAnswers.T > finalAnswers.F ? 'T' : 'F';
    const fourth = finalAnswers.J > finalAnswers.P ? 'J' : 'P';
    const result: MBTIResult = `${first}${second}${third}${fourth}`;
    setMbtiResult(result);
  };

  const handleGetAiTips = useCallback(async () => {
    if (!mbtiResult) return;

    setIsAiLoading(true);
    setAiError(null);
    setAiTips([]);

    const learningStyle = LEARNING_STYLES[mbtiResult];
    const prompt = `
      당신은 친절한 학습 전문가입니다. 저의 학습 유형은 ${mbtiResult} "${learningStyle.title}" 이고, 특징은 "${learningStyle.description}" 입니다.
      이 정보를 바탕으로, 제가 즉시 실천할 수 있는 구체적이고 창의적인 학습 팁 3가지를 한국어로 알려주세요.
    `;

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              tips: {
                type: Type.ARRAY,
                description: "세 가지 학습 팁이 담긴 배열",
                items: {
                  type: Type.STRING,
                  description: "실천 가능한 학습 팁 (한국어)"
                }
              }
            },
            required: ['tips']
          },
        },
      });

      const jsonResponse = JSON.parse(response.text);
      if (jsonResponse.tips && Array.isArray(jsonResponse.tips)) {
          setAiTips(jsonResponse.tips);
      } else {
          throw new Error("Invalid AI response format.");
      }

    } catch (error) {
      console.error("AI Error:", error);
      setAiError("AI 팁을 생성하는 데 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsAiLoading(false);
    }
  }, [mbtiResult]);

  const handleRestart = useCallback(() => {
    setGameState(GameState.Start);
    setCurrentQuestionIndex(0);
    setAnswers({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setMbtiResult(null);
    setAiTips([]);
    setIsAiLoading(false);
    setAiError(null);
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case GameState.Playing:
        return (
          <QuestionScreen
            question={QUESTIONS[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        );
      case GameState.Result:
        if (mbtiResult && LEARNING_STYLES[mbtiResult]) {
          return (
            <ResultScreen
              result={mbtiResult}
              learningStyle={LEARNING_STYLES[mbtiResult]}
              onRestart={handleRestart}
              onGetAiTips={handleGetAiTips}
              aiTips={aiTips}
              isAiLoading={isAiLoading}
              aiError={aiError}
            />
          );
        }
        return <div className="text-gray-800 text-center">결과를 계산 중입니다...</div>;
      case GameState.Start:
      default:
        return <StartScreen onStart={handleStart} />;
    }
  };

  return (
    <div 
      className="min-h-screen text-gray-800 flex flex-col"
      style={appStyle}
    >
      <main className="flex-grow w-full p-4 sm:p-6 flex items-center justify-center">
        <div className="w-full h-full">
          {renderContent()}
        </div>
      </main>
      <footer className="w-full text-center py-2 text-sm text-white bg-indigo-900">
        © 2025. 7. 30 YOUNJIWOON
      </footer>
    </div>
  );
};

export default App;
