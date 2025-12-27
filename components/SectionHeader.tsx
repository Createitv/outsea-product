
import React from 'react';

interface Props {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<Props> = ({ tag, title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    {tag && (
      <span className="block text-sm font-semibold tracking-tight text-slate-500 mb-2">
        {tag}
      </span>
    )}
    <h2 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-xl md:text-2xl text-[#86868b] max-w-3xl mx-auto leading-tight font-medium">
        {subtitle}
      </p>
    )}
  </div>
);
