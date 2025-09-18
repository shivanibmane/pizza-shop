'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-red-50/30 via-orange-50/20 to-yellow-50/30 dark:from-red-950/10 dark:via-orange-950/10 dark:to-yellow-950/10'>
      {/* Background pattern */}
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f59e0b" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30'></div>

      <div className='relative w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto flex flex-col justify-center min-h-screen p-3 xs:p-4 sm:p-6 lg:p-8'>
        <div className='bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl xs:rounded-3xl shadow-2xl border border-orange-200/50 dark:border-orange-800/50 p-4 xs:p-6 sm:p-8 lg:p-12'>
          {/* Back button */}
          <div className='mb-4 xs:mb-5 sm:mb-6 lg:mb-8 cursor-pointer inline-flex items-center justify-center w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-xl xs:rounded-2xl bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-all duration-200 hover:scale-105 active:scale-[0.95]'>
            <ChevronLeft className='text-orange-600 dark:text-orange-400 h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6' />
          </div>

          {/* Form header */}
          <div className='text-center mb-6 xs:mb-7 sm:mb-8 lg:mb-10'>
            <div className='inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 mb-4 xs:mb-5 sm:mb-6'>
              <span className='text-xs xs:text-sm font-semibold text-orange-800 dark:text-orange-200'>
                {isSignUp ? '🎉 Join SahandPizza Family' : '🍕 Welcome Back'}
              </span>
            </div>

            <h2 className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 xs:mb-4 sm:mb-6 leading-tight'>
              <span className='bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </span>
            </h2>
            <p className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto px-2'>
              {isSignUp
                ? 'Join SahandPizza today and discover exclusive deals on authentic Italian cuisine delivered hot to your door!'
                : 'Welcome back to SahandPizza! Log in to continue your delicious journey with us.'}
            </p>
          </div>

          <div className='pt-1 xs:pt-2'>
            <Button
              type='submit'
              className='w-full h-12 xs:h-13 sm:h-14 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 text-white text-base xs:text-lg sm:text-xl font-bold rounded-xl xs:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border-0 cursor-pointer'
            >
              {isSignUp ? 'Join SahandPizza Family! 🍕' : 'Welcome Back! 🎉'}
            </Button>
          </div>

          {/* Toggle form */}
          <div className='mt-6 xs:mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 px-2'>
            <p className='text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center'>
              {isSignUp
                ? 'Already part of our pizza family?'
                : 'New to SahandPizza?'}
            </p>
            <Button
              variant='link'
              className='text-base xs:text-lg sm:text-xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent hover:from-red-700 hover:via-orange-600 hover:to-yellow-600 transition-all duration-200 p-0 h-auto cursor-pointer active:scale-[0.95]'
              onClick={toggleForm}
            >
              {isSignUp ? 'Sign in here' : 'Join us today'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}