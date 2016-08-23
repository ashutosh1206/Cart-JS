function clicked(){
   
    var user = document.getElementById('username');
    var pass = document.getElementById('password');
   
    var employees = [
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter","lastName": "Jones"}
];
var c=0;
    for(i=0;i<3;i++)
{
    if(user.value == employees[i].firstName && pass.value == employees[i].lastName)
    {
c=c+1;
        window.open("nav.html");
break;
    }
}
    if(c==0)
{
alert("incorrect password or username")
}
}
