package com.Teletubbies.Apollo.config;

import com.Teletubbies.Apollo.component.ApolloWebSocketHandler;
import com.Teletubbies.Apollo.service.CloudWatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.*;

@Configuration
@RequiredArgsConstructor
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {
    private final CloudWatchService cloudWatchService;
    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(myHandler(), "/ws/cloudwatch").setAllowedOrigins("*");
    }
    @Bean
    public WebSocketHandler myHandler() {
        return new ApolloWebSocketHandler(cloudWatchService);
    }
}
