
import React from 'react';
import ModernCard from './common/PixelatedContainer';
import ModernButton from './common/PixelatedButton';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <ModernCard>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 pb-2">
          AI 학습 스타일 진단
        </h1>
        <p className="mb-8 text-base sm:text-lg text-gray-600 leading-relaxed">
          당신의 잠재력을 깨울 학습 유형은 무엇일까요?
          <br />
          Gemini AI와 함께 당신만의 학습 비법을 찾아보세요.
        </p>
        <ModernButton onClick={onStart}>
          진단 시작하기
        </ModernButton>
      </ModernCard>
    </div>
  );
};

export default StartScreen;
