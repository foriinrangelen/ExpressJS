const express= require('express');

const PORT= 4000;
const users= [
    {
        id:0,
        name:'k'
    },
    {
        id:1,
        name:'y'
    },
]
const app= express();
// POST요청 처리위한 bodyparser middleware 등록
app.use(express.json());

// 클라이언트 로그남기는 미들웨어 생성해보기& 왕복 시간 체크해보기
app.use((req, res, next)=> {
    const start= Date.now();
    console.log(`${req.method} ${req.url}`);
    next(); // 꼭 next를 해줘야 넘어갈 수 있음
    // 역순으로 돌아올때 여기부터 실행
    const diffTime= Date.now()- start;
    console.log(`end: ${req.method} ${req.url} ${diffTime}ms`)
})

// get && '/users' 처리
app.get('/users', (req, res)=> {
    res.send(users);
})

// post && '/users' express.json() 활용하여 POST요청처리
app.post('/users', (req, res)=> {
    console.log('req.body.name', req?.body?.name)
    // 만약 req.body.name가 없다면 (요청시 보내지 않았다면) 응답을하여도 다음로직이 실행되기때문에 에러처리는 무조건 return
    if(!req.body.name) return res.status(400).json({error: "Missing user name"});

    const newUser= {
        name:req.body.name,
        id:users.length,
    }
    users.push(newUser);
    res.json(newUser);
})


// get && '/users/1' 처리
// ✅req.params 사용하기
// ✅url의 :userId 부분이 req.prrams의 userId에 담긴다
app.get('/users/:userId', (req, res)=> {
    // url :userId 파싱하기
    const userId= Number(req.params.userId);
    const user= users[userId];
    if(user) res.json( user );
    else res.sendStatus( 404 );
    
});


// get '/' 처리
// ✅ express는 http와 다르게 자동으로 status와 content type을 지정해준다
app.get('/', (req, res)=> {
    res.send('Hello World');
})



app.listen(PORT, ()=> {
    console.log(`Running on port ${PORT}`);
})

// ✅ res.json() vs res.send() 의차이
// 기능상 거의 동일하나 send()는 내부적으로 호출이 한번더 일어나고
// res.json()이 더 직관적이기 때문에 res.json() 이용추천

// ✅ res.send() vs res.end() 의차이
// res.end(): 데이터를 제공하지않고 응답을 종료하려면 res.end() 를 사용해야하며 404같은 페이지에 유용 ( res.status(404).end(); )
// res.end('<p>some html</p>') 과 같이 html을 포함하여 보낼수도있으나 e-tag&header 등의 이유로 보낼거면 res.send()선호
// res.json() 이나 res.send() 같은 경우는 알아서 세션을 종료하기 때문에 res.end()가 필요없다

/* 미들웨어( middleware ) 알아보기 
- 미들웨어는 요청이 들어오고 응답을 보내기 전에 실행되는 함수의 연속(미들웨어는 모든요청에 들어가기전 거쳐야하는 단계)
  request => MiddleWare1-next() => MiddleWare2-next() => MiddleWare3-next() => response 의 flow 를가지며
  (사실 미들웨어 끝까지 갔다가 다시 역순으로 미들웨어를 거쳐 처음으로 돌아와서 response를 한다 돌아올때는 next()다음 코드가 실행)
  
app.use((req, res, next)=> {
    console.log('Time', Date.now())
    next()
})
와 같은 app.use()를 통해 등록



*/
