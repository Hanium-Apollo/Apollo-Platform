package com.Teletubbies.Apollo.service;

import com.Teletubbies.Apollo.dto.auth.AccessTokenRequest;
import com.Teletubbies.Apollo.dto.auth.AccessTokenResponse;
import com.Teletubbies.Apollo.dto.auth.SaveUserRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Slf4j
@Service
@RequiredArgsConstructor
public class OAuthService {
    private final static String ACCESS_TOKEN_URL = "https://github.com/login/oauth/access_token";
    private final static String MEMBER_INFO_URL = "https://api.github.com/user";
    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${security.oauth.github.client-id}")
    private String clientId;
    @Value("${security.oauth.github.client-secret}")
    private String clientSecret;

    public String getAccessToken(String code) {
        log.info("code -> access-token 함수 진입 성공");
        return restTemplate.postForObject(
                ACCESS_TOKEN_URL,
                new AccessTokenRequest(clientId, clientSecret, code),
                AccessTokenResponse.class
        ).getAccessToken();
    }

    public ResponseEntity<SaveUserRequest> getUserInfo(String accessToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Accept", "application/vnd.github+json");
        headers.setBearerAuth(accessToken);
        headers.add("X-Github-Api-Version", "2022-11-28");
        HttpEntity<Void> request = new HttpEntity<>(headers);
        log.info("request 생성 완료");
        return restTemplate.exchange(
                MEMBER_INFO_URL,
                HttpMethod.GET,
                request,
                SaveUserRequest.class
        );
    }
}
