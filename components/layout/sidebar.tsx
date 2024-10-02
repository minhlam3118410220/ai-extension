'use client';
import React, { useState } from 'react';
import { DashboardNav } from '@/components/dashboard-nav';
import { navItems } from '@/constants/data';
import { cn } from '@/lib/utils';
import { AlignJustify } from 'lucide-react';
import { useSidebar } from '@/hooks/useSidebar';
import Link from 'next/link';
import brain from '@/public/brain.svg';
import Image from 'next/image';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();

  const handleToggle = () => {
    toggle();
  };

  return (
    <aside
      className={cn(
        `relative md:block hidden h-auto flex-none border-r bg-[#2C2C2C] transition-[width] duration-500`,
        !isMinimized ? 'w-72' : 'w-[72px]',
        className
      )}
    >
      <div 
       className='p-5 pt-10'
        >
        <Link
          href={'/'}
          target="_blank"
          className={cn(!isMinimized ? 'block' : 'hidden')}
        >
          <Image src={brain} className='text-white' width={24} height={24} alt='Logo' />
        </Link>
      </div>
      <AlignJustify
        className={cn(
          'absolute  top-10 z-50 cursor-pointer text-3xl text-white',
          isMinimized && 'rotate-180', 
          !isMinimized ? 'right-5' : 'right-6'
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </aside>
  );
}
