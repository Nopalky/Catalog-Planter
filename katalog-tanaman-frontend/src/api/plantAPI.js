// Service khusus untuk urusan fetch data API katalog botani
export const getInitialPlants = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  
  if (!response.ok) {
    throw new Error('Gagal terhubung ke server katalog.');
  }

  const data = await response.json();

  const plantPresets = [
    {
      name: 'Lily of the Valley',
      scientificName: 'Convallaria majalis',
      family: 'ASPARAGACEAE',
      code: 'RB / 003',
      category: 'Outdoor',
      sunlight: 'Teduh',
      watering: '2-3 hari sekali',
      careLevel: 'Sedang',
      imageUrl: 'https://cdn11.bigcommerce.com/s-e1jkv5nh46/images/stencil/1280x1280/products/12895/29563/J424-07__12195.1774146986.jpg?c=1'
    },
    {
      name: 'Monstera Deliciosa',
      scientificName: 'Monstera deliciosa',
      family: 'ARACEAE',
      code: 'RB / 001',
      category: 'Indoor',
      sunlight: 'Terang',
      watering: 'Mingguan',
      careLevel: 'Mudah',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8RRq2QuPU5X6YV1HewsCOqZ8UoTVRdgBGwYpGRl7vZFXSFTEuYntC7tB&s=10'
    },
    {
      name: 'Lidah Mertua',
      scientificName: 'Sansevieria trifasciata',
      family: 'ASPARAGACEAE',
      code: 'RB / 002',
      category: 'Sukulen',
      sunlight: 'Redup',
      watering: 'Mingguan',
      careLevel: 'Mudah',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7vegdWPptmP-FHYABdg__a-j18SCt-J78DEx5A648EkRNylCm3izpSDwXxZsmMMhiD-66LM1J8hlbh4aSqUX5Hizdyjr1gvtBJxX2Zk&s=10'
    }
  ];

  return data.map((item, index) => ({
    id: item.id.toString(),
    ...plantPresets[index % plantPresets.length],
  }));
};