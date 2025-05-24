---
title: "Cross Entropy란? 머신러닝 손실 함수의 핵심 개념"
date: 2025-05-19
categories: [ML, DeepLearning]
tags: [Cross Entropy, Loss Function, Softmax, Classification, Entropy]
toc: true
toc_sticky: true
Typora-root-url: ../
author_profile: false
sidebar:
  nav: "docs"
search: true
---

## Cross Entropy (교차 엔트로피)란?

**Cross Entropy(교차 엔트로피)**는 머신러닝과 딥러닝에서 분류 문제에 자주 사용되는 **손실 함수(Loss Function)**입니다. 모델의 예측이 실제 정답과 얼마나 다른지를 정량적으로 계산하여, 모델을 학습하는 데 있어 핵심적인 역할을 합니다.

---

### 1. 교차 엔트로피의 정의

교차 엔트로피는 정보 이론에서 유래한 개념으로, 두 확률 분포 간의 차이를 측정하는 함수입니다.

수식으로 표현하면 다음과 같습니다:

$\text{CrossEntropy}(p, q) = -\sum_{i} p(i) \log q(i)$

- $p(i)$ : 실제 정답 분포 (One-hot 벡터)
- $q(i)$ : 모델이 예측한 확률 분포 (Softmax 결과)

---

### 2. 왜 사용하는가?

- **정확한 확률 기반 학습 가능**  
  모델이 얼마나 ‘확신(confidence)’을 갖고 예측하는지를 반영합니다.

- **Softmax와 함께 사용**  
  다중 클래스 분류에서 softmax와 결합되어 확률 기반 출력을 효과적으로 비교할 수 있습니다.

- **수치적으로 안정적인 학습 제공**  
  log 함수를 사용함으로써 확률이 낮은 예측에 더 큰 페널티를 줍니다.

---

### 3. 직관적인 예시

예를 들어, 3개의 클래스(A, B, C)가 있다고 가정합시다. 정답은 클래스 A입니다.

- **정답 분포 (p)**: [1, 0, 0]  
- **모델 예측 (q)**: [0.7, 0.2, 0.1]

이때 교차 엔트로피는 다음과 같이 계산됩니다:

- $(1 \cdot \log 0.7 + 0 \cdot \log 0.2 + 0 \cdot \log 0.1) = -\log 0.7 \approx 0.357$

모델이 정답에 가까울수록 cross entropy 값은 작아지고, 멀수록 커집니다.

---

### 4. Binary Cross Entropy vs Categorical Cross Entropy

- **Binary Cross Entropy**  
  이진 분류 문제에 사용. 출력은 sigmoid 함수와 함께 사용.


  $-[y \log(p) + (1-y) \log(1-p)]$

- **Categorical Cross Entropy**  
  다중 클래스 분류 문제에 사용. 출력은 softmax와 함께 사용.

---

### ✅ 결론

Cross Entropy는 분류 문제에서 가장 널리 사용되는 손실 함수로, 모델의 예측 정확도를 효과적으로 학습시키는 데 필수적인 역할을 합니다. 특히 Softmax 출력과 결합하여 강력한 학습 신호를 제공하며, 머신러닝과 딥러닝의 기초를 이루는 중요한 개념입니다.

---
