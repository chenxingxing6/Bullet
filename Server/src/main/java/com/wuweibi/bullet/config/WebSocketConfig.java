package com.wuweibi.bullet.config;

import com.wuweibi.bullet.utils.SpringUtils;
import com.wuweibi.bullet.websocket.BulletAnnotation;
import com.wuweibi.bullet.websocket.VideoAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

/**
 *
 *
 * Created by Administrator on 2019/5/30.
 */
@Configuration
@EnableWebSocket
public class WebSocketConfig {

    @Autowired
    private SpringUtils springUtils;


    @Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }


    @Bean
    public BulletAnnotation serverEndpointBulletAnnotation() {
        return new BulletAnnotation();
    }
    @Bean
    public VideoAnnotation serverEndpointVideoAnnotation() {
        return new VideoAnnotation();
    }
}
