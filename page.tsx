"use client";
import React, { useState } from 'react';
import { Search, Phone, User, Settings, PhoneCall, CheckCircle2, ShieldAlert, Database, Smartphone } from 'lucide-react';

export default function SmartNameFinder() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'name' | 'number'>('name');
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsLoading(true);
    setResults([]);
    
    // محاكاة سريعة ومثالية لجلب البيانات
    setTimeout(() => {
      if (searchType === 'number') {
        if (searchQuery.includes('77') || searchQuery.length > 6) {
          setResults([
            { id: 1, name: 'عبدالرحمن نايف خشّافة', phone: searchQuery, type: 'مطور التطبيق', trust: '99%', zone: 'صنعاء' }
          ]);
        } else {
          setResults([]);
        }
      } else {
        setResults([
          { id: 1, name: searchQuery, phone: '777xxx`xxx', type: 'شخصي', trust: '85%', zone: 'اليمن' },
          { id: 2, name: `${searchQuery} (عمل)`, phone: '71xxxxxxx', type: 'تجاري', trust: '90%', zone: 'موزع معتمد' }
        ]);
      }
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div dir="rtl" className="min-h-screen cyber-bg text-slate-100 p-4 flex flex-col items-center justify-between font-sans selection:bg-blue-500/30">
      
      {/* Header */}
      <header className="w-full max-w-md flex justify-between items-center py-4 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <PhoneCall className="w-5 h-5 text-blue-400 animate-pulse" />
          </div>
          <div>
            <h1 className="text-base font-black tracking-wide text-white">كاشف الأسماء الذكي</h1>
            <p className="text-[9px] text-blue-400 font-mono tracking-widest">SMART NAME FINDER</p>
          </div>
        </div>
        <button className="p-2 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
          <Settings className="w-4 h-4 text-slate-400" />
        </button>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-md flex-1 flex flex-col justify-center py-6">
        <div className="glass-panel p-6 mb-6 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-xl font-black text-center mb-1 text-white">ابدأ البحث الذكي</h2>
          <p className="text-xs text-slate-400 text-center mb-6">أدخل اسماً أو رقماً للتعرف على هوية المتصل فوراً</p>

          {/* Toggle Tabs */}
          <div className
