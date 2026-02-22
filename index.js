import { getAnimal, endpoints } from './services/animals.js';
import { getYouTubeMP3 } from './services/youtube.js';
import { getWelcomeImage } from './services/canvas.js';

// Exportación para ES Modules (import)
export {
  getAnimal,
  endpoints,
  getYouTubeMP3,
  getWelcomeImage
};

// Exportación por defecto para compatibilidad
export default {
  getAnimal,
  endpoints,
  getYouTubeMP3,
  getWelcomeImage
};