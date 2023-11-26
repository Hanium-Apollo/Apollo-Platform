package com.Teletubbies.Apollo.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Post {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private ApolloUser apolloUser;
    private String title;
    @Column(columnDefinition = "LONGTEXT")
    private String content;
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Comment> comments = new ArrayList<>();
    private Date createAt;
    private Date updateAt;

    public Post(ApolloUser apolloUser, String title, String content) {
        this.apolloUser = apolloUser;
        this.title = title;
        this.content = content;
        this.createAt = new Date();
        this.updateAt = new Date();
    }
    public Post updatePost(String title, String content){
        this.title = title;
        this.content = content;
        this.updateAt = new Date();
        return this;
    }
}
