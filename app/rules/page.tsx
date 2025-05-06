import React, { useState } from 'react';
import MainLayout from "@/src/Layouts/MainLayout/MainLayout";
import Link from 'next/link';

const Rules = () => {

  return (
    <section>
      <div className="flex justify-end">
        <Link href="/login"><button className="btn-primary w-[200px] text-black">Login</button></Link>
      </div>
      <div className='flex flex-col justify-center mt-5 p-16'>
        <button className='btn-third p-4 font-semibold text-xl'>Rules</button>
        <div className='mt-4 font-bold'>
          <p>If no traction (social media posts) for 1 month: 10% decrease.</p>
          <p>Social media traction: 10% increase.</p>
          <p>For every 1 million stream for new single release: 1% increase.</p>
          <p>If album release before the end of the year: 10% increase.</p>
          <p>If no album release: 10% decrease.</p>
          <p>If a movie is made for artist: 50% increase.</p>
          <p>If artist gets caught in a majot controversy: 50% decrease.</p>
          <p>If artist has a major PR win: 50% increase.</p>
          <p>If artist doesn&apost tour: 20% decrease.</p>
          <p>If artist announces tour: 20% increase.</p>
          <p>For smaller (indie artists), these percentages are higer - tier based.</p>
        </div>
      </div>
    </section>
  );
};

export default function RulesComponent() {
  return <MainLayout>
    <Rules />
  </MainLayout>
};