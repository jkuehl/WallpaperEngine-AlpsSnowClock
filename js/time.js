function showLocale(objD)  
{  
    var str,colorhead,colorfoot;  
    var hh = objD.getHours();  
    if (hh < 12) var morning = true;
    if (hh < 10) hh = '0' + hh;

    var mm = objD.getMinutes();  
    if(mm<10) mm = '0' + mm;  

    var ww = objD.getDay();  
    if  ( ww==0 )  colorhead="<font color=\"white\">";  
    if  ( ww > 0 && ww < 7 )  colorhead="<font color=\"white\">";  
    if  (ww==1)  ww="Montag";  
    if  (ww==2)  ww="Dienstag";  
    if  (ww==3)  ww="Mittwoch";  
    if  (ww==4)  ww="Donnerstag";  
    if  (ww==5)  ww="Freitag";  
    if  (ww==6)  ww="Samstag";
    if  (ww==0)  ww="Sonntag";  
        colorfoot="</font>"  
    str = colorhead + hh + ":"  + mm + "<br>" + ww  + colorfoot;  
    return(str);  
};  
function tick()  
{  
    var today;  
    today = new Date();  
    document.getElementById("localtime").innerHTML = showLocale(today);  
    window.setTimeout("tick()", 1000);  
};  
tick();  