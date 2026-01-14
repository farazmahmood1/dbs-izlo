
// Fix: Added React import to resolve 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface UseCase {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
