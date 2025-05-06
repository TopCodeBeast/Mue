'use client'
import React, { useState, useEffect } from 'react';
import MainLayout from "@/src/Layouts/MainLayout/MainLayout";
import Image from 'next/image';
import { Plus } from "lucide-react";
import Link from 'next/link'

import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect, Connector, useConnect } from 'wagmi';
// import { toast } from 'react-toastify';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '@/src/lib/utils/config';

const queryClient = new QueryClient();
const walletsToShow = ['MetaMask']; // Define which wallets you want to show


const Login = () => {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const [filteredConnectors, setFilteredConnectors] = useState<Connector[]>([]);
  const [loading, setLoadingState] = useState<boolean>(true);
  const [connectorName, setConnectorName] = useState<string>("");

  const handleDisconnect = async () => {
    try {
      setConnectorName("")
    } catch (error) {
      console.error('Error disconnecting:', error);
    }
  };

  const truncateAddress = (address: string) => {
    localStorage.setItem('address', address ?? '');
    console.log("truncateAddress", address)
    return address.slice(0, 10) + '...' + address.slice(-10);
  };
  useEffect(() => {
    if (!connectors) return;
    console.log({ connectors })

    // setFilteredConnectors(connectors.filter((connector) => connector.name.includes('Immutable Passport')));
    setFilteredConnectors(connectors.filter(connector =>
      walletsToShow.includes(connector.name)
    ));
    console.log({ connectors })
    setLoadingState(false);
  }, [connectors]);


  function wallettLogin(connector: Connector) {
    setConnectorName(connector.name)
    // connect Wagmi to Passport
    connect({ connector });
  }
  return (
    <section>
      <div className="flex justify-end">
        <button className="btn-primary w-[200px]">Login</button>
      </div>
      <div className='flex flex-col justify-center mt-5 p-5'>
      <div>
                {
                  isConnected && address ? (
                    <div className='selectbox'>
                      <h5 className="fs-4 mt-3 w-100">Connected with {connectorName} </h5>
                      <h5 className="fs-4 mt-3 w-100">CurrentAddress:  {truncateAddress(address)}</h5>
                      <button className="btn btn-nav btn-gr px-4 mt-3 w-100"
                        onClick={async () => handleDisconnect()}>
                        Log Out
                      </button>
                    </div>

                  ) : (
                    <WagmiProvider config={config}>
                      <QueryClientProvider client={queryClient}>
                        {filteredConnectors.map((connector, index) => (
                          <div id='metamask' className='selectbox' key={index}>
                            <button
                              className="btn-third row text-center"
                              onClick={() => wallettLogin(connector)}
                              key={connector.uid}
                              disabled={loading}
                            >
                              <img src={connector.icon} alt="Button Image" width={26} height={30} className="img-fluid me-3"></img>
                              <h5 className="mb-0">{connector.name}</h5>
                            </button>
                          </div>

                        ))}
                      </QueryClientProvider>
                    </WagmiProvider>
                  )
                }
              </div>
        {/* <button className='btn-third'>MetaMask</button>
        <button className='btn-third mt-3'>Wallet Connect</button>
        <button className='btn-third mt-3'>Email login</button> */}
      </div>
    </section>
  );
};

export default function LoginComponent() {
  return <MainLayout>
    <Login />
  </MainLayout>
};