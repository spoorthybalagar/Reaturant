
import React, { useState } from 'react';
import './Menu.css'; // Import the CSS file



const Menu = () => {
  // Define an array of restaurant ambiance images
  const ambianceImages = [
    'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/b/y/m50920-15832360945e5e43fee230b.jpg?tr=tr:n-medium',
    'https://menu.sluurpy.com/menu/4468128/1716519/7.jpg',
    'https://d4t7t8y8xqo0t.cloudfront.net/resized/1080X/restaurant%2F661839%2Fmenu%2Fmenu61583386411722.jpg',
    'https://d4t7t8y8xqo0t.cloudfront.net/resized/1080X/restaurant%2F661839%2Fmenu%2Fmenu101583386412332.jpg'
    // Add more image URLs here
  ];

  // Initialize the state with the first image as the initial displayed image
  const [currentImage, setCurrentImage] = useState(ambianceImages[0]);

  // Function to handle image click and update the current image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="menu">
        <h2>Menu</h2>
      <div className="menu-images">
        {ambianceImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Restaurant Ambiance ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <div className="current-image-menu">
        <img src={currentImage} alt="Current Restaurant Ambiance" />
      </div>
    </div>
  );
};

export default Menu;


