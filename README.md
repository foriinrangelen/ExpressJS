# ExpressJS 프로젝트 시작하기
1. 폴더 생성
2. `npm init -y`
3. `npm install express`
4. create `server.js`
### nodemon 설치
`npm install -D nodemon`
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev":"nodemon server.js"
  },
```
## ExpressJS MVC Pattern 으로 변경
### MVC 폴더들 생성( Controllers, Nodels, Views )
#### Controllers
- `posts.controller.js`
- `users.controller.js`
- 등 controller 파일 추가
#### Models
- 
#### Views
- 
### Router 추가하기
1. `Routes` 폴더생성
2. `express.Router` 클래스 이용해서 `router` 객체생성 (`const usersRouter= express.Router();`)
3. `router`객체에 미들웨어 함수 등록 (`usersRouter.get('/', usersController.getUsers);`)
4. `server.js`파일에 경로에 따른 라우터 등록하기 (`app.use('/users', usersRouter);`)


### postman www.postman.com/downloads
