export interface MenuItem {
  name: string;
  link?: string;
  icon: string;
  notificationCount?: number;
  isDisabled?: boolean;
  group: string;
}

export const MENU_ITEMS: Array<MenuItem> = [
  {
    name: 'Inbox',
    link: '/inbox',
    icon: 'icon icon-inbox',
    notificationCount: 20,
    group: 'service',
  },
  {
    name: 'Flagged',
    link: '/flagged',
    icon: 'icon icon-star-o',
    notificationCount: 0,
    group: 'service',
  },
  {
    name: 'Draft',
    link: '/draft',
    icon: 'icon icon-draft',
    notificationCount: 0,
    isDisabled: true,
    group: 'service',
  },
  {
    name: 'Sent',
    link: '/sent',
    icon: 'icon icon-sent',
    notificationCount: 0,
    isDisabled: true,
    group: 'service',
  },
  {
    name: 'Trash',
    link: '/trash',
    icon: 'icon icon-trash',
    notificationCount: 0,
    group: 'service',
  },
  {
    name: 'More',
    link: '/more',
    icon: 'icon icon-more',
    notificationCount: 0,
    group: 'service',
  },
  {
    name: 'Office',
    link: '/office',
    icon: 'icon icon-folder office',
    group: 'group',
  },
  {
    name: 'Personal',
    link: '/personal',
    icon: 'icon icon-folder personal',
    group: 'group',
  },
  {
    name: 'Freelance',
    link: '/freelance',
    icon: 'icon icon-folder freelance',
    group: 'group',
  },
];
