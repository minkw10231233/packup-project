# PackUp 이사 서비스 웹사이트

React를 사용해 제작한 반응형 이사 서비스 웹사이트입니다.

사용자가 서비스 종류를 확인하고 상담 신청을 진행할 수 있도록 구현했으며,
React Router를 활용한 페이지 이동과 반응형 UI를 직접 구현했습니다.

---

## 배포 링크

- GitHub : https://github.com/minkw10231233/packup-project
- Demo : https://packup-project-ohkq.vercel.app

---

## 사용 기술

- React
- React Router
- JavaScript
- CSS
- Fetch API

---

## 주요 기능

- React Router 기반 페이지 이동
- 서비스 카드 컴포넌트 분리
- 데이터 기반 리스트 렌더링
- 상담 신청 폼 유효성 검사
- Fetch API를 활용한 POST 요청 처리
- Loading 상태를 활용한 중복 제출 방지
- FAQ 아코디언 UI 구현
- 반응형 레이아웃 구현
- 햄버거 메뉴 및 접근성 처리

---

## 페이지 구성

- `/` : 메인 페이지
- `/only-drive` : 운전만 서비스 소개
- `/one-help` : 1인 도움 서비스 소개
- `/two-help` : 2인 도움 서비스 소개
- `/consult` : 상담 신청 페이지
- `/complete` : 상담 신청 완료 페이지

---

## 구현 포인트

### 컴포넌트 분리

서비스 카드 영역을 `ServiceCard`, `ServiceList` 컴포넌트로 분리했습니다.

서비스 데이터는 별도의 `services.js` 파일에서 관리하여 유지보수가 쉽도록 구성했습니다.

### 상담 신청 폼

`useState`를 사용해 입력값과 에러 상태를 관리했습니다.

이름, 연락처, 이메일, 상담 유형에 대한 유효성 검사를 구현했으며,
Fetch API를 활용해 상담 신청 요청을 처리했습니다.

또한 요청 중에는 버튼을 비활성화하여 중복 제출을 방지했습니다.

### 반응형 메뉴

햄버거 메뉴를 직접 구현했으며,
ESC 키 입력, 외부 클릭, 닫기 버튼으로 메뉴를 제어할 수 있도록 처리했습니다.

또한 focus 이동을 적용해 접근성을 고려했습니다.

---

## 개선하고 싶은 점

- 실제 서버와 연동한 데이터 저장 기능
- TypeScript 적용
- 상담 신청 내역 확인 기능 구현
