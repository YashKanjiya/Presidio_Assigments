package com.spring.azure.user.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.azure.model.RealEstateProperty;

public interface RealEstatePropertyRepository extends JpaRepository<RealEstateProperty, Long> {
    List<RealEstateProperty> findByUserId(Long userId);
}
