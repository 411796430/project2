window.onload=function(){
    var inputs=document.getElementsByTagName("input");
    var p1=/\d{11}/;
    var p2=/\w{6}/
    
    
    var bt=document.getElementsByTagName("button");
    bt[0].onclick=function(){
        var sj=parseInt(Math.random()*10000);
        inputs[1].value=sj;
    }
    
    var dg=document.getElementById("duigou");
    var img=document.getElementById("img");
   
    img.style.display="none";
    
    duigou.onclick=function(){
        
        
        if(img.style.display=="none"){
            img.style.display="block"
        }else{
            img.style.display="none"
        }
         
        
    }
    
    inputs[4].onclick=function(){
        if(p1.test(inputs[0].value)){
            if(inputs[1].value!=""){
                if(p2.test(inputs[2].value)){
                    if(inputs[3].value==inputs[2].value){
                        if(img.style.display="block"){
                            alert("输入信息正确")
                        }else{
                            alert("请同意协议")
                        }
                    }else{
                        alert('确认密码失败')
                    }
                }else{
                    alert("请设置密码")
                }
            }else{
                alert("请获取验证码")
            }
        }else{
            alert("手机号输入有误")
        }
    }
}