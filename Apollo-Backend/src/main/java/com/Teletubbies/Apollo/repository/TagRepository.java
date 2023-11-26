package com.Teletubbies.Apollo.repository;

import com.Teletubbies.Apollo.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {
    boolean existsByName(String name);
    Optional<Tag> findByName(String name);
    List<Tag> findAll();
}
