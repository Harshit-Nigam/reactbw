
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, MapPin, PlusCircle, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/discover', label: 'Discover', icon: LayoutGrid },
  { href: '/local', label: 'Local', icon: MapPin },
  { href: '/add', label: 'Add', icon: PlusCircle },
  { href: '/alerts', label: 'Alert', icon: Bell },
  { href: '/profile', label: 'Profile', icon: User },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="bg-white border-t border-gray-200 sticky bottom-0 z-50">
      <div className="container mx-auto px-2 h-16 flex items-center justify-around max-w-md">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                'flex flex-col items-center justify-center text-xs w-1/5 h-full',
                isActive ? 'text-cyan-600' : 'text-gray-500',
                'hover:text-cyan-500 transition-colors'
              )}
            >
              <item.icon className={cn('h-6 w-6 mb-0.5', isActive ? 'fill-cyan-100' : '')} strokeWidth={isActive ? 2.5 : 2} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
