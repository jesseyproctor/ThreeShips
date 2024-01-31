'use client'

import { IServiceProvider } from "@/public/types/serviceProvider";
import React, { useState } from "react";
import ProviderCard from "./ProviderCard";
import { fetchProviders } from "../api";
import FilterBy from "./FilterBy"; 

const ServiceProviderList: React.FC = () => {
  const [providers, setProviders] = useState<IServiceProvider[]>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [filterBy, setFilterBy] = useState<string | null>(null);

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


  const handleStarRatingSelect = (option: string) => {
    setSortBy(option);
  };

  const handleServicesOfferedSelect = (option: string) => {
    setFilterBy(option);
  };

  const handleDistanceSelect = (option: string) => {
    setSortBy(option);
  };

  const filteredProviders = providers
    .filter(provider => !filterBy || provider.services.includes(filterBy))
    .sort((a, b) => {
      if (sortBy === 'highest') {
        return b.review_score - a.review_score;
      } else if (sortBy === 'lowest') {
        return a.review_score - b.review_score;
      } else if (sortBy === 'shortest') {
        return a.distance - b.distance;
      } else if (sortBy === 'longest') {
        return b.distance - a.distance;
      }
      return 0; // Default order
    });

  return (
    <div>
      <FilterBy
        onStarRatingSelect={handleStarRatingSelect}
        onServicesOfferedSelect={handleServicesOfferedSelect}
        onDistanceSelect={handleDistanceSelect}
      />
      {filteredProviders.map((provider) => (
        <ProviderCard key={provider._id} provider={provider} />
      ))}
    </div>
  );
};

export default ServiceProviderList;
