package com.spring.azure.user.service;

import com.spring.azure.model.User;

public interface UserService {
    User saveUser(User user);
    User findByLogin(String login);
}
