var start=0,end=10,incerment=1;
start = parseInt(prompt("enter start"));
end = parseInt(prompt("enter end"));
incerment = parseInt(prompt("enter incerement"));

for(i=start;i>end;i-=incerment){
        document.write(`<p>${i} hello world</p>`);
}