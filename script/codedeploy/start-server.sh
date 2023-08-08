#!/bin/bash

# 새로 빌드한 이미지로 컨테이너 실행
docker run -d -p 80:80 --name ECR_URL:latest
