
import React from 'react';
import { Question, MBTITrait } from '../types';
import ModernCard from './common/PixelatedContainer';
import ModernButton from './common/PixelatedButton';

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (trait: MBTITrait) => void;
}

const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
      <div
        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <ModernCard>
        <p className="text-sm font-bold text-indigo-600 mb-2 text-center">
          {questionNumber} / {totalQuestions}
        </p>
        <ProgressBar current={questionNumber} total={totalQuestions} />
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 min-h-[120px] flex items-center justify-center text-center">
          {question.text}
        </h2>
        <div className="space-y-4">
          {question.answers.map((answer, index) => (
            <ModernButton
              key={index}
              onClick={() => onAnswer(answer.trait)}
              className="text-base sm:text-lg !py-3"
              variant="primary"
            >
              {answer.text}
            </ModernButton>
          ))}
        </div>
      </ModernCard>
    </div>
  );
};

export default QuestionScreen;
