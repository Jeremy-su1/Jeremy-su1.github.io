---
title: "임베딩 벡터의 정규화와 Cosine Similarity의 관계"
date: 2025-05-19
categories: [ML, DeepLearning,NLP]
tags: [python]
toc: true
toc_sticky: true
Typora-root-url: ../
author_profile: false
sidebar:
  nav: "docs"
search: true
#math: true
---

# Python의 Class란 무엇인가

## 🐍 Python Class 개념 정리 칼럼

---

## Python Class란 무엇인가

Python에서 **Class(클래스)** 는 객체 지향 프로그래밍(OOP, Object-Oriented Programming)의 핵심 구성 요소로,  
**데이터(속성, attribute)** 와 **동작(메서드, method)** 을 하나의 단위로 묶어 표현하는 설계도(blueprint)이다.

클래스는 현실 세계의 개념을 코드로 모델링하는 데 적합하다.  
예를 들어 `Server`, `User`, `Model`, `Dataset` 같은 개념을 클래스로 정의하면  
복잡한 시스템을 구조적으로 관리할 수 있다.

---

## 1. Class의 기본 구조

```python
class MyClass:
    def __init__(self, value):
        self.value = value

    def show(self):
        print(self.value)
```

### 핵심 구성 요소

* `class`: 클래스를 정의하는 키워드
* `__init__`: 객체가 생성될 때 자동으로 호출되는 생성자
* `self`: 객체 자기 자신을 가리키는 참조(reference)
* method: 클래스 내부에 정의된 함수

---

## 2. 객체(Object)와 인스턴스(Instance)

```python
obj = MyClass(10)
obj.show()
```

* **Class**: 설계도
* **Object / Instance**: 설계도를 기반으로 생성된 실제 대상
* 하나의 클래스에서 여러 인스턴스를 생성 가능
* 각 인스턴스는 독립적인 상태(state)를 가짐

---

## 3. Attribute와 Method

### Attribute (속성)

```python
self.value
```

* 객체가 가지는 데이터
* 인스턴스마다 독립적으로 존재

### Method (메서드)

```python
def show(self):
    print(self.value)
```

* 객체가 수행할 수 있는 동작
* 첫 번째 인자로 항상 `self` 사용

---

## 4. Class Variable vs Instance Variable

```python
class Server:
    vendor = "Linux"   # class variable

    def __init__(self, hostname):
        self.hostname = hostname  # instance variable
```

| 구분    | Class Variable | Instance Variable |
| ----- | -------------- | ----------------- |
| 소속    | 클래스            | 인스턴스              |
| 공유 여부 | 모든 객체 공유       | 객체별 개별            |
| 주요 용도 | 공통 설정          | 상태 정보             |

---

## 5. 상속(Inheritance)

```python
class BaseModel:
    def train(self):
        print("Training model")

class CNNModel(BaseModel):
    def predict(self):
        print("Predicting")
```

* 기존 클래스를 확장하여 재사용성 향상
* 공통 로직은 부모 클래스에 정의
* `is-a` 관계 표현에 적합

👉 ML/DL 코드에서 매우 빈번하게 사용되는 구조

---

## 6. 캡슐화(Encapsulation)

```python
class User:
    def __init__(self):
        self._role = "admin"
        self.__password = "secret"
```

* `_variable`: 내부 사용 목적 (관례)
* `__variable`: name mangling 적용 → 외부 직접 접근 제한

캡슐화의 목적은 **구현 은닉과 인터페이스 분리**이다.

---

## 7. Class Method와 Static Method

```python
class Utils:
    @classmethod
    def from_config(cls, path):
        return cls()

    @staticmethod
    def add(a, b):
        return a + b
```

| 구분      | classmethod | staticmethod |
| ------- | ----------- | ------------ |
| 첫 번째 인자 | cls         | 없음           |
| 클래스 접근  | 가능          | 불가           |
| 주요 용도   | 대안 생성자      | 유틸 함수        |

---
