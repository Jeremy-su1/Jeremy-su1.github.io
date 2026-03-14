---
layout: single
title: "AI 용어가 너무 많다: Agentic AI, AI Agent, LangGraph, 그리고 2026년 흐름 한눈에 보기"
categories: AI
tag: [AI, ML, DeepLearning]
toc: true
toc_sticky: true
Typora-root-url: ../
author_profile: false
sidebar:
  nav: "docs"
search: true
classes: wide
---
# AI 용어가 너무 많다: Agentic AI, AI Agent,,,, 그리고 2026년 흐름 한눈에 보기
요즘 AI 관련 글을 보다 보면 비슷해 보이지만 미묘하게 다른 용어들이 계속 등장합니다.  
AI Agent, Agentic AI, workflow, orchestration, multi-agent, MCP, context engineering 같은 표현이 대표적입니다. 각각 따로 보면 이해가 되지만, 전체 그림에서 어떤 관계인지 한 번에 정리된 자료는 많지 않습니다.    

그런데 2025년과 2026년의 흐름을 보면, 이 용어들은 우연히 함께 등장하는 것이 아닙니다. OpenAI는 2025년을 돌아보며 많은 팀이 “단계별 프롬프트”에서 “에이전트에게 일을 위임하는 방식”으로 이동했다고 정리했고, Anthropic은 효과적인 에이전트 시스템이 복잡한 마법이 아니라 단순하고 조합 가능한 패턴 위에서 만들어진다고 설명했습니다. Gartner도 2026년 전략 기술 트렌드에 Multiagent Systems, Domain-Specific Language Models, AI Security Platforms를 포함시켰습니다. 즉, 지금의 생성형 AI는 더 이상 “잘 답하는 모델”만의 경쟁이 아니라, 실제로 일을 수행하는 시스템으로 빠르게 이동하고 있습니다.  
 * reference: [OpenAI](https://developers.openai.com/blog/openai-for-developers-2025/), [Gartner](https://www.gartner.com/en/articles/top-technology-trends-2026)  

## 1. AI Agent와 Agentic AI는 무엇이 다른가?  
많은 경우 두 용어는 혼용되지만, 한번은 정확하게 구분해 두는 편이 좋습니다.  

### AI Agent  
AI Agent는 비교적 좁은 의미입니다.  
보통은 LLM이 도구를 사용하고, 필요한 정보를 찾고, 판단을 내려 특정 작업을 수행하는 실행 단위를 뜻합니다. OpenAI의 설명대로, agent는 사용자를 대신해 작업을 수행하는 시스템이며, 모델이 지시를 해석하고 의사결정을 하며 도구를 활용해 결과를 만들어냅니다.
[OpenAI](https://developers.openai.com/cookbook/topic/agents/)  
예를 들면 이런 것입니다.  
- 이메일을 읽고 요약한 뒤 답장 초안을 작성하는 에이전트  
- 장애 티켓을 읽고 로그를 조회한 뒤 1차 분석을 수행하는 에이전트  
- 문서를 검색하고 필요한 내용만 추려 보고서를 만드는 에이전트  

즉, **“일을 수행하는 하나의 주체”**에 가깝습니다.  

### Agentic AI. 

반면 Agentic AI는 더 넓은 개념입니다.  
이것은 특정한 하나의 에이전트를 가리키기보다, **AI가 목표를 이해하고 계획을 세우며 도구를 호출하고 중간 상태를 유지하면서 여러 단계를 거쳐 결과를 만들어내는 시스템적 특성**을 말합니다. 다시 말해 Agentic AI는 “에이전트 하나”라기보다 에이전트적으로 작동하는 방식 전체를 뜻합니다. OpenAI와 Anthropic이 설명하는 agent 패턴, tool use, handoff, long-running task, context management 같은 요소들이 모두 이 범주에 들어갑니다.  

| 구분 | AI Agent               | Agentic AI                          |
| -- | ---------------------- | ----------------------------------- |
| 초점 | 하나의 실행 주체              | 목표 지향적 AI 시스템의 작동 방식                |
| 범위 | 좁음                     | 넓음                                  |
| 질문 | “이 에이전트가 무슨 일을 하나?”    | “이 시스템은 어떻게 계획·도구·상태를 관리하며 일을 끝내나?” |
| 예시 | 문서 요약 에이전트, 장애 분석 에이전트 | 멀티에이전트 협업 시스템, 장시간 실행형 업무 자동화       |

따라서 AI Agent는 구성 요소, Agentic AI는 설계 패러다임에 가깝다고 이해하면 좋을것 같습니다.

## 2. Multi-agent란 무엇인가

처음에는 “하나의 강력한 agent가 모든 일을 하면 되지 않을까?”라는 생각을 하기 쉽습니다. 하지만 실제 서비스는 그렇게 단순하지 않습니다. 조사, 계획, 실행, 검토, 승인 같은 단계가 섞여 있고, 각 단계가 요구하는 능력도 다릅니다. 그래서 하나의 agent가 모든 일을 처리하는 구조보다, 역할이 분리된 여러 agent가 협업하는 구조, 즉 Multi-agent가 중요한 개념으로 떠오르고 있습니다.    

예를 들어 어떤 리서치 작업을 수행한다고 해보겠습니다.  
한 agent는 문제를 분해하고, 다른 agent는 웹과 문서를 조사하고, 또 다른 agent는 결과를 종합하고, 마지막 agent는 품질을 검토할 수 있습니다. Anthropic은 실제로 자사 Research 기능을 설명하면서 복잡한 주제를 더 효과적으로 탐색하기 위해 여러 Claude agent를 활용하는 multi-agent research system을 공개했습니다. 이는 multi-agent가 단순한 개념 제안이 아니라, 이미 실제 구조로 사용하고 있다는 것입니다.
( https://www.anthropic.com/engineering/multi-agent-research-system )

그렇다고 multi-agent가 언제나 정답은 아닙니다. Anthropic은 동시에, 많은 경우 성공적인 시스템은 거대한 프레임워크보다 단순하고 조합 가능한 패턴에서 출발한다고 강조했습니다. 즉, task가 충분히 작고 흐름이 단순하다면 단일 agent가 더 나을 수 있습니다. 반대로 업무가 길고, 분기와 검토가 많고, 서로 다른 전문성이 필요하다면 multi-agent 구조가 더 유리할 수 있습니다. 핵심은 “무조건 여러 agent를 쓰는 것”이 아니라, **복잡한 업무를 어떻게 분해할 것인가**입니다.

Gartner가 2026년 전략 트렌드로 Multiagent Systems를 직접 언급한 것도 같은 맥락입니다. 이들은 modular AI agents가 복잡한 업무를 협업을 통해 처리하면서 자동화와 확장성을 높일 수 있다고 봅니다. 결국 multi-agent는 “더 똑똑한 단일 모델”의 대체재라기보다, 복잡성을 관리하기 위한 시스템 설계 방식이라고 보는 편이 맞습니다.

## 3. MCP는 무엇인가

최근 AI 인프라 문맥에서 가장 자주 보이는 용어 중 하나가 **MCP(Model Context Protocol)**입니다. MCP 공식 홈페이지는 이를 LLM 애플리케이션과 외부 데이터 소스 및 도구를 매끄럽게 연결하기 위한 오픈 프로토콜이라고 정의합니다. 쉽게 말하면, 모델이 파일 시스템, 문서 저장소, 데이터베이스, 사내 시스템, API 같은 외부 세계와 연결될 때 공통 규칙을 주는 표준 인터페이스에 가깝습니다.
( https://modelcontextprotocol.io/specification/2025-11-25 )  

왜 이것이 중요할까요.   
AI의 가치는 “모델이 아는 것”만으로 결정되지 않기 때문입니다. 실제에서는 모델이 외부 시스템을 읽고, 검색하고, 호출하고, 필요하면 액션까지 해야 합니다. 그런데 도구 연결 방식이 서비스마다 제각각이면 연결시키기가 어렵습니다. MCP는 바로 이 지점을 표준화하려는 시도입니다. OpenAI도 공식 문서에서 remote MCP servers와 connectors를 통해 모델에 새로운 기능을 부여하는 방식을 안내하고 있으며, 2025년에는 Responses API에서 remote MCP server 지원을 발표했습니다.  

실제 환경에서 보면 MCP는 “AI용 USB-C” 같은 비유가 자주 붙습니다. 중요한 점은 이 비유보다도, MCP가 모델 성능을 높이는 기술이 아니라 연결성과 상호운용성을 높이는 기술이라는 점입니다. 앞으로 어떤 모델을 쓰느냐만큼, 어떤 내부 도구와 데이터를 얼마나 안전하고 표준화된 방식으로 연결할 수 있느냐가 중요해질 가능성이 큽니다.  

## 4. Context engineering이란 무엇인가

몇 년 전까지 생성형 AI에서 가장 많이 들리던 말은 prompt engineering이었습니다. 질문을 어떻게 쓰면 더 나은 답변을 얻을 수 있는가가 핵심 관심사였습니다. 그런데 agent 시스템이 늘어나면서 문제의 본질도 바뀌었습니다. 이제 중요한 것은 문장 한 줄을 잘 쓰는 것이 아니라, 모델이 그 순간 어떤 정보와 상태를 보고 무엇을 참고할 수 있는지를 설계하는 것입니다. 이 흐름 속에서 등장한 표현이 **context engineering**입니다.

Anthropic은 context engineering을 효과적인 agents를 만들기 위한 핵심 관점으로 설명합니다. LangChain 설명도 비슷합니다. context engineering은 agent의 각 단계에서 context window 안에 무엇을 넣고, 빼고, 압축하고, 격리할지를 설계하는 일입니다. 즉, 단순히 “프롬프트를 잘 쓰는 법”보다 훨씬 넓습니다. 히스토리를 얼마나 유지할지, 검색 결과를 어떤 형식으로 넣을지, 도구 설명을 언제 노출할지, 중간 산출물을 다음 단계에 어떻게 넘길지까지 모두 여기에 포함됩니다.

이 개념이 중요한 이유는 명확합니다.  
지금의 모델들은 꽤 똑똑하지만, 필요한 맥락이 잘못 들어가면 쉽게 흔들립니다. 너무 많은 정보를 넣으면 집중을 못 하고, 너무 적게 넣으면 판단을 못 하며, 잘못된 이력이나 불필요한 도구가 노출되면 오히려 품질이 떨어집니다. 그래서 최근 agent 설계의 핵심 역량은 모델 자체를 바꾸는 것보다, 올바른 맥락을 적절한 시점에 공급하는 능력으로 이동하고 있습니다. context engineering이 중요한 이유가 바로 여기에 있습니다.

한마디로 정리하면, prompt engineering이 “질문 문장을 잘 만드는 기술”이라면, context engineering은 에이전트가 제대로 일할 수 있도록 정보 환경 전체를 설계하는 기술입니다. 그리고 2026년의 agent 시스템 논의에서는 점점 이 후자가 중심이 되고 있습니다.

## 5. 요즘 AI 추세는 무엇인가
감히 위와 같은 개념들을 보며 이해하고서, 2026년의 AI 흐름을 아래처럼 잡아볼수 있을것 같습니다.

첫째, 모델 중심 경쟁에서 시스템 중심 경쟁으로 이동하고 있습니다. OpenAI는 2025년을 돌아보며 더 나은 planning, tool use, longer-horizon task 수행 능력을 바탕으로 많은 팀이 step-by-step prompting에서 agent delegation으로 이동했다고 설명했습니다. 즉, 중요한 것은 더 이상 “답변을 잘하는 모델” 하나가 아니라, 모델과 도구와 상태와 운영을 묶은 시스템입니다.

둘째, 단일 agent보다 multi-agent와 orchestration에 대한 관심이 커지고 있습니다. Gartner는 Multiagent Systems를 2026년 전략 기술 트렌드로 꼽았고, Anthropic은 실제 multi-agent research system 구축 경험을 공개했습니다. 이는 여러 agent가 역할을 나눠 협업하는 구조가 연구 주제를 넘어서 실제 제품과 업무 자동화 영역으로 들어왔다는 뜻입니다.

셋째, MCP 같은 연결 표준의 중요성이 커지고 있습니다. 모델이 실제 업무를 하려면 외부 툴과 데이터에 접근해야 하고, 이 연결을 표준화하지 않으면 생태계가 커지기 어렵습니다. OpenAI가 remote MCP servers와 connectors를 공식 문서에 포함하고, MCP가 별도 공식 사양을 가진 공개 프로토콜로 자리 잡은 것은 이 흐름을 잘 보여줍니다.

넷째, 범용 모델만으로는 부족하고 도메인 맥락의 가치가 커지고 있습니다. Gartner는 Domain-Specific Language Models를 2026년 전략 트렌드로 제시하며, 특화된 업무에서는 정확성·비용·컴플라이언스 측면에서 도메인 특화 모델과 맥락이 더 중요해질 수 있다고 봤습니다. 결국 AI 경쟁력은 모델 이름보다, 도메인 지식과 도구 연결, 그리고 문맥 설계에서 더 크게 벌어질 가능성이 있습니다.

흐름을 보자면, AI는 “질문에 답하는 소프트웨어”에서 “목표를 받아 실제 업무를 수행하는 시스템”으로 이동하고 있습니다. 그래서 앞으로 AI를 볼 때는 “무슨 모델을 썼나”보다는, 어떤 agent 구조를 썼는지, 외부 도구와 어떻게 연결되는지, context를 어떻게 설계하는지, 안전하게 운영할 수 있는지를 함께 볼 필요가 있다고 생각됩니다. 그런 부분들을 이해하면, 전체적인 생태계를 하나의 흐름으로 연결하여 볼 수 있지 않을까 생각됩니다.

> ✍️ Written by Jeremy.  
> 🔗 Full article: https://jeremy-su1.github.io/