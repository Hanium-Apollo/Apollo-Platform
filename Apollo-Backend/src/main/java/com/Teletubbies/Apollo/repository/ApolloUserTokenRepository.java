package com.Teletubbies.Apollo.repository;

import com.Teletubbies.Apollo.domain.ApolloUserToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ApolloUserTokenRepository extends JpaRepository<ApolloUserToken, Long> {
    Optional<ApolloUserToken> findByUserLogin(String userName);
}
