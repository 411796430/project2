let express=require('express');
let studentDB=require('../db/studentDB');
let Student=require('../model/Student');
let ruter=express.Router();
//查询所有请求
ruter.get('/findAll',(req,resp)=>{
    studentDB.findAll().then((results)=>{
        resp.send(results)
    }).catch((error)=>{
        resp.send(error)
    })
});
//通过name查询
ruter.get('/findByName',(req,resp)=>{
    
    studentDB.findByName(req.query.name).then((results)=>{
        
        resp.send(results)
    }).catch((error)=>{
        resp.send(error)
    })
});
//通过关键字查询
ruter.get('/query/:keys',(req,resp)=>{
    studentDB.query(req.params.keys).then((results)=>{
        resp.send(results)
    }).catch((error)=>{
        resp.send(error)
    })
});
//保存
ruter.post('/save',(req,resp)=>{
    console.log(req.body)
    var student=new Student();
    Object.assign(student,req.body);
    console.log(student);
    studentDB.save(student).then((results)=>{
        resp.json(results)
    }).catch((error)=>{
        resp.send(error)
    })
});
//修改
ruter.post('/updata',(req,resp)=>{
    console.log(req.body)
    var student=new Student();
    Object.assign(student,req.body);
    console.log(student);
    studentDB.updata(student).then((results)=>{
        resp.json(results)
    }).catch((error)=>{
        resp.send(error)
    })
});
//删除
ruter.post('/batchDelete',(req,resp)=>{
    studentDB.batchDelete(req.body).then((results)=>{
        resp.send(results)
    }).catch((error)=>{
        resp.send(error)
    })
  });  
module.exports=ruter