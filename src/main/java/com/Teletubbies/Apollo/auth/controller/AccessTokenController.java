package com.Teletubbies.Apollo.auth.controller;

import com.Teletubbies.Apollo.auth.dto.MemberInfoResponse;
import com.Teletubbies.Apollo.auth.service.OAuthService;
import com.Teletubbies.Apollo.auth.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AccessTokenController {
    private final OAuthService oAuthService;
    private final UserService userService;
    @PostMapping("/authenticate")
    public ResponseEntity<String> getUserInfo(@RequestParam String code) {
        String accessToken = oAuthService.getAccessToken(code);
        log.info("access-token 발행 성공");
        MemberInfoResponse memberInfoResponse = oAuthService.getUserInfo(accessToken).getBody();
        log.info("유저 정보 객체 dto 변환 성공");
        userService.saveUser(memberInfoResponse);
        log.info("유저 정보 저장 성공");
        return ResponseEntity.ok("success");
    }
}
