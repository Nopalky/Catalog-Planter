import React from 'react';
import droplet from '../assets/droplets.png';
import sun from '../assets/sun.png';
import ilustrasiawal from '../assets/IlustrasiAwal.png';
import leaf from '../assets/sprout.png';


export default function PlantCard({ plant, onDelete }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#E6E4DA] bg-[#FDFCF7] shadow-xs transition hover:shadow-md hover:border-[#D8D5C8]">
      {/* Area Gambar */}
      <div className="relative h-64 w-full bg-[#EAE8DE] overflow-hidden">
        {/* Badge Kategori Kiri Atas */}
        <span className="absolute top-3.5 left-3.5 z-10 rounded-full bg-white/90 backdrop-blur-xs px-3 py-1 text-[11px] font-semibold text-[#1B3B2B] shadow-xs">
          {plant.category || 'Outdoor'}
        </span>

        {/* Foto Tanaman */}
        {typeof plant.imageUrl === 'string' && plant.imageUrl.trim() ? (
          <img
            src={plant.imageUrl.trim()}
            alt={plant.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[#A3A899] text-5xl">
            <img src={ilustrasiawal} alt="Ilustrasi Awal" />
          </div>
        )}

        {/* Tombol Aksi Kanan Bawah Foto */}
        <button
          onClick={() => onDelete(plant.id)}
          title="Hapus Tanaman"
          className="absolute bottom-3.5 right-3.5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1B3B2B] shadow-sm transition hover:bg-[#1B3B2B] hover:text-white"
        >
          ↗
        </button>
      </div>

      {/* Area Informasi */}
      <div className="p-5">
        {/* Sub-header: Famili & Kode Catalog */}
        <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider text-[#8C9380] uppercase">
          <span>{plant.family || 'ASPARAGACEAE'}</span>
          <span>{plant.code || `RB / 00${plant.id}`}</span>
        </div>

        {/* Nama Utama */}
        <div className="mt-2">
          <h3 className="font-serif text-2xl font-medium text-[#1B3B2B]">
            {plant.name}
          </h3>
          <p className="text-sm italic text-[#6B7260] mt-0.5">
            {plant.scientificName}
          </p>
        </div>

        {/* Divider Line */}
        <hr className="my-4 border-[#E6E4DA]" />

        {/* Detail 3 Kolom Perawatan */}
        <div className="grid grid-cols-3 gap-2 text-left">
          {/* Penyiraman */}
          <div>
            <div className="flex items-center gap-1 text-[11px] font-medium text-[#6B7260]">
              <img src={droplet} alt="Droplet" className="inline-block h-4 w-4" />
              Penyiraman
            </div>
            <p className="mt-1 text-xs font-semibold text-[#1B3B2B]">
              {plant.watering}
            </p>
          </div>

          {/* Cahaya */}
          <div>
            <div className="flex items-center gap-1 text-[11px] font-medium text-[#6B7260]">
              <img src={sun} alt="Sun" className="inline-block h-4 w-4" />
              Cahaya
            </div>
            <p className="mt-1 text-xs font-semibold text-[#1B3B2B]">
              {plant.sunlight}
            </p>
          </div>

          {/* Perawatan */}
          <div>
            <div className="flex items-center gap-1 text-[11px] font-medium text-[#6B7260]">
              <img src={leaf} alt="Leaf" className="inline-block h-4 w-4" />
              Perawatan
            </div>
            <p className="mt-1 text-xs font-semibold text-[#1B3B2B]">
              {plant.careLevel || 'Sedang'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}