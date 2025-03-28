---
layout: single
title: "OOD Detection"
categories: AI
tag: [AI, ML, DeepLearning]
toc: true
toc_sticky: true
Typora-root-url: ../
author_profile: false
sidebar:
  nav: "docs"
search: true
---

# OOD Detection
## Review
### Machine Learning
- ML은 Training Dataset을 가지고, 잘 정의된 label을 통해 function을 통해 결과를 얻는 과정
- $f:x\rightarrow y$ model을 training data $(x,y)$를 가지고 학습시키는 과정(일반화 시키는 과정/generalization)

### Deep Learning
- ML의 subfield
- multi-layer neural network 

<!-- https://blogs.nvidia.com/wp-content/uploads/2016/07/Deep_Learning_Icons_R5_PNG.jpg.png -->

### AI vs. ML vs. DeepLearning
![AI vs. ML vs. Deeplearning](/images/2024-08-22-AI-algorithm(day1)/Deep_Learning_Icons_R5_PNG.jpg.png)

## Out-of-Distribution (OOD) Detection

**gpt-4o가 말해주는 OOD detection에 대한 정의**

>Out-of-distribution (OOD) detection이란, 
기계 학습 모델이 훈련되지 않은 데이터나 배포된 데이터 분포와 다른 새로운 데이터가 입력으로 들어왔을 때 
이를 감지하는 문제를 다루는 방법입니다. 보통 학습된 모델은 훈련 데이터와 비슷한 분포를 가진 데이터에 
대해서는 높은 성능을 보이지만, 분포가 다른 데이터에 대해서는 정확도가 떨어지거나 잘못된 예측을 할 수 있습니다. 
OOD 검출은 이러한 상황을 방지하기 위해 중요한 역할을 합니다.  
>
>OOD Detection의 주요 목적:
>- 안정성: 새로운 데이터에 대해 신뢰할 수 없는 예측을 피함.
>- 보안: 악의적인 공격이나 예상치 못한 입력에 대한 탐지.
>- 실용성: 실제 배포된 환경에서의 예측 신뢰도를 유지.
>
>OOD Detection 방법론:
>- 확률 기반 방법: 모델이 예측할 때 출력하는 확률을 기준으로 OOD를 감지하는 방식. 일반적으로 모델이 OOD 데이터에 대해서는 낮은 확률을 출력해야 하지만, 실제로는 그렇지 않은 경우도 있음.
>- 디스턴스 기반 방법: 훈련 데이터의 특징 공간에서 입력 데이터와의 거리를 측정하여, 거리가 크면 OOD로 간주하는 방식. 예를 들어, Mahalanobis distance와 같은 방법이 사용됨.
>- 엔트로피 기반 방법: 모델의 불확실성을 측정하는 척도인 엔트로피를 사용. 높은 엔트로피는 모델이 불확실성을 많이 가진다는 의미로, OOD일 가능성이 큼.
>- 딥러닝 기반 방법: 네트워크의 출력 특징을 기반으로 OOD를 감지하거나, 앙상블 모델을 사용하여 여러 모델의 출력을 조합하는 방식도 있음.
>
>OOD detection은 특히 자율주행, 의료 진단 시스템 등 안전이 중요한 시스템에서 매우 중요한 역할을 하며, 연구 및 개발이 활발히 진행되고 있습니다.

 - 기존 Supervised Learning에서는 잘 label된 data를 통해 Decision boundary인 분류를 통해 class 분류를 함.
 - example) 사전 정의된 분류(class)인 Dog, cat 등을 잘 분류
 - 잘 label된 data를 학습한 모델을 가지고, test환경에서 달라졌을때 어떻게 대처할 것인가? Dog/Cat이 아닌 Lion이 들어왔을 경우,,
   여기서 Lion == Unlabeled Data가 되는 것이며, 이런 Unlabeled data를 어떻게 다룰 것인가에 대한 방법론적인 부분