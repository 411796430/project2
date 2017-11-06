let express=require('express');
let subjectDB=require('../db/subjectDB');
let Subject=require('../model/Subject');
let ruter=express.Router();
//查询所有请求
ruter.get('/findAll',(req,resp)=>{
    subjectDB.findAll().then((results)=>{
        resp.send(results)
    }).catch((error)=>{
        resp.send(error)
    })
});
//通过id查询
ruter.get('/findById',(req,resp)=>{
    
    subjectDB.findById(req.query.id).then((results)=>{
        resp.send(results)
    }).catch((error)=>{
        resp.send(error)
    })
});
//级联查询
ruter.get('/find',(req,resp)=>{
    
    subjectDB.find(req.query).then((results)=>{
        console.log(results)
        resp.send(results)
    }).catch((error)=>{
        resp.send(error)
    })
});
//通过关键字查询
ruter.get('/query/:keys',(req,resp)=>{
    subjectDB.query(req.params.keys).then((results)=>{
        resp.send(results)
    }).catch((error)=>{
        resp.send(error)
    })
});
//保存
ruter.post('/save',(req,resp)=>{
    console.log(req.body)
    var subject=new Subject();
    Object.assign(subject,req.body);
    console.log(subject);
    subjectDB.save(subject).then((results)=>{
        resp.json(results)
    }).catch((error)=>{
        resp.send(error)
    })
});
//修改
ruter.post('/updata',(req,resp)=>{
    console.log(req.body)
    var subject=new Subject();
    Object.assign(subject,req.body);
    console.log(subject);
    subjectDB.updata(subject).then((results)=>{
        resp.json(results)
    }).catch((error)=>{
        resp.send(error)
    })
});
//删除
ruter.post('/batchDelete',(req,resp)=>{
    subjectDB.batchDelete(req.body).then((results)=>{
        resp.send(results)
    }).catch((error)=>{
        resp.send(error)
    })
  });  
module.exports=ruter