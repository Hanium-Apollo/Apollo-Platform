package com.Teletubbies.Apollo.dto.credential.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Data
public class GetCredentialResponse {
    @JsonProperty("AWSAccountId")
    private String AWSAccountId;
    @JsonProperty("AWSAccessKey")
    private String AWSAccessKey;
    @JsonProperty("AWSSecretKey")
    private String AWSSecretKey;
    @JsonProperty("AWSRegion")
    private String AWSRegion;
    @JsonProperty("GithubOAuthToken")
    private String GithubOAuthToken;
}
