---
title: "로드 밸런서 (Load Balancer)의 개념과 종류"
date: 2025-03-28
categories: [Cloud]
tags: [Load Balancer, LB, L4, L7, Cloud, HAProxy, Nginx]
toc: true
toc_sticky: true
Typora-root-url: ../
author_profile: false
sidebar:
  nav: "docs"
search: true
---

## 로드 밸런서 (Load Balancer, LB)란?

**로드 밸런서(LB)**는 여러 서버에 걸쳐 네트워크 트래픽을 효율적으로 분산하는 기술 또는 장치입니다. 
주로 웹 서버, 애플리케이션 서버, 데이터베이스 서버 등 다양한 시스템에서 사용되며, 다음과 같은 기능을 수행합니다.

### 1. LB의 주요 기능

- **트래픽 분산 (Load Distribution)**  
  여러 서버에 요청을 고르게 분산하여 과부하를 방지하고 성능을 향상합니다.

- **가용성 및 장애 대응 (High Availability & Fault Tolerance)**  
  특정 서버 장애 시 자동으로 다른 서버로 트래픽을 분산해 서비스 지속성을 보장합니다.

- **응답 속도 향상 (Performance Optimization)**  
  지리적으로 가까운 서버 또는 부하가 적은 서버로 라우팅해 응답 속도를 높입니다.

- **보안 강화 (Security Enhancement)**  
  DDoS 방어, SSL 종료, WAF(Web Application Firewall)와 연계해 보안을 강화합니다.

---

### 2. LB의 유형

#### 1) 네트워크 계층에 따른 분류

- **L4 Load Balancer (전송 계층)**  
  TCP/UDP 기반에서 패킷 단위로 분산. IP/Port 기반 라우팅.  
  _예: AWS NLB, F5 LTM, HAProxy_

- **L7 Load Balancer (애플리케이션 계층)**  
  HTTP/HTTPS, gRPC 등 애플리케이션 레벨에서 URL, 쿠키, 헤더 등을 기준으로 분산.  
  _예: AWS ALB, Nginx, Traefik_

#### 2) 배포 방식에 따른 분류

- **하드웨어 기반 LB**  
  F5, Citrix NetScaler 등 전용 장비 사용. 높은 성능, 높은 비용.

- **소프트웨어 기반 LB**  
  Nginx, HAProxy 등 유연한 구성. 클라우드 환경에서도 널리 사용.

- **DNS 기반 LB (GSLB)**  
  DNS 수준에서 여러 리전이나 데이터센터로 트래픽 분산.  
  _예: AWS Route 53, Akamai_

---

### 3. LB 알고리즘

- **Round Robin**: 순차적으로 요청 분배  
- **Least Connections**: 가장 적은 연결 수를 가진 서버 선택  
- **IP Hash**: 클라이언트 IP 기반으로 고정 라우팅  
- **Weighted Round Robin**: 서버 성능에 따라 가중치 기반 분산

---

### 4. 활용 사례

- 대규모 웹 서비스의 트래픽 분산 (예: 네이버, 카카오 등)
- 클라우드 환경에서 오토스케일링과 연계
- 마이크로서비스 아키텍처(MSA)에서 API Gateway와 함께 사용

---

### 5. 관련 솔루션

- **클라우드 기반**: AWS ELB, GCP Load Balancer, Azure LB  
- **오픈소스**: HAProxy, Nginx, Traefik, Envoy  
- **하드웨어**: F5 BIG-IP, Citrix ADC

---

### ✅ 결론

로드 밸런서는 고가용성과 성능, 보안을 위한 핵심 인프라 구성 요소입니다. 사용 환경(온프레미스, 클라우드, 하이브리드)에 따라 적절한 유형과 솔루션을 선택하는 것이 중요합니다.

---

## What is a Load Balancer (LB)?

A **Load Balancer (LB)** is a technology or device that distributes incoming network traffic across multiple servers. Commonly used in IT infrastructure such as web servers, application servers, and databases, it offers the following functionalities:

### 1. Key Functions

- **Load Distribution**  
  Distributes traffic evenly to prevent overload and improve performance.

- **High Availability & Fault Tolerance**  
  Automatically reroutes requests when a server fails, ensuring service continuity.

- **Performance Optimization**  
  Chooses the closest or least-loaded server to reduce response time.

- **Security Enhancement**  
  Enhances security through DDoS protection, SSL offloading, and integration with WAF.

---

### 2. Types of Load Balancers

#### 1) By Network Layer

- **L4 Load Balancer (Transport Layer)**  
  Operates at TCP/UDP level, routing based on IP and port.  
  _Examples: AWS NLB, F5 LTM, HAProxy_

- **L7 Load Balancer (Application Layer)**  
  Works with protocols like HTTP/HTTPS/gRPC. Routes based on URL, headers, cookies.  
  _Examples: AWS ALB, Nginx, Traefik_

#### 2) By Deployment Model

- **Hardware-Based LB**  
  Uses dedicated devices like F5 or Citrix. High performance, high cost.

- **Software-Based LB**  
  Flexible tools like Nginx, HAProxy. Widely used in cloud environments.

- **DNS-Based LB (GSLB)**  
  Routes traffic via DNS to different regions or data centers.  
  _Examples: AWS Route 53, Akamai_

---

### 3. LB Algorithms

- **Round Robin**: Rotates requests in sequence  
- **Least Connections**: Routes to the server with fewest active connections  
- **IP Hash**: Uses client IP to determine server  
- **Weighted Round Robin**: Allocates traffic based on server capacity

---

### 4. Use Cases

- Distributing traffic for large-scale web services (e.g., Naver, Google)
- Cloud-native scaling via auto-scaling and ELBs
- Managing traffic between services in microservice architectures

---

### 5. Notable Solutions

- **Cloud-based**: AWS ELB, GCP Load Balancer, Azure LB  
- **Open-source**: HAProxy, Nginx, Traefik, Envoy  
- **Hardware**: F5 BIG-IP, Citrix ADC

---

### ✅ Conclusion

Load balancers are essential for building resilient, scalable, and secure infrastructures. Choose the right type based on your deployment environment and traffic needs.

---

