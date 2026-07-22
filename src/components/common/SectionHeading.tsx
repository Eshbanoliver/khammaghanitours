import React from 'react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: 'light' | 'dark';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  theme = 'light',
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : 'text-left'} mb-12 md:mb-16`}>
      {/* Badge */}
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${
        theme === 'dark'
          ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20 shadow-inner'
          : 'bg-sky-100 text-sky-700 border border-sky-200 shadow-sm'
      }`}>
        <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
        <span>{badge}</span>
      </div>

      {/* Main Title */}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
        theme === 'dark' ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
