import { getAnimal, endpoints } from './src/services/animals.js';
import { getYouTubeMP3 } from './src/services/youtube.js';
import { getWelcomeImage } from './src/services/canvas.js';

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