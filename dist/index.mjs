// index.mjs

/**
 * Lista de endpoints soportados por la API
 */
export const endpoints = [
  "fox", "cat", "birb", "panda", "red_panda", 
  "pikachu", "racoon", "kangaroo", "whale", 
  "dog", "bird", "koala"
];

const BASE_URL = "https://api.some-random-api.com/img";

/**
 * Función principal para obtener la imagen
 * @param {string} animal - El nombre del animal
 * @returns {Promise<{link: string}>}
 */
export async function getAnimal(animal) {
  const type = animal?.toLowerCase();

  if (!endpoints.includes(type)) {
    throw new Error(`Animal no válido. Opciones: ${endpoints.join(", ")}`);
  }

  try {
    const response = await fetch(`${BASE_URL}/${type}`);
    
    if (!response.ok) {
      throw new Error(`Error en la API: ${response.status}`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    throw new Error(`Error al obtener la imagen: ${error.message}`);
  }
}

export default {
  getAnimal,
  endpoints
};