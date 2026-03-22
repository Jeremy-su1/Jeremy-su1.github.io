---
layout: single
title: "Claude on mac"
categories: AI
tag: [AI]
toc: true
toc_sticky: true
Typora-root-url: ../
author_profile: false
sidebar:
  nav: "docs"
search: true
---

# Claude Code, 결국 써보게 되었다 (맥북 기준 설치 후기)

OpenAI ChatGPT를 약 1년 반 정도 결제해서 사용 중이다.  
솔직히 말하면… 업무 생산성 측면에서는 거의 필수 도구 수준이다.  
그럼에도 불구하고 계속 가지고 있던 불편함이 하나 있었다.  

🤔 인프라 운영자의 현실적인 한계
직업 특성상 내부 로그나 문서를 외부로 반출할 수 없다.
이건 당연한 보안 정책이다. 그런데 문제는 여기서 시작된다.

로그 자체는 꼭 confidential이라고 보긴 어렵다
(물론 hostname, IP 같은 건 제외)
하지만 실제 분석을 하려면 결국 맥락 전체를 봐야 한다

👉 여기서 항상 막힌다.
ChatGPT에 질문할 때는
로그 일부 잘라서 넣고
다시 또 일부 잘라서 넣고
앞뒤 맥락은 머릿속으로 이어붙여야 한다
이게 생각보다… 꽤 스트레스다 😅

🤯 "이거… Context 문제 아닌가?"
쓰다 보니 이런 생각이 들었다.
이거 그냥 Context 이어지는 게 안 되는 문제 아닌가?
물론 API로 연결하면 해결 가능하다.
하지만…

설정 번거롭고
코드 작성해야 하고
그냥 귀찮다 😇

👀 그러다 발견한 Claude
Claude가 이런 부분을 해결해준다는 얘기를 들었다.
솔직히 말하면
이건 안 해볼 수가 없었다.
👉 “로컬 기반 + 컨텍스트 유지”
👉 “터미널에서 직접 사용”
이 조합은 너무 매력적이다.
그래서 바로 해봤다.

🚀 시작해보자 (맥북 기준)
서론 길었고, 바로 들어간다 😎

1️⃣ 공식 사이트부터 보는 게 답
항상 그렇듯 블로그보다 공식 문서가 제일 정확하다.
👉 https://code.claude.com/docs/en/setup
우리는 영어를 싫어하지만(?)
딱 10초만 참으면 된다. 진짜다.

2️⃣ 설치 (Terminal)
👉 맥 기준이다. Windows는… 다음 기회에 😅
1. Terminal 실행
2. Claude 설치
```bash
curl -fsSL https://claude.ai/install.sh | bash
```
![claude curl](<../images/2026-03-22-claude/Screenshot 2026-03-22 at 16.55.16.png>)

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
```
3. Start Claude Code
```bash
claude
```
![execution the claude](<../images/2026-03-22-claude/Screenshot 2026-03-22 at 17.07.08.png>)
여기까지 하면 실행 자체는 된다 👍

⚙️ 초기 설정
실행하면 설정 화면이 나온다.
로그인도 진행해야 한다.
👉 이 부분은 그냥 안내대로 따라가면 끝
![Settings in the claude](<../images/2026-03-22-claude/Screenshot 2026-03-22 at 17.07.35.png>)
![Settings in the claude1](<../images/2026-03-22-claude/Screenshot 2026-03-22 at 17.08.07.png>)

😐 근데 여기서 문제 발생
"오 됐다!" 하고 보는데…
👉 Upgrade 하라고 나온다
찾아보니:
Explorer (웹/GUI)는 무료
Terminal Claude Code는 Pro 이상 필요
![Upgrade the claude usage](<../images/2026-03-22-claude/Screenshot 2026-03-22 at 17.08.07.png>)

🤨 결제… 해야 하나?
여기서 고민 시작된다.
이미 ChatGPT 구독 중인데? Claude까지 또 결제?
그리고 추가로 확인해보니…

👉 Token 제한 존재
심지어:
일정 사용량 초과 시 👉 5시간 사용 제한
![Token limitation](<../images/2026-03-22-claude/Screenshot 2026-03-22 at 17.11.38.png>)
😅 경험상 이런 거 무섭다
GPT 초기에 multimodal 테스트하다가 며칠 동안 못 썼던 기억이 있다…
그거에 비하면 짧긴 한데
👉 “얼마나 쓰면 제한 걸리는지”가 안 보인다
이게 좀 애매하다.

💸 결국 결제
고민하다가 그냥 해봤다.
👉 경험해보는 게 제일 빠르다
결제하면:
인증 코드 나오고 이메일 인증 진행
![Bills](<../images/2026-03-22-claude/Screenshot 2026-03-22 at 17.29.46.png>)
이런게 나오고 auth인증을 하도록 code가 나온다.
붙여넣게 되면, 이메일로 인증이된다.
![Bills](<../images/2026-03-22-claude/Screenshot 2026-03-22 at 17.30.54.png>)

추가로 몇가지 세팅을 하도록 유도하고
![Additional settings](<../images/2026-03-22-claude/Screenshot 2026-03-22 at 17.31.20.png>)
![Additional settings-1](<../images/2026-03-22-claude/Screenshot 2026-03-22 at 17.31.32.png>)

그럼 최종적으로 드디어 쓸수 있는 Claude를 볼수 있다.
![Final](<../images/2026-03-22-claude/Screenshot 2026-03-22 at 17.31.40.png>)

전 맥북에서도 vscode를 사용하기 때문에, vscode의 extension에서 claude를 설치했다.
![vscode](<../images/2026-03-22-claude/Screenshot 2026-03-22 at 17.36.30.png>)

✍️ 마무리
여기까지가 설치 + 초기 세팅 과정이다.
솔직히 설치 자체는 어렵지 않다.

근데 진짜 중요한 건 이거다:
그래서 이걸로 뭘 할 수 있는데?
👉 이건 다음 글에서 정리해보려고 한다 😎
