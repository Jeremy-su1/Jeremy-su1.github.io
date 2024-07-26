---
layout: single
title: "Seq2Seq"
categories: ML
tag: [seq2seq,ML,Deeplearning]
toc: true
Typora-root-url: ../
author_profile: false
sidebar:
  nav: "docs"
search: true
---
# Sequence to Sequence Learning

## Sequence to Sequence Learning이란?

![seq2seq.drawio](/images/2024-07-08-Seq2Seq-Learning/seq2seq.drawio.png)

- Seq2Seq Paper
   [1409.3215v3.pdf](/images/2024-07-08-Seq2Seq-Learning/1409.3215v3.pdf) 
- Seq2Seq(Sequence-to-Sequence) 모델은 Input 데이터를 모델을 통해 다른 Output으로 변환하는 작업을 수행하는 DeepLearning 모델 혹은 Framework을 의미한다. 
- 그림과 같이 모델에는 인코더(Encoder)와 디코더(Decoder)를 가지고 있다.
  Context Vector의 경우, Encoder의 마지막 hidden Layer의 vector를 Decoder에 전달해주는 역할을 한다.
  이러한 경우, Input의 마지막 쪽으로 가면서 앞쪽 input의 영향이 적어지는 Short-Term Memory 단점도 있다.

## S2S Cases
