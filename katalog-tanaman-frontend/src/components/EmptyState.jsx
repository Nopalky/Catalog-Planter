import React from 'react';
import ilustrasiawal from '../assets/IlustrasiAwal.png';

export default function EmptyState() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-6">
      <div className="flex flex-col items-center justify-center rounded-2xl border border-[#E6E4DA] bg-[#FDFCF7] px-6 py-16 text-center shadow-sm">
        {/* Ilustrasi Tanaman */}
        <div className="mb-4 text-6xl">
          <img src={ilustrasiawal} alt="Ilustrasi Awal" />
        </div>
        <h3 className="font-serif text-2xl font-medium text-[#1B3B2B]">
          Ruang untuk sesuatu yang tumbuh.
        </h3>
        <p className="mt-2 max-w-md text-sm text-[#6B7260]">
          Belum ada data tumbuhan. Tambahkan tanaman pertama kamu melalui form di atas!
        </p>
        <p className="mt-6 text-xs text-[#8C9380]">
          Baru mulai? Monstera dan Lidah Mertua cocok untuk pemula.
        </p>
      </div>
    </div>
  );
}