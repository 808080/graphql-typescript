import { verify } from 'jsonwebtoken';
import { APP_SECRET } from './constants';

export interface AuthTokenPayload {
  userId: number;
};

export function decodeAuthHeader(authHeader: String): AuthTokenPayload {
  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    throw new Error('No token provided');
  }

  return verify(token, APP_SECRET) as AuthTokenPayload;
}