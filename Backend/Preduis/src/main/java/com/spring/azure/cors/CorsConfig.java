package com.spring.azure.cors;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class CorsConfig {

	 public void addCorsMappings(CorsRegistry registry) {
	        registry.addMapping("/**")
	                .allowedOrigins("http://localhost:5173")
	                .allowedMethods("GET", "POST", "PUT", "DELETE")
	                .allowedHeaders("*")
	                .allowCredentials(true);
	    }
}
