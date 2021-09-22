const targetValue=(a)=>{
		if(scr.value==0){
            scr.value =a;
		}else{
			scr.value +=a;
		}
	}
const totalValue=()=>{
		scr.value = eval(scr.value);

	}