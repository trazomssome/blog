## express에서의 REST

- GET : 리소스를 조회한다
- POST : 리소스를 생성한다
- PUT : 리소스를 대체한다
- PATCH : 리소스의 일부를 수정한다
- DELETE : 리소스를 삭제한다

## POST/PUT/PATCH의 차이점?

- 멱등성의 차이
- 멱등성이란? 같은 연산을 여러번 수행해도 동일한 결과가 보장되는 성질
- 멱등성이 보장되는 메소드 : GET,PUT, DELETE
- PUT은 요청에 담긴 리소스로 기존의 리소스를 대체하기 때문에 멱등성이 성립된다
- PATCH의 경우는 애매함. 메소드 구현의 제약사항이 없어 구현에 따라 멱등성 보장 여부가 갈림

## 예시

- GET /posts 글 목록을 본다
- POST /posts 글을 생성한다
- PUT/posts/:id 글을 수정한다
- DELETE /posts/:id 글을 삭제한다

## RULES

## 참고자료

- https://meetup.toast.com/posts/92 (REST API 제대로 알고 사용하기)
- https://evan-moon.github.io/2020/04/07/about-restful-api/
- https://www.youtube.com/watch?v=ETdbm5jDDsg
- https://velog.io/@devmin/RESTful-API-examples
- https://github.com/WeareSoft/tech-interview/blob/master/contents/network.md#rest와-restful의-개념
- https://sanghaklee.tistory.com/57 (RESTful API 설계 가이드)
- https://sanghaklee.tistory.com/61 (REST API 관점에서 바라보는 HTTP 상태 코드(HTTP status code))
