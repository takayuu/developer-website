import React, { useContext } from 'react';
import { FiX } from 'react-icons/fi';
import { MenuTrigger } from '../../providers/ProviderMenuTrigger';

const ButtonCloseMobileNav: React.FC = () => {
  const { closeMobileMenu } = useContext(MenuTrigger);

  return (
    <button
      onClick={closeMobileMenu}
      className="flex items-center justify-center w-8 h-8 sm:hidden"
    >
      <FiX className="w-6 h-6 text-gray-900" />
    </button>
  );
};

export default ButtonCloseMobileNav;
