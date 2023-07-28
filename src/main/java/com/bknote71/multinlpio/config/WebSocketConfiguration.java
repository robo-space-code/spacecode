package com.bknote71.multinlpio.config;

import com.bknote71.multinlpio.session.ClientSessionHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfiguration implements WebSocketConfigurer {
    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry
                .addHandler(serverPacketManager(), "/room/*")
                .setAllowedOrigins("*")
        ;
    }

    @Bean
    public WebSocketHandler serverPacketManager() {
        return new ClientSessionHandler();
    }
}
