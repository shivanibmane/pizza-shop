'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, User, Menu, X, LogOut, Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
// import getUserSession from '@/actions/auth/getUserSession';
// import logoutAction from '@/actions/auth/logout';
import { useRouter } from 'next/navigation';
import { IUserEntity } from 'oneentry/dist/users/usersInterfaces';
// import useCartStore from '@/stores/cartStore';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // const [user, setUser] = useState<IUserEntity | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  // const cartItems = useCartStore((state) => state.cart);


  // Close navbar when clicking outside of it or any item in it (except search)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Don't close if clicking on the mobile menu button
      const target = event.target as HTMLElement;
      const mobileMenuButton = document.querySelector('[aria-label*="menu"]');

      if (
        mobileMenuButton &&
        (mobileMenuButton.contains(target) || mobileMenuButton === target)
      ) {
        return;
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      // Use setTimeout to avoid immediate closure
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
      }, 0);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim().length) {
      router.push(
        `/search?searchTerm=${encodeURIComponent(searchQuery.trim())}`
      );
      setIsMobileMenuOpen(false); // Close mobile menu on search
    }
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu on item click
  };

  const handleMobileMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className='sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-950/80 border-b border-gray-200/20 dark:border-gray-800/20 transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo Section */}
          <div className='flex items-center'>
            <Link href='/' className='flex-shrink-0 group'>
              <span className='text-3xl font-black bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent hover:from-red-700 hover:via-orange-600 hover:to-yellow-600 transition-all duration-300 tracking-tight'>
                🍕 SahandPizza
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            {/* Search Bar */}
            <div className='relative group'>
              <form onSubmit={handleSearch} className='relative'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-900 h-5 w-5 transition-colors group-focus-within:text-red-600' />
                <Input
                  type='text'
                  placeholder='Search pizzas...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='pl-12 pr-4 py-3 w-80 bg-red-50/80 dark:bg-red-900/20 border-0 rounded-2xl backdrop-blur-sm transition-all duration-300 focus:bg-white dark:focus:bg-red-900/30 focus:shadow-lg focus:scale-105 placeholder:text-gray-400 focus:ring-2 focus:ring-red-200'
                />
              </form>
            </div>

            {/* Cart Button */}
            <Link href='/cart' onClick={handleMenuItemClick}>
              <Button
                size='icon'
                className='relative h-12 w-12 rounded-2xl bg-orange-50/80 hover:bg-orange-100 dark:bg-orange-900/20 dark:hover:bg-orange-900/40 border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer'
                variant='ghost'
              >
                <ShoppingCart className='h-6 w-6 text-orange-600 dark:text-orange-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300' />
                {/* {cartItems.length > 0 && (
                  <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-lg animate-pulse min-w-[20px] h-5'>
                    {cartItems.length}
                  </span>
                )} */}
              </Button>
            </Link>

            {/* Loading State */}
            {/* {(
              <div className='flex items-center'>
                <div className='h-12 w-12 rounded-2xl bg-orange-100 dark:bg-orange-900/30 animate-pulse flex items-center justify-center'>
                  <div className='h-8 w-8 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-spin opacity-20'></div>
                </div>
              </div>
            )} */}

            {/* User Dropdown */}
            {(
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='ghost'
                    className='relative h-12 w-12 rounded-2xl p-0 overflow-hidden ring-2 ring-transparent hover:ring-orange-200 dark:hover:ring-orange-800 transition-all duration-300 hover:scale-105 cursor-pointer'
                  >
                    <Avatar className='h-12 w-12 rounded-2xl shadow-lg'>
                      <AvatarFallback className='rounded-2xl bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 text-white font-semibold text-lg hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 transition-all duration-300'>
                        S
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className='w-64 p-2 mt-2 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-2xl shadow-2xl'
                  align='end'
                  forceMount
                >
                  <DropdownMenuLabel className='font-normal p-4'>
                    <div className='flex flex-col space-y-2'>
                      <p className='text-lg font-semibold leading-none bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
                        User
                      </p>
                      <p className='text-sm leading-none text-gray-500 dark:text-gray-400'>
                        Shivani
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className='bg-gradient-to-r from-red-200 via-orange-200 to-yellow-200 dark:from-red-800 dark:via-orange-800 dark:to-yellow-800 h-px' />
                  <DropdownMenuItem className='p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/30 focus:bg-red-50 dark:focus:bg-red-950/30 transition-colors duration-200 cursor-pointer'>
                    <Link href='/profile' className='flex w-full items-center'>
                      <User className='mr-3 h-5 w-5 text-red-600 dark:text-red-400' />
                      <span className='font-medium'>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='p-3 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-950/30 focus:bg-orange-50 dark:focus:bg-orange-950/30 transition-colors duration-200 cursor-pointer'>
                    <Link href='/orders' className='flex w-full items-center'>
                      <ShoppingCart className='mr-3 h-5 w-5 text-orange-600 dark:text-orange-400' />
                      <span className='font-medium'>Orders</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className='bg-gradient-to-r from-red-200 via-orange-200 to-yellow-200 dark:from-red-800 dark:via-orange-800 dark:to-yellow-800 h-px' />
                  <DropdownMenuItem
                    className='p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 focus:bg-red-50 dark:focus:bg-red-950/50 transition-colors duration-200 cursor-pointer text-red-600 dark:text-red-400'
                  // onClick={handleLogout}
                  >
                    <LogOut className='mr-3 h-5 w-5' />
                    <span className='font-medium'>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Auth Buttons */}
            {(
              <div className='flex items-center space-x-3'>
                {/* <Link href='/auth?type=login'>
                  <Button
                    variant='outline'
                    className='h-12 px-8 rounded-2xl border-2 border-orange-200 dark:border-orange-700 bg-transparent hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold text-orange-700 dark:text-orange-300 cursor-pointer'
                  >
                    Login
                  </Button>
                </Link> */}
                <Link href='/auth?type=signup'>
                  <Button className='h-12 px-8 rounded-2xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 cursor-pointer'>
                    Order Now! 🍕
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden flex items-center'>
            <Button
              variant='ghost'
              size='icon'
              onClick={handleMobileMenuToggle}
              className='h-12 w-12 rounded-2xl bg-orange-50/80 hover:bg-orange-100 dark:bg-orange-900/20 dark:hover:bg-orange-900/40 transition-all duration-300 hover:scale-105 cursor-pointer relative z-10'
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className='h-6 w-6 text-orange-600 dark:text-orange-400' />
              ) : (
                <Menu className='h-6 w-6 text-orange-600 dark:text-orange-400' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className='lg:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-800/50 shadow-2xl animate-in slide-in-from-top-2 duration-200'
        >
          <div className='px-6 pt-6 pb-4 space-y-4'>
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className='relative group'>
              <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors group-focus-within:text-red-600' />
              <Input
                type='text'
                placeholder='Search pizzas...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='pl-12 pr-4 py-4 bg-red-50 dark:bg-red-900/20 border-0 rounded-2xl focus:bg-white dark:focus:bg-red-900/30 focus:shadow-lg transition-all duration-300 placeholder:text-gray-400 text-base focus:ring-2 focus:ring-red-200'
              />
            </form>

            {/* Mobile Cart */}
            <Link
              href='/cart'
              className='flex items-center justify-between p-4 rounded-2xl bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-all duration-300 group cursor-pointer'
              onClick={handleMenuItemClick}
            >
              <div className='flex items-center'>
                <ShoppingCart className='h-6 w-6 text-orange-600 dark:text-orange-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 mr-3' />
                <span className='font-medium text-gray-900 dark:text-gray-100'>
                  Cart
                </span>
              </div>
              {/* {cartItems.length > 0 && (
                <span className='inline-flex items-center justify-center px-3 py-1 text-sm font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full min-w-[24px] h-6'>
                  {cartItems.length}
                </span>
              )} */}
            </Link>
          </div>

          {/* Mobile User Section */}
          <div className='border-t border-gray-200/50 dark:border-gray-800/50 pt-4 pb-6'>

            <>
              {/* User Info */}
              <div className='flex items-center px-6 mb-4'>
                <Avatar className='h-12 w-12 rounded-2xl shadow-lg'>
                  <AvatarFallback className='rounded-2xl bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 text-white font-semibold text-lg'>
                    S
                  </AvatarFallback>
                </Avatar>
                <div className='ml-4'>
                  <div className='text-lg font-semibold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>

                  </div>
                  <div className='text-sm text-gray-500 dark:text-gray-400'>
                    User
                  </div>
                </div>
              </div>

              {/* User Menu Items */}
              <div className='px-6 space-y-2'>
                <Link
                  href='/profile'
                  className='flex items-center p-4 rounded-2xl hover:bg-red-50 dark:hover:bg-red-950/30 transition-all duration-300 group cursor-pointer'
                  onClick={handleMenuItemClick}
                >
                  <User className='h-6 w-6 text-red-600 dark:text-red-400 mr-3' />
                  <span className='font-medium text-gray-900 dark:text-gray-100'>
                    Your Profile
                  </span>
                </Link>

                <Link
                  href='/orders'
                  className='flex items-center p-4 rounded-2xl hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-all duration-300 group cursor-pointer'
                  onClick={handleMenuItemClick}
                >
                  <ShoppingCart className='h-6 w-6 text-orange-600 dark:text-orange-400 mr-3' />
                  <span className='font-medium text-gray-900 dark:text-gray-100'>
                    Pizza Orders
                  </span>
                </Link>

                <button
                  // onClick={handleLogout}
                  className='flex items-center w-full p-4 rounded-2xl hover:bg-yellow-50 dark:hover:bg-yellow-950/30 transition-all duration-300 text-yellow-700 dark:text-yellow-400 cursor-pointer'
                >
                  <LogOut className='h-6 w-6 mr-3' />
                  <span className='font-medium'>Log out</span>
                </button>
              </div>
            </>

            <div className='px-6 space-y-3'>
              <Link
                href='/auth?type=login'
                className='block w-full p-4 text-center rounded-2xl border-2 border-orange-200 dark:border-orange-700 bg-transparent hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 font-semibold text-orange-700 dark:text-orange-300 cursor-pointer'
                onClick={handleMenuItemClick}
              >
                Login
              </Link>
              <Link
                href='/auth?type=signup'
                className='block w-full p-4 text-center rounded-2xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 text-white font-semibold shadow-lg transition-all duration-300 cursor-pointer'
                onClick={handleMenuItemClick}
              >
                Order Now! 🍕
              </Link>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}