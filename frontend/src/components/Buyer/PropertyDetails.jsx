import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertyService from '../services/PropertyService';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    PropertyService.getPropertyById(id).then(response => {
      setProperty(response.data);
    });
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold">{property.place}</h2>
      <p>Area: {property.area} sq ft</p>
      <p>Bedrooms: {property.numberOfBedrooms}</p>
      <p>Bathrooms: {property.numberOfBathrooms}</p>
      <p>Nearby Facilities: {property.nearbyFacilities}</p>
      <p>Price: ${property.price}</p>
    </div>
  );
};

export default PropertyDetails;
