#!/bin/bash

# IAM 서비스 역할 생성
aws iam create-role \
  --role-name YourCodeDeployServiceRole \
  --assume-role-policy-document file://codedeploy-role-policy.json

# 역할 정책 연결
aws iam attach-role-policy \
  --role-name CodeDeployServiceRole \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSCodeDeployRole
