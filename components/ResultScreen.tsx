
import React from 'react';
import { MBTIResult, LearningStyle } from '../types';
import ModernCard from './common/PixelatedContainer';
import ModernButton from './common/PixelatedButton';

interface ResultScreenProps {
  result: MBTIResult;
  learningStyle: LearningStyle;
  onRestart: () => void;
  onGetAiTips: () => void;
  aiTips: string[];
  isAiLoading: boolean;
  aiError: string | null;
}

const AITipsSection: React.FC<{tips: string[]}> = ({ tips }) => (
    <div className="text-left bg-indigo-50 p-4 sm:p-6 rounded-lg border-2 border-indigo-200 mt-6 animate-fade-in">
      <h3 className="text-xl font-bold text-indigo-800 mb-4">✨ Gemini AI의 맞춤 학습 팁!</h3>
      <ul className="space-y-3 list-disc list-inside text-gray-700">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
);

const ResultScreen: React.FC<ResultScreenProps> = ({ result, learningStyle, onRestart, onGetAiTips, aiTips, isAiLoading, aiError }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <ModernCard className="text-center">
        <p className="text-lg font-semibold text-gray-500">당신의 학습 유형은</p>
        <h1 className="text-6xl sm:text-7xl font-black text-indigo-600 my-2">{result}</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">{learningStyle.title}</h2>
        
        <div className="text-left bg-gray-100 p-4 rounded-lg mb-6">
          <p className="text-base text-gray-700 leading-relaxed">{learningStyle.description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {learningStyle.keywords.map((keyword) => (
            <span key={keyword} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
              #{keyword}
            </span>
          ))}
        </div>
        
        <div className="space-y-4">
          {aiTips.length === 0 && (
              <ModernButton onClick={onGetAiTips} disabled={isAiLoading}>
                {isAiLoading ? 'AI 팁 생성 중...' : 'Gemini AI 맞춤 학습 팁 받기'}
              </ModernButton>
          )}

          {isAiLoading && <p className="text-center text-indigo-600 animate-pulse">잠시만 기다려주세요...</p>}
          {aiError && <p className="text-center text-red-500">{aiError}</p>}
          
          {aiTips.length > 0 && <AITipsSection tips={aiTips} />}

          <ModernButton onClick={onRestart} variant="secondary">
            테스트 다시하기
          </ModernButton>
        </div>
      </ModernCard>
    </div>
  );
};

export default ResultScreen;
