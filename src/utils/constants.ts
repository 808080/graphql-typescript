import { config } from 'dotenv';

config();

export const APP_SECRET = process.env.SECRET_KEY || 'dev_secret';
export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV;