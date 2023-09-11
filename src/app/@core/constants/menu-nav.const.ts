export const MENU_NAVIGATION = [
  {
    level: 1,
    title: 'Quản lý hệ thống',
    icon: 'mail',
    open: true,

    disabled: false,
    children: [
      {
        level: 2,
        title: 'Nhân sự',
        icon: 'bars',
        open: false,

        disabled: false,
        routerLink: '/staffs',
        // children: [
        //   {
        //     level: 3,
        //     title: 'Option 1',
        //
        //     disabled: false,
        //   },
        //   {
        //     level: 3,
        //     title: 'Option 2',
        //
        //     disabled: true,
        //   },
        // ],
      },
      {
        level: 2,
        title: 'Group 2',
        icon: 'bars',

        disabled: false,
      },
      {
        level: 2,
        title: 'Group 3',
        icon: 'bars',

        disabled: false,
      },
    ],
  },
  {
    level: 1,
    title: 'Team Group',
    icon: 'team',
    open: false,

    disabled: false,
    children: [
      {
        level: 2,
        title: 'User 1',
        icon: 'user',

        disabled: false,
      },
      {
        level: 2,
        title: 'User 2',
        icon: 'user',

        disabled: false,
      },
    ],
  },
];
