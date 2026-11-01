import React from 'react';
import lambang from '../assets/Lambang.png';
import leaf from '../assets/leaf.png';

export default function Navbar({ plantCount, activeTab, setActiveTab }) {
  return (
    <nav className="border-b border-[#E6E4DA] bg-[#F7F6F0] px-6 py-3.5 sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1B3B2B] text-white text-sm">
            <img src={lambang} alt="Logo" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-[#1B3B2B]">
            rimbun
          </span>
        </div>

       {/* Tab Navigasi */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <button 
            onClick={() => setActiveTab('koleksi')}
            className={`pb-1 transition ${
              activeTab === 'koleksi'
                ? 'border-b-2 border-[#1B3B2B] text-[#1B3B2B] font-semibold'
                : 'text-[#6B7260] hover:text-[#1B3B2B]'
            }`}
          >
            Koleksi saya
          </button>
          <button 
            onClick={() => setActiveTab('tambah')}
            className={`pb-1 transition ${
              activeTab === 'tambah'
                ? 'border-b-2 border-[#1B3B2B] text-[#1B3B2B] font-semibold'
                : 'text-[#6B7260] hover:text-[#1B3B2B]'
            }`}
          >
            Tambah tanaman
          </button>
        </div>

        {/* Info Ringkas */}
        <div className="flex items-center gap-3 text-xs text-[#525B44]">
          <span className="flex items-center gap-1 font-medium bg-  [#EAE8DE] px-3 py-1 rounded-full">
            <img src={leaf} alt="Leaf" />
             {plantCount} tanaman dirawat
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D8D5C8] font-semibold text-[#1B3B2B]">
            NA
          </div>
        </div>
      </div>
    </nav>
  );
}