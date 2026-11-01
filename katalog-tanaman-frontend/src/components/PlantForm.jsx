import React, { useState } from 'react';

export default function PlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: '',
    scientificName: '',
    category: 'Indoor',
    sunlight: 'Terang tidak langsung',
    watering: 'Mingguan',
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

    setFormData({
      name: '',
      scientificName: '',
      category: 'Indoor',
      sunlight: 'Terang tidak langsung',
      watering: 'Mingguan',
      imageUrl: '',
      description: '',
    });
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-4">
      <div className="rounded-2xl border border-[#E6E4DA] bg-[#FDFCF7] p-6 shadow-sm">
        <div className="mb-6 flex justify-between items-start">
          <div className="flex gap-3 items-center">
            <div className="p-2.5 rounded-xl bg-[#EAE8DE] text-[#1B3B2B]">🌱</div>
            <div>
              <h2 className="font-serif text-lg font-semibold text-[#1B3B2B]">Tambah teman tumbuh</h2>
              <p className="text-xs text-[#6B7260]">Simpan identitas dan kebutuhan tanamanmu di sini.</p>
            </div>
          </div>
          <span className="text-[11px] text-[#8C9380]">* Wajib diisi</span>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Nama Lokal */}
          <div>
            <label className="block text-xs font-semibold text-[#1B3B2B] mb-1.5">Nama lokal / populer *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Contoh: Monstera"
              className="w-full rounded-xl border border-[#D8D5C8] bg-white px-3.5 py-2 text-sm text-[#1B3B2B] placeholder-[#A3A899] focus:outline-none focus:border-[#1B3B2B] focus:ring-1 focus:ring-[#1B3B2B]"
            />
          </div>

          {/* Nama Ilmiah */}
          <div>
            <label className="block text-xs font-semibold text-[#1B3B2B] mb-1.5">Nama ilmiah *</label>
            <input
              type="text"
              name="scientificName"
              required
              value={formData.scientificName}
              onChange={handleChange}
              placeholder="Contoh: Monstera deliciosa"
              className="w-full rounded-xl border border-[#D8D5C8] bg-white px-3.5 py-2 text-sm italic text-[#1B3B2B] placeholder-[#A3A899] focus:outline-none focus:border-[#1B3B2B] focus:ring-1 focus:ring-[#1B3B2B]"
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="block text-xs font-semibold text-[#1B3B2B] mb-1.5">Kategori *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#D8D5C8] bg-white px-3.5 py-2 text-sm text-[#1B3B2B] focus:outline-none focus:border-[#1B3B2B] focus:ring-1 focus:ring-[#1B3B2B]"
            >
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Sukulen">Sukulen</option>
            </select>
          </div>

          {/* Kebutuhan Cahaya */}
          <div>
            <label className="block text-xs font-semibold text-[#1B3B2B] mb-1.5">Kebutuhan cahaya *</label>
            <select
              name="sunlight"
              value={formData.sunlight}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#D8D5C8] bg-white px-3.5 py-2 text-sm text-[#1B3B2B] focus:outline-none focus:border-[#1B3B2B] focus:ring-1 focus:ring-[#1B3B2B]"
            >
              <option value="Terang tidak langsung">Terang tidak langsung</option>
              <option value="Cahaya langsung">Cahaya langsung</option>
              <option value="Redup / Teduh">Redup / Teduh</option>
            </select>
          </div>

          {/* Frekuensi Penyiraman */}
          <div>
            <label className="block text-xs font-semibold text-[#1B3B2B] mb-1.5">Frekuensi penyiraman *</label>
            <div className="flex items-center gap-3 pt-2 text-xs text-[#525B44]">
              {['Harian', '2–3 Hari Sekali', 'Mingguan'].map((item) => (
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
            <label className="block text-xs font-semibold text-[#1B3B2B] mb-1.5">URL gambar</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://contoh.com/tanaman.jpg"
              className="w-full rounded-xl border border-[#D8D5C8] bg-white px-3.5 py-2 text-sm text-[#1B3B2B] placeholder-[#A3A899] focus:outline-none focus:border-[#1B3B2B] focus:ring-1 focus:ring-[#1B3B2B]"
            />
          </div>

          {/* Deskripsi */}
          <div className="md:col-span-3">
            <label className="block text-xs font-semibold text-[#1B3B2B] mb-1.5">Deskripsi / perawatan khusus</label>
            <textarea
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              placeholder="Catat media tanam, kelembapan, atau hal kecil yang perlu diingat..."
              className="w-full rounded-xl border border-[#D8D5C8] bg-white px-3.5 py-2 text-sm text-[#1B3B2B] placeholder-[#A3A899] focus:outline-none focus:border-[#1B3B2B] focus:ring-1 focus:ring-[#1B3B2B]"
            />
          </div>

          {/* Tombol Submit */}
          <div className="md:col-span-3 flex justify-end mt-2">
            <button
              type="submit"
              className="rounded-xl bg-[#1B3B2B] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#142D21] transition shadow-sm"
            >
              + Tambah tanaman
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}