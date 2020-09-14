import React from 'react';
import Link from 'next/link';

type Props = {
  path: string;
};

const HeaderNavItem: React.FC<Props> = ({ path, children }) => {
  return (
    <li className="ml-4 sm:ml-5 first:ml-0">
      <Link href={path}>
        <a className="text-sm font-medium transition-navigation sm:text-base hover:text-gray-900">
          {children}
        </a>
      </Link>
    </li>
  );
};

export default HeaderNavItem;
