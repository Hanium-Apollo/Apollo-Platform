package com.Teletubbies.Apollo.deploy.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class PostServerDeployResponse {
    @JsonProperty("stackName")
    private String stackName;
    @JsonProperty("stackType")
    private String stackType;
    @JsonProperty("endpoint")
    private String endPoint;
}
