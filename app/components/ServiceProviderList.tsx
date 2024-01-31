'use client'
import { IServiceProvider } from "@/public/types/serviceProvider";
import React from "react";
import ProviderCard from "./ProviderCard";

const ServiceProviderList: React.FC = () => {
  const [providers, setProviders] = React.useState<IServiceProvider[]>([])
 
  const fetchProviders = async () => {
    try {
      const response = await fetch('/mocks/providers.json');
      const data = await response.json();
      setProviders(data);
    } catch (error) {
      console.error('Error fetching providers:', error);
    }
  };

  React.useEffect(() => {
    fetchProviders();
  }, [])
  return (
    <div className='overflow-x-auto'>
        <div>
          {providers.map((provider) => (
            <ProviderCard key={provider._id} provider={provider} />
          ))}
        </div>
    </div>
  );
};

export default ServiceProviderList;