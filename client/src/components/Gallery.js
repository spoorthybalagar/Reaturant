import React, { useState } from 'react';
import './Gallery.css'

const Gallery = () => {
  // Define an array of restaurant ambiance images
  const ambianceImages = [
    'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/n/c/p50920-15480716605c45b2ec68b94.jpg?tr=tr:n-large',
    'https://b.zmtcdn.com/data/pictures/4/18945224/26a729cb988b6c1482f54aba15cd6638.jpg',
    'https://d4t7t8y8xqo0t.cloudfront.net/resized/720X480/restaurant%2F661839%2Frestaurant120190205122126.jpg',
    'https://d4t7t8y8xqo0t.cloudfront.net/resized/720X480/restaurant%2F661839%2Frestaurant020190205122126.jpg'
    // Add more image URLs here
  ];

  // Initialize the state with the first image as the initial displayed image
  const [currentImage, setCurrentImage] = useState(ambianceImages[0]);

  // Function to handle image click and update the current image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="gallery">
        <h2>Gallery</h2>
      <div className="gallery-images">
        {ambianceImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Restaurant Ambiance ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <div className="current-image">
        <img src={currentImage} alt="Current Restaurant Ambiance" />
      </div>
    </div>
  );
};

export default Gallery;
