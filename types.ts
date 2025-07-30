
export enum GameState {
  Start = 'START',
  Playing = 'PLAYING',
  Result = 'RESULT',
}

export enum MBTITrait {
  E = 'E',
  I = 'I',
  S = 'S',
  N = 'N',
  T = 'T',
  F = 'F',
  J = 'J',
  P = 'P',
}

export interface Question {
  text: string;
  answers: [
    { text: string; trait: MBTITrait },
    { text: string; trait: MBTITrait }
  ];
}

export type MBTIResult = `${'E' | 'I'}${'S' | 'N'}${'T' | 'F'}${'J' | 'P'}`;

export interface LearningStyle {
  title: string;
  description: string;
  keywords: string[];
}
