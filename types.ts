
export interface Book {
  id: string;
  title: string;
  author: string;
  category: 'History' | 'Science' | 'Philosophy' | 'Literature' | 'Art' | 'Royal Collection' | string;
  cover: string;
  description: string;
  rating: number;
  isPremium?: boolean;
}

export interface User {
  name: string;
  gmail: string;
  mobile: string;
}

export interface SearchResult {
  books: Book[];
  aiAnalysis: string;
}

export type ThemeMode = 'light' | 'dark';
