import React, { useState } from 'react';
import MainLayout from "@/src/Layouts/MainLayout/MainLayout";

const About = () => {

  return (
    <section>
      <div className="flex justify-end">
        <button className="btn-primary w-[200px]">Login</button>
      </div>
      <div className='flex flex-col justify-center mt-5 p-16'>
        <button className='btn-third p-4 font-semibold text-xl'>About</button>
        <div className='mt-4 font-bold'>
           <p>Verata is a stablecoin based dynamic prediction market around artists.</p>
           <p>In other words, stock market created for artists.</p>
           <p>It is a dynamic prediction market, allowing you to have monetary incentives by investing in artists you believe in.</p>
           <p>Tickers that are generated will be stablecoins, meaning it will not be affected by market conditions. Instead, the value of the token will solely depend on the artist performance, which you can read the rules <span className='text-red-500'>here.</span></p>
           <p>You are free to launch on any artists, major or independent, as long as you can add their socials/steaming links as a data souuce.</p>
           <p>Think about it as a Polymarket meets pump.fun</p>
        </div>
      </div>
    </section>
  );
};

export default function AboutComponent() {
  return <MainLayout>
    <About />
  </MainLayout>
};