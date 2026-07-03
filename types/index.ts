// Common types for the application

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface Project {
  _id?: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Skill {
  _id?: string;
  name: string;
  category: string;
  proficiency: number; // 1-100
  icon?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface About {
  _id?: string;
  title: string;
  content: string;
  image?: string;
  updatedAt?: string;
}

export interface ChatMessage {
  _id?: string;
  sender: 'user' | 'admin';
  message: string;
  timestamp: string;
  read?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

