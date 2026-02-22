const BASE_URL = "https://api.some-random-api.com/img";

export const endpoints = [
  "fox", "cat", "birb", "panda", "red_panda", 
  "pikachu", "racoon", "kangaroo", "whale", 
  "dog", "bird", "koala"
];

/**
 * Obtiene una imagen aleatoria de la API
 * @param {string} animal - El nombre del animal (ej: 'fox')
 */
export async function getAnimal(animal) {
  const type = animal.toLowerCase();
  
  if (!endpoints.includes(type)) {
    throw new Error(`Animal no soportado. Intenta con: ${endpoints.join(", ")}`);
  }

  try {
    const response = await fetch(`${BASE_URL}/${type}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error al conectar con la API");
  }
}

export default { getAnimal, endpoints };