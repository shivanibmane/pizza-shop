
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
  Pizza,
  MapPin,
  Phone,
  Clock,
  Heart,
  CreditCard,
  Shield,
  Truck,
  Award,
  Pocket,
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='relative bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden border-t border-gray-200'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f59e0b" fill-opacity="0.2"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'></div>
      </div>

      {/* Newsletter Section */}
      <div className='relative border-b border-gray-200'>
        <div className='container mx-auto px-4 py-12 md:py-16'>
          <div className='grid lg:grid-cols-2 gap-8 md:gap-12 items-center'>
            <div className='text-center lg:text-left'>
              <h3 className='text-2xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-4'>
                <span className='bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
                  Stay Updated! 🍕
                </span>
              </h3>
              <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                Get exclusive deals, new pizza launches, and mouth-watering
                offers delivered straight to your inbox!
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md lg:max-w-none mx-auto lg:mx-0'>
              <Input
                type='email'
                placeholder='Enter your email address'
                className='h-12 md:h-14 px-4 md:px-6 rounded-2xl bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 text-base md:text-lg shadow-sm'
              />
              <Button className='h-12 md:h-14 px-6 md:px-8 rounded-2xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 text-white font-semibold transition-all duration-200 hover:scale-105 border-0 text-base md:text-lg whitespace-nowrap shadow-lg'>
                Subscribe
                <Send className='ml-2 h-4 w-4 md:h-5 md:w-5' />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className='relative container mx-auto px-4 py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12'>
          {/* Brand Section */}
          <div className='lg:col-span-2 space-y-4 md:space-y-6 text-center md:text-left'>
            <div className='flex items-center justify-center md:justify-start space-x-3'>
              <div className='w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center'>
                <Pizza className='h-4 w-4 md:h-5 md:w-5 text-white' />
              </div>
              <div>
                <h2 className='text-xl md:text-2xl font-black'>
                  <span className='bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
                    SahandPizza
                  </span>
                </h2>
                <p className='text-xs md:text-sm text-gray-500'>
                  Authentic Italian Since 2019
                </p>
              </div>
            </div>

            <p className='text-gray-600 leading-relaxed text-base md:text-lg'>
              We&apos;re passionate about bringing you the most authentic
              Italian pizza experience with traditional wood-fired ovens and the
              finest imported ingredients.
            </p>

            {/* Social Media */}
            <div>
              <h4 className='font-bold text-base md:text-lg mb-3 md:mb-4 text-gray-900'>
                Follow Us
              </h4>
              <div className='flex justify-center md:justify-start space-x-3 md:space-x-4'>
                {[
                  { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
                  { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
                  { icon: Twitter, href: '#', color: 'hover:text-blue-500' },
                  { icon: Youtube, href: '#', color: 'hover:text-red-600' },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 md:w-12 md:h-12 bg-gray-100 hover:bg-gray-200 rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 text-gray-600 ${social.color} border border-gray-200`}
                  >
                    <social.icon className='h-4 w-4 md:h-5 md:w-5' />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4 md:space-y-6 text-center md:text-left'>
            <h4 className='font-bold text-base md:text-lg text-gray-900'>
              Quick Links
            </h4>
            <ul className='space-y-2 md:space-y-3'>
              {[
                { name: 'Our Menu', href: '/menu' },
                { name: 'Order Online', href: '/order' },
                { name: 'Track Order', href: '/track' },
                { name: 'Locations', href: '/locations' },
                { name: 'Careers', href: '/careers' },
                { name: 'Franchise', href: '/franchise' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className='text-gray-600 hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 inline-block text-sm md:text-base'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className='space-y-4 md:space-y-6 text-center md:text-left'>
            <h4 className='font-bold text-base md:text-lg text-gray-900'>
              Customer Care
            </h4>
            <ul className='space-y-2 md:space-y-3'>
              {[
                { name: 'Help Center', href: '/help' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Food Safety', href: '/safety' },
                { name: 'Nutrition Info', href: '/nutrition' },
                { name: 'Allergen Info', href: '/allergens' },
                { name: 'Feedback', href: '/feedback' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className='text-gray-600 hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 inline-block text-sm md:text-base'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4 md:space-y-6 text-center md:text-left'>
            <h4 className='font-bold text-base md:text-lg text-gray-900'>
              Get in Touch
            </h4>
            <div className='space-y-3 md:space-y-4'>
              <div className='flex items-start justify-center md:justify-start space-x-3'>
                <div className='w-8 h-8 md:w-10 md:h-10 bg-red-100 rounded-xl flex items-center justify-center mt-1'>
                  <MapPin className='h-4 w-4 md:h-5 md:w-5 text-red-600' />
                </div>
                <div className='text-left'>
                  <p className='text-gray-900 font-medium text-sm md:text-base'>
                    123 Pizza Street
                  </p>
                  <p className='text-gray-500 text-xs md:text-sm'>
                    Downtown, NY 10001
                  </p>
                </div>
              </div>

              <div className='flex items-start justify-center md:justify-start space-x-3'>
                <div className='w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-xl flex items-center justify-center mt-1'>
                  <Phone className='h-4 w-4 md:h-5 md:w-5 text-orange-600' />
                </div>
                <div className='text-left'>
                  <p className='text-gray-900 font-medium text-sm md:text-base'>
                    +1 (555) 123-PIZZA
                  </p>
                  <p className='text-gray-500 text-xs md:text-sm'>
                    24/7 Order Hotline
                  </p>
                </div>
              </div>

              <div className='flex items-start justify-center md:justify-start space-x-3'>
                <div className='w-8 h-8 md:w-10 md:h-10 bg-yellow-100 rounded-xl flex items-center justify-center mt-1'>
                  <Clock className='h-4 w-4 md:h-5 md:w-5 text-yellow-600' />
                </div>
                <div className='text-left'>
                  <p className='text-gray-900 font-medium text-sm md:text-base'>
                    11AM - 11PM
                  </p>
                  <p className='text-gray-500 text-xs md:text-sm'>
                    Daily Delivery Hours
                  </p>
                </div>
              </div>

              <div className='flex items-start justify-center md:justify-start space-x-3'>
                <div className='w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-xl flex items-center justify-center mt-1'>
                  <Pocket className='h-4 w-4 md:h-5 md:w-5 text-purple-600' />
                </div>
                <div className='text-left'>
                  <p className='text-gray-900 font-medium text-sm md:text-base clamp'>
                    hello@sahand.com
                  </p>
                  <p className='text-gray-500 text-xs md:text-sm'>
                    Customer Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className='relative border-t border-gray-200'>
        <div className='container mx-auto px-4 py-6 md:py-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center'>
            {[
              {
                icon: Shield,
                title: 'Safe & Secure',
                subtitle: 'SSL Protected',
                bgColor: 'bg-blue-100',
                iconColor: 'text-blue-600',
              },
              {
                icon: Truck,
                title: 'Fast Delivery',
                subtitle: '25-min Average',
                bgColor: 'bg-green-100',
                iconColor: 'text-green-600',
              },
              {
                icon: CreditCard,
                title: 'Easy Payment',
                subtitle: 'All Cards Accepted',
                bgColor: 'bg-indigo-100',
                iconColor: 'text-indigo-600',
              },
              {
                icon: Award,
                title: 'Quality Assured',
                subtitle: '100% Fresh',
                bgColor: 'bg-amber-100',
                iconColor: 'text-amber-600',
              },
            ].map((badge, index) => (
              <div
                key={index}
                className='flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3'
              >
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 ${badge.bgColor} rounded-xl flex items-center justify-center`}
                >
                  <badge.icon
                    className={`h-4 w-4 md:h-5 md:w-5 ${badge.iconColor}`}
                  />
                </div>
                <div className='text-center md:text-left'>
                  <p className='text-gray-900 font-medium text-xs md:text-sm'>
                    {badge.title}
                  </p>
                  <p className='text-gray-500 text-xs'>{badge.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='relative border-t border-gray-200 bg-gray-50'>
        <div className='container mx-auto px-4 py-4 md:py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0'>
            <div className='flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-gray-500 text-xs md:text-sm text-center'>
              <p>&copy; 2024 SahandPizza. All rights reserved.</p>
              <div className='flex flex-wrap justify-center space-x-3 md:space-x-4'>
                <Link
                  href='/privacy'
                  className='hover:text-orange-600 transition-colors'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='/terms'
                  className='hover:text-orange-600 transition-colors'
                >
                  Terms of Service
                </Link>
                <Link
                  href='/cookies'
                  className='hover:text-orange-600 transition-colors'
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className='flex items-center space-x-2 text-gray-500 text-xs md:text-sm'>
              <Heart className='h-4 w-4 md:h-5 md:w-5 text-red-500' />
              <span>Made with love in New York</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
