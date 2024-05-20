package com.spring.azure.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.azure.model.RealEstateProperty;
import com.spring.azure.model.User;
import com.spring.azure.user.service.EmailService;
import com.spring.azure.user.service.RealEstatePropertyService;

@RestController
@RequestMapping("/properties")
public class RealEstatePropertyController {

    @Autowired
    private RealEstatePropertyService realEstatePropertyService;

    @Autowired
    private EmailService emailService;

    @GetMapping
    public List<RealEstateProperty> getAllProperties() {
        return realEstatePropertyService.getAllProperties();
    }

    @GetMapping("/user/{userId}")
    public List<RealEstateProperty> getPropertiesByUserId(@PathVariable Long userId) {
        return realEstatePropertyService.getPropertiesByUserId(userId);
    }

    @GetMapping("/{id}")
    public RealEstateProperty getPropertyById(@PathVariable Long id) {
        return realEstatePropertyService.getPropertyById(id);
    }

    @PostMapping
    public RealEstateProperty createProperty(@RequestBody RealEstateProperty property) {
        return realEstatePropertyService.saveProperty(property);
    }

    @PutMapping("/{id}")
    public RealEstateProperty updateProperty(@PathVariable Long id, @RequestBody RealEstateProperty property) {
        property.setId(id);
        return realEstatePropertyService.saveProperty(property);
    }

    @DeleteMapping("/{id}")
    public void deleteProperty(@PathVariable Long id) {
        realEstatePropertyService.deleteProperty(id);
    }

    @PostMapping("/{id}/interested")
    public User getSellerDetails(@PathVariable Long id, @RequestBody User buyer) {
        RealEstateProperty property = realEstatePropertyService.getPropertyById(id);
        User seller = property != null ? property.getUser() : null;
        
        if (seller != null) {
            emailService.sendSimpleMessage(buyer.getEmail(), "Property Interest", 
                    "You have shown interest in the property. Seller contact details: " + seller.getPhoneNumber());

            emailService.sendSimpleMessage(seller.getEmail(), "New Buyer Interest", 
                    "A buyer has shown interest in your property. Buyer contact details: " + buyer.getPhoneNumber());
        }

        return seller;
    }
}
