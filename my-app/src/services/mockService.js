export const getUserAlpesgramMock = () => ({
  username: 'alpesUser123',
  fullName: 'Camilo Escobar',
  shortDescription: 'Fotógrafo y viajero',
  profileUrl: 'https://picsum.photos/100?random=1',
  posts: 80,
  followers: 120,
  following: 105,
});

export const getAlpesImages = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    id: i,
    url: `https://picsum.photos/350?random=${i}`,
  }));
};

export const mockLoginEscuderia = async (email, password) => {
  if (email === 'admin@escuderia.com' && password === '123456') {
    return { success: true, role: true };
  } else if (email === 'user@escuderia.com' && password === 'abcdef') {
    return { success: true, role: false };
  }
  return { success: false, message: 'Credenciales inválidas' };
};

const partsMock = [
  {
    id: 1,
    carMaker: 'Mazda',
    carModel: '3',
    carYear: 2020,
    partName: 'Chumacera frontal',
    price: 300,
    image: 'https://picsum.photos/200?random=101',
    available: true,
    description: 'Parte esencial para la suspensión delantera',
  },
  {
    id: 2,
    carMaker: 'Toyota',
    carModel: 'Corolla',
    carYear: 2021,
    partName: 'Bumper Trasero',
    price: 250,
    image: 'https://picsum.photos/200?random=102',
    available: false,
    description: 'Bumper plástico de alta resistencia',
  },
];

export const fetchParts = async () => partsMock;
export const fetchPartById = async (id) =>
  partsMock.find((p) => p.id === Number(id)) || null;
