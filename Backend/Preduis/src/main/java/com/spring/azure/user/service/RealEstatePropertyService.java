package com.spring.azure.user.service;

import java.util.List;

import com.spring.azure.model.RealEstateProperty;

public interface RealEstatePropertyService {
    List<RealEstateProperty> getAllProperties();
    List<RealEstateProperty> getPropertiesByUserId(Long userId);
    RealEstateProperty getPropertyById(Long id);
    RealEstateProperty saveProperty(RealEstateProperty property);
    void deleteProperty(Long id);
}
