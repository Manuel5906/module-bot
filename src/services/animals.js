const BASE_URL = "https://api.some-random-api.com/img";

export const endpoints = [
  "fox", "cat", "birb", "panda", "red_panda", 
  "pikachu", "racoon", "kangaroo", "whale", 
  "dog", "bird", "koala"
];

export async function getAnimal(animal) {
  const type = animal.toLowerCase();
  if (!endpoints.includes(type)) throw new Error(`Animal no soportado: ${type}`);

  const response = await fetch(`${BASE_URL}/${type}`);
  if (!response.ok) throw new Error("Error al conectar con la API");
  return await response.json();
}