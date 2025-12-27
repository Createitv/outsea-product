
'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { CourseSyllabus } from '../components/CourseSyllabus';
import { GeminiService } from '../services/geminiService';
import { SyllabusModule, PricingTier } from '../types';

const defaultModules: SyllabusModule[] = [
  {
    title: "选词与需求洞察",
    description: "不靠直觉，靠数据。教你如何找到竞争小、变现快的细分利基市场。",
    items: ["Semrush/Ahrefs 实战选词", "从 Reddit 挖掘真实痛点", "关键词商业价值评估"]
  },
  {
    title: "高转化建站流程",
    description: "极致精简。让你的网站符合 Google 审美且在 24 小时内上线。",
    items: ["轻量级 CMS 方案配置", "极致页面加载速度优化", "SEO 友好架构设计"]
  },
  {
    title: "AI 驱动的内容工厂",
    description: "一个人也能顶一个编辑部。利用 AI 生成高质量、原生感的内容。",
    items: ["高级文章 Prompt 设计", "内容引流与转化闭环", "多媒体自动生成策略"]
  }
];

const pricingTiers: PricingTier[] = [
  {
    name: "入门实战包",
    price: "¥299",
    description: "适合想要快速上手、低门槛尝试的个人站长。",
    features: ["全套系统课程", "出海初始化清单", "精选 AI 提示词库", "永久更新"],
    cta: "购买"
  },
  {
    name: "全能方法论",
    price: "¥599",
    description: "最推荐的选择，涵盖从选词到变现的完整闭环。",
    isPopular: true,
    features: ["入门包所有内容", "专属选词工具表", "SEO 网站结构模板", "核心社群权限", "直播回放"],
    cta: "购买"
  },
  {
    name: "1对1 陪跑咨询",
    price: "¥4999",
    description: "针对有具体项目、追求极致确定性的高级玩家。",
    features: ["包含全能包内容", "一对一项目诊断", "4周高强度陪跑", "外链资源对接"],
    cta: "申请"
  }
];

export default function Home() {
  const [modules, setModules] = useState<SyllabusModule[]>(defaultModules);
  const [isGenerating, setIsGenerating] = useState(false);
  const [customFocus, setCustomFocus] = useState('网站出海 + SEO + AI 实战小课');

  const handleGenerateCustomSyllabus = async () => {
    setIsGenerating(true);
    try {
      const service = new GeminiService();
      const result = await service.generateSyllabus(customFocus);
      if (result && result.length > 0) {
        setModules(result);
      }
    } catch (error) {
      console.error("AI Generation Error:", error);
      alert("AI 生成失败，请检查 API Key 配置");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-[1000px] mx-auto px-6 h-12 flex items-center justify-between text-[12px] font-medium text-[#1d1d1f]/80">
          <div className="flex items-center space-x-1 font-bold text-[#1d1d1f]">
            <span className="text-lg tracking-tight">出海实战派</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#syllabus" className="hover:text-[#1d1d1f] transition-colors">课程大纲</a>
            <a href="#persona" className="hover:text-[#1d1d1f] transition-colors">适用人群</a>
            <a href="#pricing" className="hover:text-[#1d1d1f] transition-colors">计划定价</a>
          </div>
          <button className="bg-[#1d1d1f] text-white px-3 py-1 rounded-full text-[11px] font-bold hover:bg-[#333] transition-all">
            开始学习
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#1d1d1f] mb-6 leading-tight">
            网站出海。<br />
            <span className="text-[#86868b]">从此有了确定性。</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#1d1d1f] mb-10 font-medium max-w-2xl mx-auto leading-snug">
            不卖单一工具，不讲泛认知课。<br />
            只交付一套可落地的实战方法论。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="#pricing" className="bg-[#0071e3] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#0077ed] transition-colors">
              立即选购
            </a>
            <a href="#syllabus" className="text-[#0066cc] hover:underline text-lg font-semibold flex items-center group">
              进一步了解课程
              <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto rounded-[30px] overflow-hidden bg-[#f5f5f7] border border-[#d2d2d7]">
           <div className="aspect-[21/9] flex items-center justify-center relative bg-gradient-to-tr from-[#f5f5f7] to-white">
              <div className="text-center">
                <span className="text-[80px] md:text-[100px] opacity-10 font-black tracking-tighter uppercase leading-none">Global Expansion</span>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-64 h-64 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center p-8 border border-[#d2d2d7]">
                      <div className="w-full h-full bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-5xl font-black italic shadow-inner shadow-black/20">P</div>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section id="persona" className="py-24 bg-[#f5f5f7] px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="为你而生。" 
            subtitle="无论是寻找增长的站长，还是寻求变现的开发者。"
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-white border border-[#d2d2d7] rounded-[22px] p-12 flex flex-col justify-end min-h-[400px] relative overflow-hidden">
               <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-4 text-[#1d1d1f]">技术开发者</h3>
                <p className="text-xl text-[#86868b] max-w-md font-medium">利用技术优势，结合 AI 与 SEO 建立自动化流量资产，在全球市场实现被动收入。</p>
               </div>
               <div className="absolute top-12 right-12 text-7xl opacity-10 font-mono text-[#1d1d1f]">CODE</div>
            </div>
            <div className="md:col-span-4 bg-white border border-[#d2d2d7] rounded-[22px] p-12">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">SEO 站长</h3>
              <p className="text-[#86868b] font-medium leading-relaxed">突破流量瓶颈，引入 AI 自动化生产流，提升 10 倍内容产出效率。</p>
              <div className="mt-8 text-5xl">🚀</div>
            </div>
            <div className="md:col-span-5 bg-[#1d1d1f] text-white rounded-[22px] p-12">
               <h3 className="text-2xl font-bold mb-4">内容创作者</h3>
               <p className="text-slate-400 font-medium">拒绝“搞钱”废话。在这里学习如何从零开始，在海外市场建立真实的影响力与变现点。</p>
            </div>
            <div className="md:col-span-7 rounded-[22px] p-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <div className="text-center">
                  <h3 className="text-4xl font-black italic tracking-tighter mb-2">10X GROWTH</h3>
                  <p className="font-bold opacity-80">通过实战，让你的出海之路提速 10 倍。</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Generation */}
      <section id="syllabus" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            tag="Curriculum"
            title="精心打磨的大纲。" 
            subtitle="每一个模块都直击变现，每一处细节都来自真实踩坑。"
          />
          
          <div className="mb-16 bg-[#f5f5f7] p-8 rounded-[2rem] border border-[#d2d2d7]">
            <p className="text-xs font-bold text-[#86868b] uppercase tracking-widest mb-4">定制你的实战计划</p>
            <div className="flex gap-3">
              <input 
                type="text" 
                value={customFocus}
                onChange={(e) => setCustomFocus(e.target.value)}
                className="flex-grow px-6 py-3 bg-white border border-[#d2d2d7] rounded-full focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all font-medium"
              />
              <button 
                onClick={handleGenerateCustomSyllabus}
                disabled={isGenerating}
                className="bg-[#0071e3] text-white px-8 py-3 rounded-full font-bold hover:bg-[#0077ed] transition-all shrink-0"
              >
                {isGenerating ? '生成中...' : 'AI 生成'}
              </button>
            </div>
          </div>

          <CourseSyllabus modules={modules} />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-[#f5f5f7] px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="找到最适合你的。" 
            subtitle="一次订阅，终身受益。支持随时升级。"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <div key={i} className="bg-white p-10 rounded-[30px] border border-[#d2d2d7] flex flex-col hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-2 text-[#1d1d1f]">{tier.name}</h3>
                <p className="text-[#86868b] text-sm h-12 mb-6 font-medium leading-tight">{tier.description}</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold tracking-tight text-[#1d1d1f]">{tier.price}</span>
                  <span className="text-[#86868b] text-sm font-semibold ml-2">起</span>
                </div>
                <div className="mb-10 flex-grow border-t border-[#d2d2d7] pt-8">
                  <ul className="space-y-4">
                    {tier.features.map((feature, f) => (
                      <li key={f} className="flex items-start text-sm font-semibold text-[#1d1d1f]">
                        <svg className="w-5 h-5 mr-3 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={`w-full py-3 rounded-full font-bold text-sm transition-all ${
                  tier.isPopular ? 'bg-[#0071e3] text-white hover:bg-[#0077ed]' : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]'
                }`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 px-6 border-t border-[#d2d2d7]">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6 text-[#1d1d1f]">
                <div className="w-8 h-8 bg-[#1d1d1f] rounded-lg flex items-center justify-center text-white font-bold italic">P</div>
                <span className="text-lg font-bold">出海实战派</span>
              </div>
              <p className="text-[#86868b] text-sm leading-relaxed max-w-sm font-medium">
                致力于为全球华人开发者、站长提供最真实、最硬核的出海实战指导。我们不讲虚无的认知，只谈落地的美金。
              </p>
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-[#1d1d1f] uppercase tracking-wider mb-6">核心板块</h4>
              <ul className="space-y-4 text-[12px] font-semibold text-[#86868b]">
                <li><a href="#" className="hover:text-[#1d1d1f]">SEO 策略</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">AI 自动化</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">变现路径</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-[#1d1d1f] uppercase tracking-wider mb-6">联系方式</h4>
              <ul className="space-y-4 text-[12px] font-semibold text-[#86868b]">
                <li>WeChat: RealExpert</li>
                <li>Email: hello@exp.io</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#d2d2d7] flex flex-col md:flex-row justify-between items-center text-[#86868b] text-[12px] font-medium">
            <p>© {new Date().getFullYear()} 出海实战派. Built for the Global Market.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
