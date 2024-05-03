
#### postman www.postman.com/downloads
## ExpressJS 프로젝트 시작하기
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
### 1. flow
client요청 > `app.use('/users', usersRouter);` > `Routes/users.router.js` >  `Controllers/users.controller.js` > `Models/users.model.js` > business logic 수행 후 response(view)
### 2.  MVC 폴더들 생성( Controllers, Nodels, Views )
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

### 파일 전송하기(res.sendFile)
1. 정적인 파일 보관할 폴더생성(`public/images`)
```javascript
function getPost(res, req){
  res.sendFile(path.join(__dirname,'..','public','images','forest.jepg'))
}
// 1. path.join() 하나의 경로로 조합 method
// 2. __dirname: 현재 실행하는 파일의 절대 경로
// 3. '..': 디렉토리 밖으로 한칸이동

```
### express.static()- 정적파일 제공하기
```javascript
app.use(express.static('public')) // public 디렉토리 안에있는 파일제공위해 미들웨어 등록
```

### 템플릿 엔진사용해보기(hbs)
1. `npm i hbs`
2. `app.set('view engine', 'hbs') // 특정엔진 템플릿 엔진으로 사용하기 위한 설정`; 
3. `app.set('views', path,join(__dirname, 'views')) // view 파일들이 모여있는 폴더 명시`
