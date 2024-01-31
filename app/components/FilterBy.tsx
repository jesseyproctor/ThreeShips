'use client'

import React, { useEffect, useState } from 'react';
import { IServiceProvider } from '@/public/types/serviceProvider';
import { fetchProviders } from "../api";
import DropdownMenu from './DropdownMenu';

const FilterBy: React.FC = () => {
  const [providers, setProviders] = useState<IServiceProvider[]>([]);

  useEffect(() => {
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
    console.log('Selected star rating:', option);
  };

  const handleServicesOfferedSelect = (option: string) => {
    console.log('Selected star rating:', option);
  };

  const handleDistanceSelect = (option: string) => {
    console.log('Selected star rating:', option);
  };

  return (
    <div className="fixed top-0 right-0 left-0 bg-white p-4 flex items-center justify-end z-10">
      <DropdownMenu
        label="STAR RATING"
        options={['highest', 'lowest']}
        onSelect={handleStarRatingSelect}
      />
      <DropdownMenu
        label="SERVICES OFFERED"
        options={["Commercial lawn care",
            "Artificial turf",
            "Pavers",
            "Lawn maintenance",
            "Hardscapes",
            "Sod installation",
            "Residential",
            "Landscaping",
            "Garden design and maintenance",
            "Outdoor living space",
            "Irrigation",
            "Tree and shrub trimming",
            "Fountains",
            "Pond installation and maintenance",
            "Water features",
            "Tree and shrub pruning",
            "Outdoor lighting",
            "Snow removal",
            "Lawn mowing",
            "Weed control",
            "Fertilizing",
            "Debris removal",
        ]}
        onSelect={handleServicesOfferedSelect}
      />
      <DropdownMenu
        label="DISTANCE"
        options={['shortest', 'longest']}
        onSelect={handleDistanceSelect}
      />
    </div>
  );
};

export default FilterBy;



