import { PrismaClient } from './client';

// Pour éviter les erreurs d'initialisation
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Utiliser NodeJS.Global pour accéder à l'objet global
export const prisma =
  (globalThis as unknown as { prisma: PrismaClient | undefined }).prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  (globalThis as unknown as { prisma: PrismaClient }).prisma = prisma;
}

// Réexporter tous les éléments du client
export * from './client';
