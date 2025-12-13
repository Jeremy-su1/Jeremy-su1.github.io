---
title: "AI Advanced Summary"
date: 2025-05-19
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
    . 한계 1) 하나의 벡터에 하나의 단어를 할당 -> 다의어 처리 어려움, 여러 의미를 무게중심으로 처리 -> 의미 정확도가 떨어짐
    . 한계 2) 오타 처리 불가 (King -> KING 인식 불가),UNK(Unknown) token으로 처리 
    . 한계 3) 확장성 문제: 단어 수가 많아질수록 모든 단어 벡터화 불가능, 공간 부족, 확장성 문제 발생 

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
 - 기존 모델(RNN 등) 한계: 문장이 길면 내용 잊음 -> Transformer는 긴 Context처리 강점이 있다.
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

