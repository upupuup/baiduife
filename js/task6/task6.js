var check=document.getElementById('check');
var textarea=document.getElementById('textarea');
var input=document.getElementById('input');
var out=document.getElementById('out');
var re=/[,，\s\r]/;//定义分隔符

 function fn(){
 	var text_value=textarea.value;
 	var check_value=input.value;
 	var text_arr=text_value.split(re);
 
 	if(text_arr.indexOf(check_value)>=0){
 		var index=text_value.indexOf(check_value);
 		var len=check_value.length;
 		var keyHigh="<font style='color:white;background:red;'>"+check_value+"</font>";//查询内容高亮
 		out.innerHTML=textarea.value.replace(new RegExp(check_value,'g'),keyHigh);
 		out.style.display='block';			
 	}else{
 		out.style.display='block';
 		out.innerHTML='没有您要查询的内容';
 	}
 }
check.addEventListener('click',fn,false);


