function cw1()
{
    let x = prompt("Введите значение x:");
    let y = prompt("Введите значение y:");

    /*цикл FOR*/
    document.write('<code>');
    document.write('let x = prompt("Введите значение x:");<br>');
    document.write('let y = prompt("Введите значение y:");<br>');
    document.write('for (z=0;z&#60;y;z++){<br>');
    document.write('for (i=0;i&#60;x;i++){<br>');
    document.write('document.write("&#10030;");<br>');
    document.write('}<br>');
    document.write('document.write("&#60;br&#62;");<br>');
    document.write('}<br>');
    document.write('</code>');

    for (z=0;z<y;z++){
    for (i=0;i<x;i++){
        document.write("&#10030;");
    }
        document.write("<br>");
    }

    document.write("<hr>");

    z=i=0;
    /*цикл DO-WHILE*/
    document.write('<code>');
    document.write('    do{<br>');
    document.write('    do{<br>');
    document.write('        document.write("&#10030;");<br>');
    document.write('        i++;<br>');
    document.write('    }<br>');
    document.write('    while(i&#60x);<br>');
    document.write('    document.write("&#60;br&#62;");<br>');
    document.write('    z++;<br>');
    document.write('    i=0;<br>');
    document.write('}<br>');
    document.write('while(z&#60y);<br>');
    document.write('</code>');
    do{
        do{
            document.write("&#10030;");
            i++;
        }
        while(i<x);
        document.write("<br>");
        z++;
        i=0;
    }
    while(z<y);

    document.write("<hr>");    


    z=i=0;
    /*WHILE*/
    document.write('<code>');
    document.write('while(z&#60y)<br>');
    document.write('{<br>');
    document.write('    while(i&#60x){<br>');
    document.write('        document.write("&#10030;");<br>');
    document.write('        i++;<br>');
    document.write('    }<br>');
    document.write('    document.write("&#60;br&#62;");<br>');
    document.write('    z++;<br>');
    document.write('    i=0;<br>');    
    document.write('}<br>');
    document.write('</code>');

    while(z<y)
    {
        while(i<x){
            document.write("&#10030;");
            i++;
        }
        document.write("<br>");
        z++;
        i=0;       
    }
}


function cw2()
{
    let login=prompt("Введите логин (Админ/Admin):","Админ");
    if (login=="Admin" || login=="Админ" || login=="admin" || login=="админ"){
        let pswd=prompt("Введите пароль:","Черный Властелин");
        if (pswd=="Черный Властелин"){
        document.write("Login: "+login+"<br>");
        document.write("Password: "+pswd+"<br>");
        document.write("Вход разрешен!");
        }
        else{
            document.write("Вход отменен");
            }
    }
    else{
        document.write("Вход отменен");
        }
}
