"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import en from '../../locales/en.json';
import ro from '../../locales/ro.json';

type Lang = 'ro' | 'en';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => any;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ro');

  useEffect(() => {
    const stored = localStorage.getItem('site_lang');
    if (stored === 'en' || stored === 'ro') setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('site_lang', l);
    } catch {}
  };

  const toggleLang = () => setLang(lang === 'ro' ? 'en' : 'ro');

  const locales: Record<Lang, Record<string, any>> = useMemo(() => ({ ro, en }), []);

  const t = (key: string) => {
    const parts = key.split('.');
    let cur: any = locales[lang];
    for (const p of parts) {
      if (!cur) return key;
      cur = cur[p];
    }
    return cur === undefined ? key : cur;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}

export function useT() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useT must be used within LanguageProvider');
  return ctx.t;
}

export default LanguageProvider;
