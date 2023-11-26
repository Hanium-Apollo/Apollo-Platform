package com.Teletubbies.Apollo.service;

import com.Teletubbies.Apollo.domain.ApolloUser;
import com.Teletubbies.Apollo.domain.Post;
import com.Teletubbies.Apollo.domain.Tag;
import com.Teletubbies.Apollo.dto.post.request.SavePostRequest;
import com.Teletubbies.Apollo.dto.post.response.PostNoContentResponse;
import com.Teletubbies.Apollo.dto.tag.ConvertTag;
import com.Teletubbies.Apollo.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final PostWithTagService postWithTagService;
    private final TagService tagService;
    //create
    @Transactional
    public Post savePost(ApolloUser apolloUser, SavePostRequest savePostRequest){
        log.info("서비스 단 진입 완료");
        return postRepository.save(new Post(apolloUser, savePostRequest.getTitle(), savePostRequest.getContent()));
    }
    //read - count
    public Long countAllPosts(){
        return postRepository.count();
    }
    public Long countPostsHaveSimilarTitle(String title){
        return postRepository.countByTitleContainingIgnoreCase(title);
    }
    public Long countPostsHaveSimilarTitleOrSimilarContent(String searchString){
        return postRepository.countByContentContainingIgnoreCaseOrTitleContainingIgnoreCase(searchString, searchString);
    }
    //read - find
    public Post findPostById(Long id){
        return postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글 아이디입니다."));
    }
    public List<PostNoContentResponse> findAllPosts(PageRequest pageRequest){
        return postRepository.findAll(pageRequest).stream()
                .map(findPost -> new PostNoContentResponse(
                        findPost.getApolloUser().getId(),
                        findPost.getApolloUser().getLogin(),
                        findPost.getId(),
                        findPost.getTitle(),
                        postWithTagService.findPostWithTagByPost(findPost).stream()
                                .map(postWithTag -> new ConvertTag(postWithTag.getTag()))
                                .toList(),
                        findPost.getCreateAt()))
                .toList();

    }
    public List<PostNoContentResponse> findSimilarPostByTitle(String title, PageRequest pageRequest){
        Page<Post> findPosts = postRepository.findByTitleContainingIgnoreCase(title, pageRequest);
        return findPosts.stream()
                .map(findPost -> new PostNoContentResponse(
                        findPost.getApolloUser().getId(),
                        findPost.getApolloUser().getLogin(),
                        findPost.getId(),
                        findPost.getTitle(),
                        postWithTagService.findPostWithTagByPost(findPost).stream()
                                .map(postWithTag -> new ConvertTag(postWithTag.getTag()))
                                .toList(),
                        findPost.getCreateAt()))
                .toList();

    }
    public List<PostNoContentResponse> findSimilarPostByTitleOrContent(String searchString, PageRequest pageRequest){
        Page<Post> findPosts = postRepository.findByContentContainingIgnoreCaseOrTitleContainingIgnoreCase(searchString, searchString, pageRequest);
        return findPosts.stream()
                .map(findPost -> new PostNoContentResponse(
                        findPost.getApolloUser().getId(),
                        findPost.getApolloUser().getLogin(),
                        findPost.getId(),
                        findPost.getTitle(),
                        postWithTagService.findPostWithTagByPost(findPost).stream()
                                .map(postWithTag -> new ConvertTag(postWithTag.getTag()))
                                .toList(),
                        findPost.getCreateAt()))
                .toList();
    }
    //update
    @Transactional
    public Post updatePost(Post post, String title, String content){
        return post.updatePost(title, content);
    }

    //delete
    @Transactional
    public String deletePost(Long postId, Long userId){
        Post findPost = findPostById(postId);
        if (!findPost.getApolloUser().getId().equals(userId))
            throw new IllegalArgumentException("작성자와 수정자는 동일한 사람이여야 합니다.");

        List<Tag> tags = new ArrayList<>();
        postWithTagService.findPostWithTagByPost(findPost).stream()
                        .forEach(postWithTag -> {
                            tags.add(postWithTag.getTag()); // 해당 태그에 연관된 게시글이 있는지 파악하기 위해 태그 리스트 추가
                            postWithTagService.deletePostWithTag(postWithTag); //  게시글 & 태그 연관 객체 삭제 -> 게시글도 삭제
                        });
        log.info("삭제된 게시글에 연관된 태그 개수: " + tags.size());
        log.info("연관관계 삭제 완료, cascade 조건으로 게시글도 삭제 완료");

        tags.stream()
                .forEach(tag -> {
                    if (postWithTagService.countAssociationByTag(tag) == 0L) // 어떤 태그와 연관된 게시글이 없는 경우 -> 태그도 삭제
                        tagService.deleteTag(tag);
                });
        log.info("태그에 해당된 게시글 확인 후 삭제 완료");
        return "ok";
    }
}
