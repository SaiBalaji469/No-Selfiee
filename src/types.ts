import { ReactNode } from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}