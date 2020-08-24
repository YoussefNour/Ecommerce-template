var name;
name = prompt("what's your name");
if(name=="ahmed")
{
    alert("welcome "+name);
    alert("your age is 20");
}else{
    var age;
    age =prompt("what's your age");
    alert("hello ".concat(name)+" your age is ".concat(age));
}