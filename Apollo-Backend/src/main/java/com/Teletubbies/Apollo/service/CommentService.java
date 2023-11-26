package com.Teletubbies.Apollo.service;

import com.Teletubbies.Apollo.domain.ApolloUser;
import com.Teletubbies.Apollo.domain.Comment;
import com.Teletubbies.Apollo.domain.Post;
import com.Teletubbies.Apollo.dto.comment.request.DeleteCommentRequest;
import com.Teletubbies.Apollo.dto.comment.request.SaveCommentRequest;
import com.Teletubbies.Apollo.dto.comment.request.UpdateCommentRequest;
import com.Teletubbies.Apollo.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final UserService userService;
    private final PostService postService;
    @Transactional
    public Comment saveComment(SaveCommentRequest request){
        ApolloUser findUser = userService.getUserById(request.getUserId());
        Post findPost = postService.findPostById(request.getPostId());
        return commentRepository.save(new Comment(findUser, findPost, request.getContent()));
    }
    public List<Comment> findAllCommentByPost(Post post){
        return commentRepository.findALlByPost(post);
    }
    public List<Comment> findAllMyComments(Long userId){
        ApolloUser findUser = userService.getUserById(userId);
        return commentRepository.findAllByApolloUser(findUser);
    }
    @Transactional
    public Comment updateComment(Long commentId, UpdateCommentRequest request){
        Comment findComment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 댓글 입니다."));
        log.info("해당 댓글 객체 가져오기 성공");
        if (!findComment.getApolloUser().getId().equals(request.getUserId()))
            throw new IllegalArgumentException("댓글 작성자와 수정자가 일치하지 않습니다.");
        log.info("작성자 수정자 일치 여부 파악 성공");
        return findComment.updateComment(request.getContent());
    }
    @Transactional
    public String deleteComment(Long commentId, DeleteCommentRequest request){
        Comment findComment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 댓글입니다."));
        if (!findComment.getApolloUser().getId().equals(request.getUserId()))
            throw new IllegalArgumentException("댓글 작성자와 수정자가 일치하지 않습니다.");
        log.info("작성자 수정자 일치 여부 파악 성공");
        commentRepository.delete(findComment);
        log.info("댓글 삭제 완료");
        return "ok";
    }
}
