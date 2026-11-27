# 춘스토리 퀴즈

한국사 실시간 퀴즈 게임 (GitHub Pages + Firebase Realtime Database)

- 학생 참가: https://chunyge.github.io/chunstory-quiz/play.html
- 선생님 진행: https://chunyge.github.io/chunstory-quiz/host.html

## 사용 방법
1. 선생님은 `host.html`을 열어 문제를 확인·수정하고 **방 만들기**를 누릅니다.
2. 학생은 폰으로 `play.html`에 들어와 PIN과 별명을 입력합니다.
3. **시작하기** → 문제마다 20초, 빨리 맞힐수록 높은 점수(500~1000점).

## 문제 고치기
host.html 첫 화면에서 한 줄에 한 문제씩 적습니다.

```
문제 | 보기1 | 보기2 | 보기3 | 보기4 | 정답번호
```

고친 문제는 그 컴퓨터의 브라우저에 저장됩니다.

## 보안 규칙
Firebase 테스트 모드는 2026-12-27에 끝납니다. 그 전에 Firebase 콘솔 → Realtime Database → 규칙에
`database.rules.json` 내용을 붙여 넣고 게시하세요. (rooms 아래 4자리 PIN 방만 쓸 수 있게 제한)
