import React, { useEffect, useState } from 'react';
import { IServiceProvider } from '@/public/types/serviceProvider';
import { fetchProviders } from "../app/api";

interface ProviderScoreObject {
  percentage: number | null;
  providerId: string | null;
}

const ProviderScore = () => {
  const [providers, setProviders] = useState<IServiceProvider[]>([]);
  const [scores, setScores] = useState<ProviderScoreObject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const providersData = await fetchProviders();
        setProviders(providersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateLowerScorePercentage = () => {
    if (!providers.length) {
      return { percentage: null, providerId: null };
    }

    const scoresArray = providers.map((provider) => {
      const reviewScores = provider.third_party_ratings?.google_places?.review_score;

      if (typeof reviewScores === 'number') {
        const validReviewScores = providers
          .filter((p) => typeof p.third_party_ratings?.google_places?.review_score === 'number')
          .map((p) => p.third_party_ratings?.google_places?.review_score)
          .sort((a, b) => a - b);

        const currentIndex = validReviewScores.indexOf(reviewScores);
        const lowerScorePercentage = (currentIndex / validReviewScores.length) * 100;

        return { percentage: lowerScorePercentage, providerId: provider._id };
      }

      return { percentage: null, providerId: null };
    });

    setScores(scoresArray);
  };

  useEffect(() => {
    calculateLowerScorePercentage();
  }, [providers]);

  return scores;
};

export default ProviderScore;

