import type { ReactNode } from 'react';

export type Category = 'CS' | 'DT' | 'EE';

const CATEGORY_CLASS: Record<Category, string> = {
  CS: 'cat-cs',
  DT: 'cat-dt',
  EE: 'cat-ee',
};

// Phosphor Icons (MIT license, https://phosphoricons.com), fill style.
// CS = Compass (bearing / evaluation), DT = Stack (layered systems),
// EE = Broadcast (one architecture reaching every channel).
const PATHS: Record<Category, ReactNode> = {
  CS: (
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm51.58,57.79-32,64a4.08,4.08,0,0,1-1.79,1.79l-64,32a4,4,0,0,1-5.37-5.37l32-64a4.08,4.08,0,0,1,1.79-1.79l64-32A4,4,0,0,1,179.58,81.79Z" />
  ),
  DT: (
    <>
      <path d="M220,169.09l-92,53.65L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,169.09Z" />
      <path d="M220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09Z" />
      <path d="M28,86.91l96,56a8,8,0,0,0,8.06,0l96-56a8,8,0,0,0,0-13.82l-96-56a8,8,0,0,0-8.06,0l-96,56a8,8,0,0,0,0,13.82Z" />
    </>
  ),
  EE: (
    <path d="M168,128a40,40,0,1,1-40-40A40,40,0,0,1,168,128Zm40,0a79.74,79.74,0,0,0-20.37-53.33,8,8,0,1,0-11.92,10.67,64,64,0,0,1,0,85.33,8,8,0,0,0,11.92,10.67A79.79,79.79,0,0,0,208,128ZM80.29,85.34A8,8,0,1,0,68.37,74.67a79.94,79.94,0,0,0,0,106.67,8,8,0,0,0,11.92-10.67,63.95,63.95,0,0,1,0-85.33Zm158.28-4A119.48,119.48,0,0,0,213.71,44a8,8,0,1,0-11.42,11.2,103.9,103.9,0,0,1,0,145.56A8,8,0,1,0,213.71,212,120.12,120.12,0,0,0,238.57,81.29ZM32.17,168.48A103.9,103.9,0,0,1,53.71,55.22,8,8,0,1,0,42.29,44a119.87,119.87,0,0,0,0,168,8,8,0,1,0,11.42-11.2A103.61,103.61,0,0,1,32.17,168.48Z" />
  ),
};

export default function CategoryIcon({
  category,
  size = 26,
  className = '',
}: {
  category: Category;
  size?: number;
  className?: string;
}): ReactNode {
  return (
    <svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="currentColor"
      className={`${CATEGORY_CLASS[category]} ${className}`.trim()}
      aria-hidden="true"
    >
      {PATHS[category]}
    </svg>
  );
}
