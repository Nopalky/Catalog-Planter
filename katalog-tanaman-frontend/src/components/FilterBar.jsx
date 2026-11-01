import React from 'react';
import search from '../assets/search.png';

export default function FilterBar({ 
  activeCategory, 
  setActiveCategory, 
  totalPlants,
  searchQuery,
  setSearchQuery 
}) {
  const categories = ['Semua tanaman', 'Indoor', 'Outdoor', 'Sukulen'];

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Mencegah form reload jika dibungkus form
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 pt-6 pb-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Judul & Badge Jumlah */}
        <div className="flex items-center gap-3">
          <h3 className="font-serif text-2xl font-medium text-[#1B3B2B]">Koleksi tanaman</h3>
          <span className="rounded-full bg-[#EAE8DE] px-3 py-0.5 text-xs font-medium text-[#525B44]">
            {totalPlants} tanaman
          </span>
        </div>

        {/* Input Cari & Sorting */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Cari nama tanaman..."
              className="w-48 sm:w-60 rounded-xl border border-[#D8D5C8] bg-white pl-8 pr-3 py-1.5 text-xs text-[#1B3B2B] placeholder-[#A3A899] focus:outline-none focus:border-[#1B3B2B]"
            />
            <span className="absolute left-2.5 top-2 text-xs text-[#8C9380]">
              <img src={search} alt="Search" />
            </span>
          </div>
          <button className="rounded-xl border border-[#D8D5C8] bg-white px-3.5 py-1.5 text-xs font-medium text-[#525B44] hover:bg-[#F7F6F0] transition">
            ↓ Terbaru
          </button>
        </div>
      </div>

      {/* Filter Category Chips */}
      <div className="mt-4 flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
              activeCategory === cat
                ? 'bg-[#1B3B2B] text-white shadow-xs'
                : 'border border-[#D8D5C8] bg-white text-[#525B44] hover:bg-[#F7F6F0]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}