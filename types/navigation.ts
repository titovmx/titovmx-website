export const NavItem = {
  Home: 'home',
  Contacts: 'contacts',
  CV: 'resume',
  // Achievements: 'achievements',
} as const;

export type NavItemId = (typeof NavItem)[keyof typeof NavItem];
