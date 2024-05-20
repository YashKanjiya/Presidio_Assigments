package com.spring.azure.user.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.azure.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByLogin(String login);
}
