---
title: "AI Advanced Keywords 2"
date: 2025-12-14
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
# AI Advanced Keywords 2

## LLM 발전 과정
* Transformer 성공의 영향  
    - Transformer 구조를 통해 BERT,GPT탄생   
        + BERT(2018): Encoder구조를 활용하여 문장 의미성파악    
            빈칸을 만든 다음 예측하는 문제
            문장들의 관계를 예측하여 벡터 출력
        + GPT(2018): Decoder구조를 활용하여 텍스트 생성
            다음 단어를 예측하여 문장을 작성 

* 개/고양이 분류 문제(Classification)과 유사  
    "이미지 분류"라는 단일 Task만을 목적으로 학습  
* 리뷰 분류 문제  
      
* BERT/GPT: 특정 Task가 아닌, 언어의 패턴 자체를 학습하고자 함  
    - 약간의 추가 학습만 거쳐도 단일 Task모델처럼 뛰어난 성능을 보임  

* Foundation Model  
    - Pretrain: 언어의 분포, 패턴 등의 사전 학습  
    - Fine-tuning: 사전 학습 이후 배우는 추가 학습  

* GPT(GPT-1):0.1B/ 파라미터가 1억 개인 transformer Decoder모델  
    - 특정 도메인에 적용하기 위해 후처리(Fine-tuning)필요  ex)리뷰 데이터+레이블 추가 학습 후  긍정/부정 분류  
    - 요약하려면 요약 데이터를 가르쳐야 함  
* GPT(2): 1.5B / 모델의 크기를 늘리고 웹함텍스트를 가져와 학습을 시킨 모델  
    - 긴 글 뒤에 TL;DR:(Too Long; Didn't Read:)을 붙이면 요약을 만듦    
    - 간단한 요약, 번역을 함  
* GPT(3): 175B / 대량의 데이터를 바탕으로 높은 수준의 지식과 언어 능력을 갖춘 LLM 시초 모델   
    - In-Context Learning 능력 발견: 입력 데이터를 주고 다음에 관련 내용을 물어봤을때 해당 데이터를 바탕으로 답변  
    - Few-Shot Learning 능력 발견: 최소한의 데이터를 통해 패턴을 파악하여 답변
    - 질의응답 능력은 부족
* GPT-1,2 VS. GPT-3
    - GPT-1,2:언어의 패턴을 이해해 다음 단어 예측 / 질문에 엉뚱한 답변을 하는 경우가 많음   
    - GPT-3: 지식의 확장으로 내용을 이해하고 답변 / 높은 수준의 지식과 언어력을 활용하여 답함    
* GPT-3.5: 175B / GPT-3를 개량해서 만든 chatGPT모델(강화 학습)  
    - 질의 응답 포맷 학습 + 강화 학습을 이용해 인간의 선호도 반영  
    - Supervised Fine Tuning(SFT) -> 정답이 있는 Fine-tuning + Reinforcement Learning with Human Feedback (RLHF)  
    - 사람을 활용해서 질문+답변 세트 포맷을 만들어서 학습시킴 (데이터 전처리)  
    - 언제 질문에 답을 해야할지 이해를 하지 못함  
    - STEP 1: 질문에 대한 답변을 해야하는 타이밍을 템플릿으로 만들어 학습시킴  
    - SFT의 단점: 답변이 일관성이 떨어지고 나쁜 질문에도 답을 할 수 있음 -> 인간의 선호도에 맞는 답변을 하기 위한 학습 필요  
    - STEP 2: RLHF: 사람에게 질문에 대한 좋은 답변이 무엇인지 라벨링을 하게 함 -> 라벨링 정보를 토대로 Reward(보상) model을 학습시킴 (RM) -> 바르고 유익한 말일수록 높은 점수를 주도록 학습시킴  
    - STEP 3: LLM에게 다시 질문을 주고, 그 답변에 대해 Reward Model이 평가함 -> Reward 값을 보고 다시 모델 학습  
        + 문제점: Reward 학습으로 인해 객관성을 잃고 아첨을 하는 부작용 생김  
* GPT-4: 1760B
    - MoE 구조: Self-Attention 공유 + 여러 개의 MLP 중 일부만 활성화  
    - Router: 여러 개의 FFN 지식 중에서 문제를 풀게 할 FFN을 결정하는 모듈(지식의 Layer를 여러개 놓고 선택). 
    - 모델을 크게 만들고 실제 필요한 계산량은 줄일 수 있어 출력이 빨라짐  
    - 단점: 적절한 배분을 하기 어려워 모델을 만들기 어려움(배분에 대한 문제). 
    - DeepSeekV2등에서 개선 구조로 계속 활용. 
* GPT-4o: Early Fusion. 
    - GPT4: vision encoder를 이용하여 이미지 인코딩 생성 후 결합. 
    - 이미지가 이해한 백터를 언어 모델의 벡터로 변환시켜주는 Projection layer 필요. 
    - GPT-4o(Omnimodel Model): 텍스트/이미지/오디오/비디오를 멀티미디어 토큰으로 변환 -> 초기에 융합하여 학습
    - Any-to-Any model 형태

* OpenAI o series
    - 질문이 주어지면 굉장히 긴 출력을 통해 답을 생성하는 모델
    - 추론을 통해 어려운 문제도 잘 풀어냄

* 가장 최신 모델(GPT-5)
    - 문제가 주어지면 Thinking을 굉장히 많이 한 다음성답을 함
    - 현존하는 모델 중에 모든 분야에서 1등의 성능 달성

* Encoder는 양방향 맥락을 참고하고 Decoder는 단방향 맥락을 참고
    - 이론적으로는 encoder 모델의 문장 이해력이 더 뛰어남
    - Encoder 모델은 사용 방식이 제한적
    - 어느 정도의 파라미터가 주어지고 데이터를 충분히 학습하면 Decoder모델도 높은 수준의 이해력을 갖게 됨
    - 최근의 decoder 기반 모델은 다양한 언어 Task에 모두 활용 가능
    