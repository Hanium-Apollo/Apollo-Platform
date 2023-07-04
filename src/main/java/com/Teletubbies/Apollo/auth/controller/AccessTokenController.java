package com.Teletubbies.Apollo.auth.controller;

import com.Teletubbies.Apollo.auth.dto.MemberInfoResponse;
import com.Teletubbies.Apollo.auth.service.OAuthService;
import com.Teletubbies.Apollo.auth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AccessTokenController {
    private final OAuthService oAuthService;
    private final UserService userService;
    @GetMapping("/authenticate")
    public ResponseEntity<String> getUserInfo(@RequestParam String code) {
        String accessToken = oAuthService.getAccessToken(code);
        MemberInfoResponse memberInfoResponse = oAuthService.getUserInfo(accessToken).getBody();
        userService.saveUser(memberInfoResponse);
        return ResponseEntity.ok("success");
    }
}
