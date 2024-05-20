import React, { useState } from 'react';
import PropertyService from '../services/PropertyService';
import AuthService from '../services/AuthService';
import { useHistory } from 'react-router-dom';

const AddProperty = () => {
  const [property, setProperty] = useState({ place: '', area: '', numberOfBedrooms: '', numberOfBathrooms: '', nearbyFacilities: '' });
  const history = useHistory();
  const currentUser = AuthService.getCurrentUser();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      const newProperty = { ...property, user: { id: currentUser.user.id } };
      PropertyService.createProperty(newProperty).then(() => {
        history.push('/my-properties');
      });
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold">Add Property</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Place</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300" name="place" value={property.place} onChange={handleInputChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Area (sq ft)</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300" name="area" value={property.area} onChange={handleInputChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Number of Bedrooms</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300" name="numberOfBedrooms" value={property.numberOfBedrooms} onChange={handleInputChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Number of Bathrooms</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300" name="numberOfBathrooms" value={property.numberOfBathrooms} onChange={handleInputChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nearby Facilities</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300" name="nearbyFacilities" value={property.nearbyFacilities} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
