'use client';
import React from 'react';
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from '@/components/ui/glowing-stars';

export function GlowingStarsBackgroundCardPreview() {
  return (
    <a
      href='/example'
      target='_blank'
      rel='noopener noreferrer'
      className='group flex py-20 items-center justify-center antialiased'
    >
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Example</GlowingStarsTitle>
        <div className='flex justify-between items-center gap-1'>
          <GlowingStarsDescription className='text-xl'>Click here to see more</GlowingStarsDescription>
          <div className='h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </a>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className='h-4 w-4 text-white stroke-2'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
    </svg>
  );
};
