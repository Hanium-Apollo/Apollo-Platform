package com.Teletubbies.Apollo.repository;

import com.Teletubbies.Apollo.domain.ApolloUserToken;
import com.Teletubbies.Apollo.domain.UserAuthority;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserAuthorityRepository extends JpaRepository<UserAuthority, Long> {
    List<UserAuthority> findAllByApolloUserToken(ApolloUserToken apolloUserToken);
}
