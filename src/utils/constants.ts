import { config } from 'dotenv';

config();

export const APP_SECRET = process.env.SECRET_KEY;
export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV;