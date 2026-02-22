var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  endpoints: () => endpoints,
  getAnimal: () => getAnimal
});
module.exports = __toCommonJS(index_exports);
var BASE_URL = "https://api.some-random-api.com/img";
var endpoints = [
  "fox",
  "cat",
  "birb",
  "panda",
  "red_panda",
  "pikachu",
  "racoon",
  "kangaroo",
  "whale",
  "dog",
  "bird",
  "koala"
];
async function getAnimal(animal) {
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
var index_default = { getAnimal, endpoints };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  endpoints,
  getAnimal
});
