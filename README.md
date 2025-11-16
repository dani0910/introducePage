## Introduce Page - Personal Landing Page
초창기에 바닐라 JS로 만들어본 자기소개 페이지
스크롤 애니메이션 + GSAP + 간단한 오디오 플레이어 기능을 담은 개인 웹 페이지입니다.
<br>

##✨ 프로젝트 소개

이 프로젝트는 바닐라 JavaScript, HTML/CSS, GSAP(GreenSock Animation Platform) 을 사용하여 만든
간단한 자기소개/포트폴리오 페이지입니다.

총 3개의 섹션으로 구성되어 있으며,
스크롤 이동에 따라 자연스럽게 화면이 전환되고, 배경 그라데이션이 변하면서
부드러운 인터랙션을 제공합니다.

HTML/CSS + 간단한 바닐라 JS 코드만으로도 충분히 감성 있는 자기소개 페이지를 만들어냈습니다


![Intro](assets/intro.png)
![About](assets/about.png)
![Playlist](assets/playlist.png)

<br>
##🎨 주요 기능
1️⃣ GSAP 스크롤 연동 애니메이션

스크롤을 내릴 때 섹션이 부드럽게 슬라이드되며 등장

각 섹션 전환 시 배경색이 그라데이션으로 바뀌도록 구현

라이브러리 없이 직접 구현하기 힘든 애니메이션을 GSAP ScrollTrigger 기반으로 처리

👉 섹션마다 분위기가 바뀌면서 자연스럽게 이어지는 흐름을 의도했음

<br/>
2️⃣ 오디오 플레이어 + UI 연동

Playlist 섹션에서 음악을 클릭하면 실제로 음악이 재생됨

선택된 음악에 따라 배경 이미지/색감도 함께 변경

HTML <audio> 태그 + JS 이벤트로 직접 구현

👉 단순히 사진만 보여주는 소개 페이지가 아니라,
사용자 행동에 따라 반응하는 인터랙티브 페이지를 목표로 함

<br/>
3️⃣ 바닐라 JS 기반 라우팅 느낌 구현

Intro / About me / Playlist 메뉴 클릭 시
→ 상단 네비게이션에서 해당 위치로 자연스럽게 스크롤 이동

SPA는 아니지만, SPA 느낌을 주는 전환효과 적용

<br/>
4️⃣ CSS 그라데이션 + 깊이감 있는 UI

섹션마다 분위기를 살린 색상 그라데이션

유리(frosted glass) 느낌의 백그라운드 박스

<br>

##🛠️ 기술 스택
HTML / CSS / JavaScript (Vanilla)
GSAP (ScrollTrigger) – 스크롤 애니메이션
GitHub Pages – 정적 사이트 배포

<br>

##💡 개발하면서 배운 점
GSAP ScrollTrigger로 섹션 전환 애니메이션 구조 잡는 방법

바닐라 JS로 오디오 제어 UI를 만드는 과정

GitHub Pages를 활용해서 정적 사이트 배포하는 방법 학습


그림자·패딩 등 정적인 소개 페이지보다 훨씬 디테일한 UI

<br/>

## 🚀 향후 업데이트 가능성
- 모바일 반응형 디자인 추가
- 라이트/다크 모드 전환 UI
- 기능 추가 및 리액트로 확장
