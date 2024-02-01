'use client'

import { IServiceProvider } from "@/public/types/serviceProvider";
import { IExperience } from "@/public/types/experience";
import React, { useState } from "react";
import ProviderCard from "./ProviderCard";
import { fetchProviders, fetchExperiences } from "../api";
import FilterBy from "./FilterBy"; 
import Load from './Load';

const ServiceProviderList: React.FC = () => {
  const [providers, setProviders] = useState<IServiceProvider[]>([]);
  const [experiences, setExperiences] = useState<IExperience[]>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [filterBy, setFilterBy] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const providersData = await fetchProviders();
        const experiencesData = await fetchExperiences();
        setProviders(providersData);
        setExperiences(experiencesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleStarRatingSelect = (option: string) => {
    setSortBy(option);
    scrollToTop();
  };

  const handleServicesOfferedSelect = (option: string) => {
    setFilterBy(option);
    scrollToTop();
  };

  const handleDistanceSelect = (option: string) => {
    setSortBy(option);
    scrollToTop();
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
      return 0;
    });


    return (
      <div>
        <FilterBy
          onStarRatingSelect={handleStarRatingSelect}
          onServicesOfferedSelect={handleServicesOfferedSelect}
          onDistanceSelect={handleDistanceSelect}
        />
        {loading ? (
          <Load /> 
        ) : (
          filteredProviders.map((provider, index) => (
            <ProviderCard
              key={provider._id}
              provider={provider}
              experiences={experiences}
              isFirstCard={index === 0}
            />
          ))
        )}
      </div>
    );
  };
  
  export default ServiceProviderList;
