window.onload = function(){
    var ul2=document.getElementById("ul2");
    var ul2lis=ul2.children;
    var topclass=document.getElementsByClassName('top')
    for(var i=0;i<ul2lis.length;i++){
			ul2lis[i].onmouseover=(function(num){
				return function(){
					for(var j=0;j<ul2lis.length;j++){
						ul2lis[j].className="";
					}
					ul2lis[num].className="dikuang";	
					
				
					for(var k=0;k<topclass.length;k++){
						
						
						topclass[k].style.display="none";
						
					}
					topclass[num].style.display="block";
				}
				
				
			})(i);
		}

	var numul = document.getElementById("num");	
	var numlis = numul.children;
	//console.log(numlis);
    var topul = document.getElementById("top");
    var topul1 = document.getElementById("top1");
    var topul2 = document.getElementById("top2");
	var toplis = topul.children;
	var toplis1 = topul1.children;
	console.log(toplis1)
    var toplis2 = topul2.children;
	//自动轮播
	var flag=0;
	var j=0;		//move运动中当前的下标值
	var t = 0;//接收setInterval(step,2000)的返回值
	var t1 = 0;
			
	
	
	numul.onmouseover = function(event){
		var target = event.target;
		
		if(target.nodeName =="LI"){
			clearInterval(t);
			clearInterval(t1);
			
			//获取当前的下标
			var index=target.getAttribute("val");
			//console.log(index);
			flag=+index;
			//console.log(flag);
			if(flag>1 && flag<3){
                topul.style.left = (-(flag-1))*215+"px";
                topul1.style.left = (-(flag-1))*215+"px";
                topul2.style.left = (-(flag-1))*215+"px";
			}else if(flag==3){
                topul.style.left = (-(flag-2))*215+"px";
                topul1.style.left = (-(flag-2))*215+"px";
                topul2.style.left = (-(flag-2))*215+"px";
			}else{
                topul.style.left = 0 +"px";
                topul1.style.left = 0+"px";
                topul2.style.left = 0+"px";
			};
			
			//清除样式
			Array.prototype.slice.call(numlis,0).forEach(function(item){
				item.removeAttribute("class","click");
				//console.log(item);
				
			});
			Array.prototype.slice.call(toplis,0).forEach(function(item){
				item.className=""
				//console.log(item);
				
            });
            Array.prototype.slice.call(toplis1,0).forEach(function(item){
				
				item.className=""
				//console.log(item);
				
            });
            Array.prototype.slice.call(toplis2,0).forEach(function(item){
				item.className=""
				//console.log(item);
				
			});
			
			//添加样式
			target.setAttribute("class","click");
            toplis[flag].setAttribute("class","foucs");
            toplis1[flag].setAttribute("class","foucs");
            toplis2[flag].setAttribute("class","foucs");
		}
		
	};
	
	
	
	
	//当鼠标移除时的事件
	numul.onmouseout=function(event){
		//console.log(flag);
		//console.log(event.target);
		if(event.target.nodeName=="LI"){
			j = flag;		
			t1=setInterval(moveb,2000);	
		}
		
		//函数封装（鼠标移除后继续轮播的函数）
		 function moveb(){
			//console.log();
			j++;
			if(j>numlis.length-1){
				j=0;
			}
			//console.log(j);
			for(var i=0;i<numlis.length;i++){
				numlis[i].removeAttribute("class","click");
                toplis[i].removeAttribute("class","foucs");
                toplis1[i].removeAttribute("class","foucs");
                toplis2[i].removeAttribute("class","foucs");
				if(j>1 && j<3){
                    topul.style.left = (-(j-1))*215+"px";
                    topul1.style.left = (-(j-1))*215+"px";
                    topul2.style.left = (-(j-1))*215+"px";
				}else if(j==3){
                    topul.style.left = (-(j-2))*215+"px";
                    topul1.style.left = (-(j-2))*215+"px";
                    topul2.style.left = (-(j-2))*215+"px";
				}else{
                    topul.style.left = 0 +"px";
                    topul1.style.left = 0 +"px";
                    topul2.style.left = 0 +"px";
				}
			}
			numlis[j].setAttribute("class","click");
			toplis[j].setAttribute("class","foucs");
			toplis1[j].setAttribute("class","foucs");
			toplis2[j].setAttribute("class","foucs");
		}
	}


	//函数封装（自动轮播的函数）
	move = function(){
		//console.log();
		j++;
		if(j>numlis.length-1){
			j=0;
		}
		
		//判断进行图片的定位
		for(var i=0;i<numlis.length;i++){
			numlis[i].removeAttribute("class","click");
			toplis[i].removeAttribute("class","foucs");
			if(j>1 && j<3){
                topul.style.left = (-(j-1))*215+"px";
                topul1.style.left = (-(j-1))*215+"px";
                topul2.style.left = (-(j-1))*215+"px";
			}else if(j==3){
                topul.style.left = (-(j-2))*215+"px";
                topul1.style.left = (-(j-2))*215+"px";
                topul2.style.left = (-(j-2))*215+"px";
			}else{
                topul.style.left = 0 +"px";
                topul1.style.left = 0 +"px";
                topul2.style.left = 0 +"px";
			}
		}
		numlis[j].setAttribute("class","click");
        toplis[j].setAttribute("class","foucs");
        toplis1[j].setAttribute("class","foucs");
        toplis2[j].setAttribute("class","foucs");
		//console.log(j);
		
	}
	
	//自动轮播
	t = setInterval(move,2000)
	
    var au1=document.getElementsByClassName('au1');
    var au1lis=au1[0].children;
    var au2=document.getElementsByClassName('au2')
    for(var i=0;i<au1lis.length;i++){
			au1lis[i].onmouseover=(function(num){
				return function(){
					for(var j=0;j<au1lis.length;j++){
						au1lis[j].className="";
					}
					au1lis[num].className="al1";	
					
				
					for(var k=0;k<au2.length;k++){
						
						
						au2[k].style.display="none";
						
					}
					au2[num].style.display="block";
				}
				
				
			})(i);
		}
}

