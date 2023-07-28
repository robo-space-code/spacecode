# 기반이 될 이미지 선택 (Java 17 사용 예시)
FROM eclipse-temurin:17-jre-focal

#CMD ["./gradlew", "clean", "build"]

COPY ./build/libs/multi-nlp-io-0.0.1-SNAPSHOT.jar app.jar

# 컨테이너에서 실행될 명령어 지정
ENTRYPOINT ["java", "-jar", "app.jar", "--spring.profiles.active=prod"]