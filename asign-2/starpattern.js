var i,j,space=4,star=1;
var str="";
for(i=0;i<4;i++){
    for(j=1;j<=space;j++){
        str=str+" ";
    }
    for(j=1;j<=star;j++){
        str=str+"*";
    }
    star=star+2;
    str=str+"\n";
    space--;
}
console.log(str);