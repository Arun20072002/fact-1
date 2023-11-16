document.write("Find the factorial of 7"+"<br>")
document.write("-----------------------"+"<br>")

var a=parseInt(prompt("Enter the number"));
for(let i=1;i<=7;i++){
    a=i*a;
}
document.write(a+"<br>")
