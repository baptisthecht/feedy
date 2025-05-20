export enum Permission {
  // Permissions générales
  VIEW_RESTAURANT = 'VIEW_RESTAURANT',
  MANAGE_RESTAURANT = 'MANAGE_RESTAURANT',
  
  // Permissions spécifiques aux utilisateurs
  MANAGE_USERS = 'MANAGE_USERS',
  VIEW_USERS = 'VIEW_USERS',
  
  // Permissions spécifiques au menu
  MANAGE_MENU = 'MANAGE_MENU',
  VIEW_MENU = 'VIEW_MENU',
  
  // Permissions spécifiques aux commandes
  MANAGE_ORDERS = 'MANAGE_ORDERS',
  VIEW_ORDERS = 'VIEW_ORDERS',
}

export const RolePermissions: Record<string, Permission[]> = {
  ADMIN: [
    Permission.VIEW_RESTAURANT,
    Permission.MANAGE_RESTAURANT,
    Permission.MANAGE_USERS,
    Permission.VIEW_USERS,
    Permission.MANAGE_MENU,
    Permission.VIEW_MENU,
    Permission.MANAGE_ORDERS,
    Permission.VIEW_ORDERS,
  ],
  MANAGER: [
    Permission.VIEW_RESTAURANT,
    Permission.VIEW_USERS,
    Permission.MANAGE_MENU,
    Permission.VIEW_MENU,
    Permission.MANAGE_ORDERS,
    Permission.VIEW_ORDERS,
  ],
  STAFF: [
    Permission.VIEW_RESTAURANT,
    Permission.VIEW_MENU,
    Permission.VIEW_ORDERS,
  ],
}; 