---
title: "LLM에서 자주 등장하는 Cosine Similarity 개념 정리"
date: 2025-05-19
categories: [LLM, NLP, Embedding]
tags: [cosine similarity, 임베딩, NLP, LLM, 벡터 유사도]
toc: true
toc_sticky: true
Typora-root-url: ../
author_profile: false
sidebar:
  nav: "docs"
search: true
---

## 🔍 LLM에서 자주 등장하는 Cosine Similarity란?

자연어처리(NLP)나 대형언어모델(LLM)을 공부하다 보면 자주 접하게 되는 개념 중 하나가 **Cosine Similarity (코사인 유사도)**입니다.  
이 글에서는 Cosine Similarity가 무엇인지, 왜 중요한지, 그리고 실제 LLM에서는 어떻게 활용되는지를 정리해보겠습니다.

---

### ✅ Cosine Similarity란?

Cosine Similarity는 **두 벡터 간의 방향 유사도**를 측정하는 지표입니다.  
쉽게 말해, 두 벡터가 얼마나 **같은 방향을 가리키고 있는지**를 계산하여 이들의 의미적 유사도를 파악합니다.

공식은 다음과 같습니다:

```yaml
Cosine Similarity = (A · B) / (||A|| * ||B||)

- \(A \cdot B\): 두 벡터의 내적 (dot product)  
- \(||A||, ||B||\): 벡터의 크기(norm)

이 값은 `-1 ~ 1` 사이의 범위를 가지며:
- `1`: 매우 유사한 방향 → 의미도 비슷함
- `0`: 무관한 관계
- `-1`: 정반대 의미
```
---

### ✅ 왜 "방향"이 중요한가요?

LLM에서는 단어, 문장, 문서를 **임베딩 벡터(embedding vector)**로 변환한 뒤,  
이 벡터 간의 의미적 유사도를 계산하는 데 Cosine Similarity를 활용합니다.

> 크기보다는 방향이 의미를 반영하기 때문에, 코사인 유사도가 의미 유사성 측정에 유리합니다.

---

### ✅ LLM에서의 활용 예시

- **문장 간 의미 비교**  
  → "나는 커피를 좋아해." vs "나는 에스프레소를 즐겨."  
  → 두 문장의 임베딩 벡터 간 코사인 유사도 계산

- **Semantic Search (의미 기반 검색)**  
  → 질문 벡터와 문서 벡터를 비교하여 관련 문서 찾기

- **텍스트 클러스터링**  
  → 유사한 텍스트를 자동으로 분류할 때 사용

---

### ✅ Python 코드 예제

```python
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

A = np.array([[1, 2, 3]])
B = np.array([[4, 5, 6]])

similarity = cosine_similarity(A, B)
print(similarity)  # [[0.97463185]]
```

✅ 마무리

LLM의 임베딩 공간은 단어와 문장의 의미를 수치적으로 표현한 공간입니다.
Cosine Similarity는 이 공간 내에서 벡터 간의 의미 유사도를 빠르고 직관적으로 계산하는 핵심 도구입니다.