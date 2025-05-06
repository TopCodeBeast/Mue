'use client'
import MainLayout from "@/src/Layouts/MainLayout/MainLayout";
import Product from "@/src/Components/Product/Product";
import Link from 'next/link';

const VProduct = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-around p-2 w-full h-full md:flex-row">
        <button className="btn-third w-[70%] h-full md:w-[30%] mt-1 mb-1">0x7 bought 10 ETH $KURT</button>
        <button className="btn-secondary w-[70%] h-full md:w-[30%] mt-1 mb-1">0x7 bought 10 ETH $KURT</button>
        <Link className="btn-primary w-[70%] h-full md:w-[30%] mt-1 mb-1 text-black row text-center no-underline" href="/login"><button>Login</button></Link>
      </div>
      <div className="flex flex-col items-center justify-around p-2 md:flex-row">
        <input
          className="w-[70%] bg-[#3dadff] border-4 border-[#017bd3] rounded-[10px] text-[16px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] outline-none transition-all duration-300 ease-in-out mb-1 mt-1 md:w-[60%]"
          type="text"
          placeholder="Search for token..."
          />
        <button className="btn-primary w-[70%] md:w-[25%] mt-1 mb-1">Search</button>
      </div>
      <div className="flex flex-col items-center md:flex-row">
        <div className="m-4">
          <Product />
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 max-w-[400px] w-full bg-[#FFC107] border-4 border-[#FFA000] rounded-[10px] m-3 md:m-5 pt-5 pb-5">
          <div className="flex flex-col justify-center items-center p-2">
            <p>Buy</p>
            <input
              className="w-[80px] border-4 border-[#757575] rounded-[5px] text-[14px] outline-none h-[30px] " 
              type="text" 
            />
          </div>
          <div className="flex flex-col justify-center items-center p-2">
            <p>Sell</p>
            <input
              className="w-[80px] border-4 border-[#757575] rounded-[5px] text-[14px] outline-none h-[30px] " 
              type="text" 
            />
          </div>
          <div className="flex flex-col justify-center items-center p-2">
            <p>Amount</p>
            <input
              className="focus:border-r w-[80px] border-4 border-[#757575] rounded-[5px] text-[14px] outline-none h-[30px] " 
              type="text" 
            />
          </div>
          <div>
            <button className="btn-primary absolute bottom-[-4px] right-[-4px]">Login to Trade</button>
          </div>
        </div>
      </div>
      <div className="m-2">
        <img src="/images/newproduct/trade.png" />
      </div>
    </section>
  );
};

export default function ProductComponent() {
  return <MainLayout>
    <VProduct />
  </MainLayout>
};
