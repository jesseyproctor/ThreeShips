'use client'

import React, { useEffect, useState } from 'react';
import DropdownMenu from './DropdownMenu';

interface FilterByProps {
  onStarRatingSelect: (option: string) => void;
  onServicesOfferedSelect: (option: string) => void;
  onDistanceSelect: (option: string) => void;
}

const FilterBy: React.FC<FilterByProps> = ({
  onStarRatingSelect,
  onServicesOfferedSelect,
  onDistanceSelect,
}) => {

  return (
    <div className="fixed top-0 right-20 left-0 bg-white p-4 flex items-center justify-end z-10"> 
      <DropdownMenu
        label="STAR RATING"
        options={['highest', 'lowest']}
        onSelect={onStarRatingSelect}
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
        onSelect={onServicesOfferedSelect}
      />
      <DropdownMenu
        label="DISTANCE"
        options={['shortest', 'longest']} 
        onSelect={onDistanceSelect}
      />
    </div>
  );
};

export default FilterBy;

