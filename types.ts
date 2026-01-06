
// Fix: Import React to provide the React namespace for ReactNode
import React from 'react';

export interface VerticalCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
}

export interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export type CodeLanguage = 'cURL' | 'Node.js' | 'Python' | 'PHP';
