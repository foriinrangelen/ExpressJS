// Model에서 데이터 가져오기
const model= require('../Models/users.model')

function getUsers(req, res) {
    res.send(model);
}


function getUser(req, res) {
    // url :userId 파싱하기
    const userId= Number(req.params.userId);
    const user= model[userId];
    if(user) res.json( user );
    else res.sendStatus( 404 );
}

function getUsers(req, res) {
    res.send(model);
}


function postUser(req, res) {
    console.log('req.body.name', req?.body?.name)
    
    if(!req.body.name) return res.status(400).json({error: "Missing user name"});

    const newUser= {
        name:req.body.name,
        id:model.length,
    }
    users.push(newUser);
    res.json(newUser);
}

module.exports={
    getUser,
    getUsers,
    postUser
}