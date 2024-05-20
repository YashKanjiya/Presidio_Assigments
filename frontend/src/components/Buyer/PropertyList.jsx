import React, { useState, useEffect } from 'react';
import PropertyService from '../services/PropertyService';
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    PropertyService.getAllProperties().then(response => {
      setProperties(response.data);
    });
  }, []);

  const handleInterest = (propertyId) => {
    if (currentUser) {
      const buyer = { ...currentUser.user };
      PropertyService.showInterest(propertyId, buyer).then(response => {
        alert('Seller details sent to your email.');
      });
    } else {
      alert('Please login to show interest.');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold">Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {properties.map(property => (
          <div className="bg-white p-4 shadow rounded" key={property.id}>
            <h5 className="text-lg font-bold">{property.place}</h5>
            <p>Area: {property.area} sq ft</p>
            <p>Bedrooms: {property.numberOfBedrooms}</p>
            <p>Bathrooms: {property.numberOfBathrooms}</p>
            <p>Nearby: {property.nearbyFacilities}</p>
            <p>Price: ${property.price}</p>
            <Link to={`/property-details/${property.id}`} className="bg-blue-500 text-white py-2 px-4 mt-2 rounded block text-center">View Details</Link>
            <button className="bg-blue-500 text-white py-2 px-4 mt-2 rounded" onClick={() => handleInterest(property.id)}>I'm Interested</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;

