import { useCallback } from 'react';
import { checkPermission } from './authorization';
import { Permission } from './permissions';

export function useAuthorization(userId: string, restaurantId: string) {
  const can = useCallback(
    async (permission: Permission) => {
      try {
        return await checkPermission(userId, restaurantId, permission);
      } catch (error) {
        return false;
      }
    },
    [userId, restaurantId]
  );

  return {
    can,
  };
} 