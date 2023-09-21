var hr=0;
var min=0
var sec=0
var set=0;
var timer=false;



function start(){
timer =true;
stopwatch();

}


function stop(){
timer=false;
}



function reset(){
timer=false;
 hr=0;
 min=0
 sec=0
 set=0;
 document.getElementById("hr").innerHTML=hr; 
    document.getElementById("sec").innerHTML=sec;
    document.getElementById("min").innerHTML=min;
    document.getElementById("count").innerHTML=set;
 
}

function stopwatch(){
if(timer==true){
    set=set+1;
    if(set==100){
        sec=sec+1;
        set=0;
    }
    if(sec==60){
        min=min+1;
        sec=0;
    }
    if(min==60){
        hr=hr+1;
        min=0;
        sec=0;
    }
    var hrstring=hr;
    var minstring=min;
    var secstring=sec;
    var setstring=set;

    if(hr<10)
{
    hrstring="0"+hrstring;
}    
    if(min<10)
{
    minstring="0"+minstring;
}    
    if(sec<10)
{
    secstring="0"+secstring;
}    
    if(set<10)
{
    setstring="0"+setstring;
}    
    document.getElementById("hr").innerHTML=hrstring; 
    document.getElementById("sec").innerHTML=secstring;
    document.getElementById("min").innerHTML=minstring;
    document.getElementById("count").innerHTML=setstring;
    setTimeout("stopwatch()",10);
}
}