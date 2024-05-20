import React, { useState, useEffect } from 'react';
import PropertyService from '../services/PropertyService';
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';

const MyProperties = () => {
  const [properties, setProperties] = useState([]);
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    if (currentUser) {
      PropertyService.getPropertiesByUserId(currentUser.user.id).then(response => {
        setProperties(response.data);
      });
    }
  }, [currentUser]);

  const handleDelete = (propertyId) => {
    PropertyService.deleteProperty(propertyId).then(response => {
      setProperties(properties.filter(property => property.id !== propertyId));
    });
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold">My Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {properties.map(property => (
          <div className="bg-white p-4 shadow rounded" key={property.id}>
            <h5 className="text-lg font-bold">{property.place}</h5>
            <p>Area: {property.area} sq ft</p>
            <p>Bedrooms: {property.numberOfBedrooms}</p>
            <p>Bathrooms: {property.numberOfBathrooms}</p>
            <p>Nearby: {property.nearbyFacilities}</p>
            <Link to={`/edit-property/${property.id}`} className="bg-blue-500 text-white py-2 px-4 mt-2 rounded block text-center">Edit</Link>
            <button className="bg-red-500 text-white py-2 px-4 mt-2 rounded block text-center" onClick={() => handleDelete(property.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProperties;
