# Router 설계

## 주의사항

- id와 리소스 이외의 정보를 URI에 담지 말것
- 명사, 복수형으로 구성
- 어떤 리소스를 핸들링하는지 고민할 것
  - POST /login(X) => POST /session

## comment (/comments/)

- POST : 댓글 생성
- PATCH : 댓글 수정
- DELETE : 댓글 삭제
