import A from '@/pages/a/A';
import B from '@/pages/b/B';
export const routerConfig = [
  {
    path: '/a',
    component: A,
    extra: true,
    children: [],
  },
  {
    path: '/b',
    component: B,
    extra: true,
    children: [],
  },
];
