import { getAnimal, endpoints } from './src/services/animals.js';
import { getYouTubeMP3 } from './src/services/youtube.js';
import { getWelcomeImage } from './src/services/canvas.js';

// Esto permite que funcione con: import { getAnimal } from 'darkcore-api'
export {
  getAnimal,
  endpoints,
  getYouTubeMP3,
  getWelcomeImage
};

// Esto permite que funcione con: const api = require('darkcore-api')
export default {
  getAnimal,
  endpoints,
  getYouTubeMP3,
  getWelcomeImage
};