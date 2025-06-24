'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Career', path: '/career' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-black/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-white py-4 font-extrabold text-2xl">Drillo</h1>

        <nav className="flex space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link key={item.name} href={item.path}>
                <span
                  className={`relative cursor-pointer font-medium transition-colors duration-300 py-4 px-2
                    ${isActive ? 'text-cyan-400 border-b-4 border-cyan-400' : 'text-white hover:text-cyan-400'}
                  `}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
