import React, { useState } from 'react';
import IllustrasiAwal from '../assets/IlustrasiAwal.png';
import notebook from '../assets/notebook-pen.png';

export default function AddPlantPage({ onAddPlant, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    scientificName: '',
    category: 'Outdoor',
    sunlight: 'Teduh / cahaya tersaring',
    watering: '2-3 Hari Sekali',
    imageUrl: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    onAddPlant({
      id: Date.now().toString(),
      ...formData,
    });
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#8C9380] mb-4">
        <button onClick={onCancel} className="hover:underline">
          Koleksi saya
        </button>
        <span>&gt;</span>
        <span className="text-[#1B3B2B] font-medium">Tambah tanaman</span>
      </nav>

      {/* Header Halaman */}
      <header className="mb-8">
        <h1 className="font-serif text-3xl font-normal text-[#1B3B2B]">
          Cerita baru untuk koleksimu.
        </h1>
        <p className="text-xs text-[#6B7260] mt-1">
          Mulai dari namanya. Lalu kenali apa yang membuatnya tumbuh bahagia.
        </p>
      </header>

      {/* Grid Layout 2 Kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Kolom Kiri: Form Input */}
        <div className="lg:col-span-2 rounded-2xl border border-[#E6E4DA] bg-[#FDFCF7] p-6 shadow-xs">
          <div className="mb-6 flex justify-between items-start">
            <div className="flex gap-3 items-center">
              <div className="p-2.5 rounded-xl bg-[#EAE8DE] text-[#1B3B2B]">
                <img src={notebook} alt="Notebook" className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-semibold text-[#1B3B2B]">
                  Tambah teman tumbuh
                </h2>
                <p className="text-xs text-[#6B7260]">
                  Simpan identitas dan kebutuhan tanamanmu di sini.
                </p>
              </div>
            </div>
            <span className="text-[11px] text-[#8C9380]">* Wajib diisi</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Nama Lokal */}
              <div>
                <label className="block text-xs font-semibold text-[#1B3B2B] mb-1.5">
                  Nama lokal / populer *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Lily of the Valley"
                  className="w-full rounded-xl border border-[#D8D5C8] bg-white px-3.5 py-2 text-sm text-[#1B3B2B] focus:outline-none focus:border-[#1B3B2B] focus:ring-1 focus:ring-[#1B3B2B]"
                />
              </div>

              {/* Nama Ilmiah */}
              <div>
                <label className="block text-xs font-semibold text-[#1B3B2B] mb-1.5">
                  Nama ilmiah *
                </label>
                <input
                  type="text"
                  name="scientificName"
                  required
                  value={formData.scientificName}
                  onChange={handleChange}
                  placeholder="Convallaria majalis"
                  className="w-full rounded-xl border border-[#D8D5C8] bg-white px-3.5 py-2 text-sm italic text-[#1B3B2B] focus:outline-none focus:border-[#1B3B2B] focus:ring-1 focus:ring-[#1B3B2B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Kategori */}
              <div>
                <label className="block text-xs font-semibold text-[#1B3B2B] mb-1">
                  Kategori *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#D8D5C8] bg-white px-3.5 py-2 text-sm text-[#1B3B2B] focus:outline-none focus:border-[#1B3B2B]"
                >
                  <option value="Indoor">Indoor</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Sukulen">Sukulen</option>
                </select>
                <p className="text-[10px] text-[#8C9380] mt-1">Indoor, Outdoor, atau Sukulen</p>
              </div>

              {/* Kebutuhan Cahaya */}
              <div>
                <label className="block text-xs font-semibold text-[#1B3B2B] mb-1">
                  Kebutuhan cahaya *
                </label>
                <select
                  name="sunlight"
                  value={formData.sunlight}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#D8D5C8] bg-white px-3.5 py-2 text-sm text-[#1B3B2B] focus:outline-none focus:border-[#1B3B2B]"
                >
                  <option value="Teduh / cahaya tersaring">Teduh / cahaya tersaring</option>
                  <option value="Terang tidak langsung">Terang tidak langsung</option>
                  <option value="Cahaya langsung">Cahaya langsung</option>
                </select>
              </div>
            </div>

            {/* Frekuensi Penyiraman */}
            <div>
              <label className="block text-xs font-semibold text-[#1B3B2B] mb-1.5">
                Frekuensi penyiraman *
              </label>
              <div className="flex items-center gap-4 text-xs text-[#525B44]">
                {['Harian', '2-3 Hari Sekali', 'Mingguan'].map((item) => (
                  <label key={item} className="flex items-center gap-1.5 cursor-pointer font-medium">
                    <input
                      type="radio"
                      name="watering"
                      value={item}
                      checked={formData.watering === item}
                      onChange={handleChange}
                      className="accent-[#1B3B2B]"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* URL Gambar */}
            <div>
              <label className="block text-xs font-semibold text-[#1B3B2B] mb-1">
                URL gambar
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://kebunku.id/foto/lily-of-the-valley.jpg"
                className="w-full rounded-xl border border-[#D8D5C8] bg-white px-3.5 py-2 text-sm text-[#1B3B2B] focus:outline-none focus:border-[#1B3B2B]"
              />
              <p className="text-[10px] text-[#8C9380] mt-1">Gunakan tautan gambar JPG, PNG, atau WebP yang dapat diakses publik.</p>
            </div>

            {/* Deskripsi */}
            <div>
              <label className="block text-xs font-semibold text-[#1B3B2B] mb-1.5">
                Deskripsi / perawatan khusus
              </label>
              <textarea
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                placeholder="Jaga media tetap lembap, tetapi tidak tergenang..."
                className="w-full rounded-xl border border-[#D8D5C8] bg-white px-3.5 py-2 text-sm text-[#1B3B2B] focus:outline-none focus:border-[#1B3B2B]"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex items-center justify-between border-t border-[#E6E4DA]">
              <span className="text-xs text-[#8C9380]">Bisa kamu ubah lagi kapan saja.</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onCancel}
                  className="rounded-xl border border-[#D8D5C8] bg-white px-5 py-2 text-xs font-medium text-[#525B44] hover:bg-[#F7F6F0]"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#1B3B2B] px-5 py-2 text-xs font-medium text-white hover:bg-[#142D21] transition"
                >
                  + Simpan tanaman
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Kolom Kanan: Pratinjau & Catatan */}
        <div className="space-y-6">
          {/* Card Pratinjau Koleksinya */}
          <div className="rounded-2xl border border-[#E6E4DA] bg-[#FDFCF7] overflow-hidden shadow-xs">
            <div className="p-3 text-[10px] font-bold tracking-wider text-[#8C9380] uppercase">
              PRATINJAU KOLEKSI
            </div>
            <div className="h-52 bg-[#FAF6EA] relative overflow-hidden">
              {formData.imageUrl.trim() ? (
                <img
                  src={formData.imageUrl.trim()}
                  alt={formData.name || 'Preview'}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[#A3A899] text-5xl">
                  <img src={IllustrasiAwal} alt="Illustrasi Awal" />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-serif text-xl font-semibold text-[#1B3B2B]">
                {formData.name || 'Lily of the Valley'}
              </h3>
              <p className="text-xs italic text-[#6B7260]">
                {formData.scientificName || 'Convallaria majalis'}
              </p>

              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-[#EAE8DE] px-3 py-0.5 text-[10px] font-semibold text-[#1B3B2B]">
                  {formData.category || 'Outdoor'}
                </span>
                <span className="rounded-full bg-[#EAE8DE] px-3 py-0.5 text-[10px] font-semibold text-[#1B3B2B]">
                  Asparagaceae
                </span>
              </div>
            </div>
          </div>

          {/* Card Tips / Catatan */}
          <div className="rounded-2xl border border-[#E6E4DA] bg-[#E8EDE3]/50 p-5">
            <h4 className="font-serif text-sm font-semibold text-[#1B3B2B] flex items-center gap-1.5 mb-2">
               <img src={notebook} alt="Notebook" />
               Catatan kecil, manfaat besar.
            </h4>
            <p className="text-xs text-[#525B44] leading-relaxed">
              Pakai foto dengan cahaya alami agar bentuk daun mudah dikenali. Catat juga posisi pot dan kondisi media, bukan hanya jadwal siramnya.
            </p>
            <p className="text-[11px] text-[#8C9380] mt-3">
              Setiap rumah punya iklim kecilnya sendiri. Sesuaikan perawatan dengan kondisi tanamanmu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}