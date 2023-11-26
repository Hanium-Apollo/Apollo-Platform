package com.Teletubbies.Apollo.domain;

import com.Teletubbies.Apollo.domain.ApolloUser;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter @Setter
@Table(name = "service")
@NoArgsConstructor
public class ApolloDeployService {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private ApolloUser apolloUser;

    @Column(name = "stack_name")
    private String stackName;
    @Column(name = "stack_type")
    private String stackType;

    @Column(name = "endpoint")
    private String endpoint;

    @Column(name = "created_at")
    private Date createdAt;

    @Column(name = "updated_at")
    private Date updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = new Date();
        updatedAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = new Date();
    }

    public ApolloDeployService(ApolloUser user, String stackName, String endpoint, String stackType) {
        this.apolloUser = user;
//        this.repo = repo;
        this.stackName = stackName;
        this.endpoint = endpoint;
        this.stackType = stackType;
    }
}
