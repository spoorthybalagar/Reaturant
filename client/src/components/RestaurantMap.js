import React from 'react';
import './RestaurantMap.css'

const RestaurantMap = () => {
  return (
    <div className='map-container'>
       <h2>Location</h2>
      <iframe
        title="Restaurant Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9729493747436!2d77.52479407420391!3d12.909460116239389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f9c8fe2c573%3A0x2e2db893ade35a6f!2sSecret%20of%20Bangalore!5e0!3m2!1sen!2sin!4v1695178518726!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default RestaurantMap;
