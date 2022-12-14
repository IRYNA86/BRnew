import { FaStar } from 'react-icons/fa';

const Stars = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            size={17}
            color={ratingValue <= rating ? '#FF6B08' : '#e4e5e9'}
          />
        );
      })}
    </div>
  );
};

export default Stars;
