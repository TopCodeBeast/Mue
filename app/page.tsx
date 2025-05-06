'use client'
import MainLayout from "@/src/Layouts/MainLayout/MainLayout";
import Product from "@/src/Components/Product/Product";
import Link from "next/link";

const Home = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-around p-2 w-full h-full md:flex-row">
        <button className="btn-third w-[70%] h-full md:w-[30%] mt-1 mb-1">0x7 bought 10 ETH $KURT</button>
        <button className="btn-secondary w-[70%] h-full md:w-[30%] mt-1 mb-1">0x7 bought 10 ETH $KURT</button>
        <button className="btn-primary w-[70%] h-full md:w-[30%] mt-1 mb-1">Login</button>
      </div>
      <div className="flex flex-col items-center justify-around p-2 md:flex-row">
        <input
          className="w-[70%] bg-[#3dadff] border-4 border-[#017bd3] rounded-[10px] text-[16px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] outline-none transition-all duration-300 ease-in-out mb-1 mt-1 md:w-[60%]"
          type="text"
          placeholder="Search for token..."
          />
        <button className="btn-primary w-[70%] md:w-[25%] mt-1 mb-1">Search</button>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <Product />
        <Product img = '/images/newproduct/product2.png' info1="Cpt.Smith" info2="$CTP" price1="$15k" price2="+500%" />
        <Product img = '/images/newproduct/product3.png' info1="Slow Pulp" info2="$PULP" price1="$150k" price2="-25%" />
        <Product img = '/images/newproduct/product4.png' info1="Nirvana" info2="$KURT" price1="$166m" price2="+999%" />
        <Product img = '/images/newproduct/product5.png' info1="Bilk - F UP" info2="$BILK" price1="$2k" price2="-10%" />
        <Product img = '/images/newproduct/product6.png' info1="Desire - Fontaines DC" info2="$DC" price1="$122m" price2="+45%" />
      </div>
    </section>
  );
};

export default function HomeComponent() {
  return <MainLayout>
    <Home />
  </MainLayout>
};
