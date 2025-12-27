
import React, { useState } from 'react';
import { SyllabusModule } from '../types';

interface Props {
  modules: SyllabusModule[];
}

export const CourseSyllabus: React.FC<Props> = ({ modules }) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto divide-y divide-[#d2d2d7]">
      {modules.map((module, idx) => (
        <div key={idx} className="py-6">
          <button
            onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
            className="w-full text-left flex items-start justify-between group py-4"
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#86868b] uppercase tracking-wider mb-2">0{idx + 1}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors">
                {module.title}
              </h3>
            </div>
            <div className={`mt-2 transition-transform duration-300 ${activeIdx === idx ? 'rotate-180' : ''}`}>
              <svg className="w-6 h-6 text-[#1d1d1f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeIdx === idx ? 'max-h-[600px] opacity-100 pb-8' : 'max-h-0 opacity-0'
          }`}>
            <p className="text-xl text-[#86868b] mb-8 leading-snug">{module.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {module.items.map((item, i) => (
                <div key={i} className="flex items-center space-x-3 p-4 bg-[#f5f5f7] rounded-2xl">
                  <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base font-semibold text-[#1d1d1f]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
