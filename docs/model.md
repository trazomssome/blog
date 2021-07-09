# models

## 블로그 제작에 필요한 model

- user(superuser 포함)
- article
- comment

## User

- mail(required)
- username(required)
- password(required)
- avatarUrl
- homepage
- metadata(required)
  - joinType(local, social)
  - joinedAt
- comments[](relative)

## comment

- text
- createdAt
- owner(relative)
- article(relative)

## article

- title
- owner(relative)
- commens[](relative)
- articleUrl
- thumnaleUrl
- createdAt
- modifiedAt
- hashtags
- categories
- meta
  - views
  - likes
