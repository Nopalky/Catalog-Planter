import React from 'react';

export default function HeroHeader({ total, categoryCount, easyCareCount }) {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-10 pb-6">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-[#E6E4DA] pb-8">
        <div>
          <p className="text-[11px] font-bold tracking-widest text-[#6B7260] uppercase">
            JURNAL BOTANI PRIBADI
          </p>
          <h1 className="mt-1.5 font-serif text-4xl md:text-5xl font-medium text-[#1B3B2B]">
            Sedikit hijau, setiap hari.
          </h1>
          <p className="mt-2 text-sm text-[#525B44]">
            Kenali, catat, dan rawat teman tumbuhmu. Satu daun, satu cerita.
          </p>
        </div>

        {/* Counter Statistik */}
        <div className="flex gap-8 text-center bg-[#EAE8DE]/60 px-6 py-3 rounded-2xl border border-[#E6E4DA]">
          <div>
            <span className="font-serif text-3xl font-normal text-[#1B3B2B]">{total}</span>
            <p className="text-[11px] text-[#6B7260]">Tanaman</p>
          </div>
          <div className="border-l border-[#D8D5C8] pl-8">
            <span className="font-serif text-3xl font-normal text-[#1B3B2B]">
              {categoryCount}
            </span>
            <p className="text-[11px] text-[#6B7260]">Kategori</p>
          </div>
          <div className="border-l border-[#D8D5C8] pl-8">
            <span className="font-serif text-3xl font-normal text-[#1B3B2B]">
              {easyCareCount}
            </span>
            <p className="text-[11px] text-[#6B7260]">Mudah dirawat</p>
          </div>
        </div>
      </div>
    </header>
  );
}