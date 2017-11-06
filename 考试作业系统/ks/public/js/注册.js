$(function(){
            $('#registerBtn').on('click',function(){
                let name=$('input[name=name]').val();
                let password=$('input[name=password]').val();
                let xs={
                    name:name,
                    password:password
                }
                console.log(name)
                var flag=0
                $.getJSON('student/findByName?name='+name,function(data){
                    // console.log(data[0].name)
                    if(data[0].name==name){
                        flag=1;
                        alert('该用户已存在')
                    }
                })
                if(flag==0){
                    console.log(xs)
                    $.ajax('student/save',{
                        'data':JSON.stringify(xs),
                        'method':'POST',
                        'contentType':"application/json",//http协议
                        success:function(){
                            alert("注册成功");
                            window.location.reload()        
                            }
                    })
                }
            });


            $('#loginBtn').on('click',function(){
                let name=$('input[name=name]').val();
                let password=$('input[name=password]').val();
                let xs={
                    name:name,
                    password:password
                };
                console.log(xs)
                $.getJSON('student/findByName?name='+name,function(data){
                     console.log(data)
                    if(data[0].name==name){
                        if(data[0].password==password){
                            window.location='index.html?'+name;
                        }else{
                            alert('密码错误')
                        }
                    }else{
                        alert('该用户不存在')
                    }
                })
            })
        })