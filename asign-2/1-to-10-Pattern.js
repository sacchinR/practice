var i=1,j,k=1;
var str="";
for(i=1;i<=4;i++){
    for(j=1;j<=i;j++){
        str=str+(k+" ");
        k++;
    }
    str=str+"\n";
}
console.log(str);