let x=6, y=14, z=4;
let result=0;``

document.write("Значения переменных для всех выражений : <code>x = "+x+", y = "+y+", z = "+z+"</code><br><br>");

result = x+=y-x++*z;
document.write("<p>Результат выполнения выражения x += y - x++ * z , ответ = " + result + "<br>");
document.write("Как считает js: 6 + 14 - 6 * 4 = -4</p>");

x=6, y=14, z=4;
result= z=--x-y*5;
document.write("<p>Результат выполнения выражения z=--x-y*5 , ответ = " + result + "<br>");
document.write("Как считает js: (6-1) - 14 * 5 = -65</p>");

x=6, y=14, z=4;
result = y/=x+5%z;
document.write("<p>Результат выполнения выражения y/=x+5%z , ответ = " + result + "<br>");
document.write("Как считает js: y = y /(x + |5/z|) = 2</p>");

x=6, y=14, z=4;
result = z-x+++y*5;
document.write("<p>Результат выполнения выражения z-x+++y*5 , ответ = " + result + "<br>");
document.write("Как считает js: z-x++  +y * 5 = 68   / (4-6)+70</p>");

x=6, y=14, z=4;
result = x=y-x++*z
document.write("<p>Результат выполнения выражения x=y-x++*z , ответ = " + result + "<br>");
document.write("Как считает js: x= 14- (6*4) = -10</p>");
