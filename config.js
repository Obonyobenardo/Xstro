import dotenv from 'dotenv';
dotenv.config({ path: 'config.env' });

const config = {
  SESSION_ID: process.env.SESSION_ID || 'XSTRO_83_99_41',
  SUDO: process.env.SUDO || '',
  BOT_INFO: process.env.BOT_INFO || 'αѕтяσχ11;χѕтяσ м∂',
  WARN_COUNT: process.env.WARN_COUNT || 3,
  TIME_ZONE: process.env.TIME_ZONE || 'Africa/Lagos',
  VERSION: '1.5.0',
};

export { config };
export default config;
