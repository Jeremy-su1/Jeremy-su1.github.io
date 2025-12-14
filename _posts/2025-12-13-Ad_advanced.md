---
title: "AI Advanced Summary"
date: 2025-12-13
categories: [ML, DeepLearning,NLP]
tags: [AI]
toc: true
toc_sticky: true
Typora-root-url: ../
author_profile: false
sidebar:
  nav: "docs"
search: true
#math: true
---

# AI Advanced Keywords

## 자연어 처리와 임베딩
* Embedding & Word2Vec  
  - 단어들간의 관계를 파악하는게 Word2Vec  
  - Word2Vec의 활용과 한계: Deeplearning 자연어 처리 초기에 많이 활용   
    + 한계 1) 하나의 벡터에 하나의 단어를 할당 -> 다의어 처리 어려움, 여러 의미를 무게중심으로 처리 -> 의미 정확도가 떨어짐  
    + 한계 2) 오타 처리 불가 (King -> KING 인식 불가),UNK(Unknown) token으로 처리   
    + 한계 3) 확장성 문제: 단어 수가 많아질수록 모든 단어 벡터화 불가능, 공간 부족, 확장성 문제 발생   

* 맥락(Context)  
  - 오타 처리와 의미 이해: 오타를 보고도 알맞은 단어로 유추 가능  
  - 세부 구성 분석 및 주변 맥락(Context)과 함께 고려 필요  

* 토근(Token)  
  - 단어나 텍스트 묶음을 더 잘게 나눈 단위  
  - 단어보다 작고, 글자 하나보다는 큼  
  - 토근 기반 임베딩: 임베딩을 단어가 아닌 토큰 레벨로 계산, 토큰 간 관계를 분석해 맥락(Context) 이해  

* **Transformer**
  - 2017년 구글 개발/인용수 19만번  
  - llm대부분이 트랜스포머 기반  
  - **Attention is All you need**  
  - 2017년 이전 주요 과제 = 문장 변환(seq to seq)  
  - 기존 모델(RNN(Recurrent Neural Network) 등) 한계: 문장이 길면 내용 잊음 -> Transformer는 긴 Context처리 강점이 있다.    
    @ Limitation of Recurrent Model       
       1) Recurrent Connection은 정보 손실 유발 <- time t가 길어질수록 최초 t의 영향이 줄어듬     
       2) vanishing gradients와 같은 문제로 학습이 어려움       
       3) 병렬처리가 어려움으로 사용할 수 있는 Data양이 적음 -> 병렬이 어려운 이유? Sequentail 처리 -> **앞의 결과가 뒤의 결과에 영향을 미침**      
 - Transformer도 초창기에는 seq to seq를 하기위한 목적이였음(번역)    
 
* Transformer structure  
  - Encoder: 입력 문장을 받아 의미를 벡터로 계산, Decoder: 인코더 결과를 받아 출력 문장 생성  
    -> 출력 생성은 순차적(토큰 단위 하나씩 생성)  
  - Attention, Feed Forward, Linear등 모듈들을 겹겹이 쌓아 올린 것이 transformer  
  - **Decoder: GPT와 같은 모델(Decoder와 100%일치는 아님), Encoder: BERT모델**  

* Tokenization의 기본 개념과 사례 및 문제점  
  - 텍스트를 작은 단위로 쪼개는 과정 = Tokenization    
     -> 단어 그대로 저장하는 것보다 공간 효율이 높다. 다양한 처리 가능  
  - 반대로, token목록에 없는 경우에는 바이트 단위로 단어를 쪼개서 인식해야되기 때문에 오히려 비요율이 발생할 수 있음(다국어 token)  
  - Token의 개수가 많아지면? Context 길이 제한이 빨리 소진되고, 처리 속도 저하 -> context길이 제한에 걸리는 구조  
     -> 한국어는 토큰화 과정에서 2:1정도의 압축률이지만, 영어는 4~5:1압축률이 높음 -> 이런 이유로 프롬프트는 영어로 쓰는게 유리하다는 부분이다.  
     -> 영어 토큰화가 효율적이라 더 많은 맥락 처리 가능  

## Transformer 발전 과정  
* Transformer 구조: 문장 -> 토큰화 -> 토큰별 임베딩   
  - 문장을 토큰으로 쪼개고 토큰별 벡터로산계산  

* Encoder / Decoder의 이해  
  - Encoder: 맥락을 반영한 토큰 개수만큼의 벡터(병렬적 생성)  
  - RNN: 나는 -> 밥을 -> 먹었다.(Short term memory)![RNN](/images/2025-12-13-Ad_advanced/Untitled.png?version%3D1765616582787)
  - transformer: 각 토큰들을 병렬적으로 개수를 유지하면서 생성  

  - Decoder: Decoder입력은 Encoder의 출력값 + 현재까지의 출력 문장  
    . <BOS> token이 들어옴  
    . Decoder 입력: <BOS> -> I -> <BOS> I -> had -> <BOS> I had -> Meal -> <BOS> I had Meal -> <EOS> **자기 회귀적(Auto Regressive) 출력 방식**  

  - Positional Encoding: 위치 인코딩 벡터를 통해 토큰의 위치 구분하기 -> 문장의 구조롤 이해하기 위한 처리 방식 -> 위치 인코딩 벡터를 통해 토큰의 위치 구분하기  
  ![Positional Encoding](/images/2025-12-13-Ad_advanced/PositionalEncoding.png?version%3D1765617049816)  
    . 각각의 벡터의 임베딩 벡터를 조금씩 회전시키는 'RoPE(Roterry Positional Encoding)'하는 회전 기반 방법 사용  
    . 목적: input을 받았을 때 각각의 위치를 기억, Decoder에서 중간 출력을 받았을 때 각각의 위치 기억!  

  - Transformer  
  ![Transformer](/images/2025-12-13-Ad_advanced/transformer2.png?version%3D1765633194926)  
  . Self-Attention: 맥락을 반영하여, 어디에 집중할 것인가?   
      -> 이 문장에서 이 단어는 어떤 의미인가? Attention을 통과하면서 각각의 토큰들과 연산 -> 단어가 단어에 영향을 미치면서 문장 내에서 단어의 의미 보존  
      -> self-attention을 통과하면 맥락이 반영된 토큰별 벡터가 되는것.  
      Multi-Head Attention, Masked Multi-Head Attention에 입력되어지는 Q,K,V가 전부 self임  
      Self-Attention을 통해 인식률이 좋은 vector로 다시 뽑는 것이 주 목적 -> 동일한 차원에서 더 좋은 representation을 뽑는것 -> Feature vector를 기계로 뽑는것  
  . FFNN (Feed-Forward Neural Network): 어떤 지식을 활용하여 이해할 것인가?  
      -> MLP(Multi-Layer Perceptron)  
      -> deep learning network / 비선형성을 추가하여 깊은 관계를 학습  
  . Add & Norm: 해당 Layer를 통해 layer를 통과한 결과와 통과하기 전 결과를 합쳐서 평균  
  . Linear: vector를 가지고 token의 가짓수만큼의 vector로 다시 확장  
  . Softmax: 확률분포로 변경   

 <Encoder>  
  6x layer를 쌓으면서, 파라미터의 수를 늘리고 복잡한 의미 이해  
  최종 출력: 입력 문장의 토큰별 의미 벡터 출력  
  Multi-Head Attention -  self-attention을 여러개 병렬로 사용  
  계산: N^2  
  양방향 맥락 (각각 계산)  
   입력 문장의  의미를 효과적으로 파악  
 <Decoder>  
  목적: 최종 문장 출력  
  input: encoder결과 + 출력 문장의 앞부분  
    - Encoder 결과 + <BOS> / <BOS> I / <BOS> I had / <BOS> I had meal  
  output: 다음 토큰의 확률 분포  
  단방향 맥락 (앞 부분의 단어만 계산)  
  출력 문장을 자연스럽게 생성   
  
 **Transformer가 번역에서 뛰어난 성능을 보이는 이유**  
  - Transformer가 RNN보다 훨씬 긴 맥락을 이해  
      . Encoder: 토큰의 길이가 길어져도 내용을 잊어버리지 않음 -> BERT  
      . Decoder: 중요도를 잘 이해하고 출력 문장을 자연스럽게 생성 -> GPT  
