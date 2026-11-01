import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroHeader from './components/HeroHeader';
import FilterBar from './components/FilterBar';
import EmptyState from './components/EmptyState';
import PlantCard from './components/PlantCard';
import AddPlantPage from './components/AddPlantPage';

// Import service API yang terpisah
import { getInitialPlants } from './api/plantAPI';

export default function App() {
  const [plants, setPlants] = useState([]);
  const [activeTab, setActiveTab] = useState('koleksi'); // Navigasi Tab: 'koleksi' | 'tambah'
  const [activeCategory, setActiveCategory] = useState('Semua tanaman');
  const [searchQuery, setSearchQuery] = useState('');

  // State Manajemen AJAX API (Syarat Tugas 7)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi memanggil service API secara asinkron
  const loadInitialPlants = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getInitialPlants();
      setPlants(data);
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat memuat data dari server.');
    } finally {
      setLoading(false);
    }
  };

  // Jalankan pemanggilan API saat aplikasi pertama kali dimuat
  useEffect(() => {
    loadInitialPlants();
  }, []);

  // Handler Menambah Tanaman Baru (Tugas 6)
  const handleAddPlant = (newPlant) => {
    setPlants((prev) => [
      {
        ...newPlant,
        family: 'BOTANICAL',
        code: `RB / 00${prev.length + 1}`,
        careLevel: 'Sedang',
      },
      ...prev,
    ]);
    setActiveTab('koleksi'); // Kembali ke tab koleksi setelah menambah
  };

  // Handler Menghapus Tanaman
  const handleDeletePlant = (id) => {
    setPlants((prev) => prev.filter((plant) => plant.id !== id));
  };

  // Logika Penyaringan Gabungan (Filter Kategori + Search Bar)
  const filteredPlants = plants.filter((plant) => {
    const matchesCategory =
      activeCategory === 'Semua tanaman' || plant.category === activeCategory;
    const matchesSearch =
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F7F6F0] text-[#1B3B2B] font-sans pb-16 selection:bg-[#EAE8DE]">
      {/* Header & Navigasi Utama */}
      <Navbar
        plantCount={plants.length}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main>
        {activeTab === 'tambah' ? (
          /* Halaman Form Tambah Tanaman */
          <AddPlantPage
            onAddPlant={handleAddPlant}
            onCancel={() => setActiveTab('koleksi')}
          />
        ) : (
          /* Halaman Utama Koleksi Tanaman */
          <>
            <HeroHeader
              total={plants.length}
              categoryCount={new Set(plants.map((p) => p.category)).size}
              easyCareCount={
                plants.filter(
                  (p) => p.careLevel === 'Mudah' || p.watering === 'Mingguan'
                ).length
              }
            />

            <FilterBar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              totalPlants={filteredPlants.length}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            {/* --- PENANGANAN STATE KONSUMSI API (TUGAS 7) --- */}

            {/* 1. STATE LOADING (Indikator Proses Fetch) */}
            {loading && (
              <div className="mx-auto max-w-6xl px-6 py-16 text-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[#1B3B2B] border-r-transparent"></div>
                <p className="mt-3 text-sm font-medium text-[#525B44]">
                  Sedang mengambil katalog tanaman dari server API...
                </p>
              </div>
            )}

            {/* 2. STATE ERROR (Pesan Gagal & Tombol Coba Lagi) */}
            {error && !loading && (
              <div className="mx-auto my-8 max-w-md rounded-2xl border border-red-200 bg-red-50/80 p-6 text-center shadow-xs">
                <p className="text-sm font-semibold text-red-800">⚠️ {error}</p>
                <p className="mt-1 text-xs text-red-600">
                  Pastikan koneksi internet aktif atau endpoint server benar.
                </p>
                <button
                  onClick={loadInitialPlants}
                  className="mt-4 rounded-xl bg-red-700 px-5 py-2 text-xs font-semibold text-white hover:bg-red-800 transition shadow-xs cursor-pointer"
                >
                  Coba Lagi
                </button>
              </div>
            )}

            {/* 3. STATE SUCCESS / DATA KOSONG */}
            {!loading && !error && (
              filteredPlants.length === 0 ? (
                <EmptyState />
              ) : (
                <section className="mx-auto max-w-6xl px-6 py-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredPlants.map((plant) => (
                      <PlantCard
                        key={plant.id}
                        plant={plant}
                        onDelete={handleDeletePlant}
                      />
                    ))}
                  </div>
                </section>
              )
            )}
          </>
        )}
      </main>

      {/* Footer Aplikasi */}
      <footer className="mt-16 text-center text-xs text-[#8C9380] border-t border-[#E6E4DA] pt-8">
        Tumbuh pelan, tumbuh bersama. · Rimbun Jurnal Botani / Panduan perawatan bersifat umum
      </footer>
    </div>
  );
}