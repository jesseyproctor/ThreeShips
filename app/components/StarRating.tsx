import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { ImStarHalf } from 'react-icons/im';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const color = 'gold'; 

  if (rating === null) {
    return <div>Loading...</div>;
  }

  const ave = rating;

  return (
    <div style={{ display: 'flex' }}>
      {[...Array(5)].map((_, i) => {
        if (i + 1 <= ave) {
          return <AiFillStar key={i} size={20} color={color} />;
        } else if (i + 0.5 <= ave) {
          return <ImStarHalf key={i} size={20} color={color} />;
        } else {
          return <AiOutlineStar key={i} size={20} color={color} />;
        }
      })}
    </div>
  );
};

export default StarRating;


