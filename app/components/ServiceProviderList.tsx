'use client'
import { IServiceProvider } from "@/public/types/serviceProvider";
import React from "react";
import ProviderCard from "./ProviderCard";
import { fetchProviders } from "../api";

const ServiceProviderList: React.FC = () => {
  const [providers, setProviders] = React.useState<IServiceProvider[]>([])
 
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProviders();
        setProviders(data);
      } catch (error) {
        console.error('Error fetching providers:', error);
      }
    };

    fetchData();
  }, []);

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