import React from 'react';
import { Menu } from 'lucide-react';

interface MobileMenuToggleProps {
    setIsOpen: (isOpen: boolean) => void;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ setIsOpen }) => {
    return (
        <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-gray-500 hover:text-gray-700"
        >
            <Menu className="h-6 w-6" />
        </button>
    );
};

export default MobileMenuToggle;