function hw2_4()
{
    let x = prompt("Введите значение x:");
    let y = prompt("Введите значение y:");

    document.write('<br>Прямоугольник:<br>');

    for (z=0; z<y; z++)
    {
        for (i=0; i<x ;i++)
        {
            if(i==0 || z==0 || i==(x-1) || z==(y-1))
            {
            document.write("*&nbsp;");
            }
            else
            {
                document.write("&nbsp;&nbsp;&nbsp;");
            }
        }
            document.write("<br>");
    }
    
    document.write("<hr>"); 

    document.write('<br>Прямоугольный треугольник:<br>');
        
    for (z=0; z<x; z++)
    {
        for (i=0; i<x ;i++)
        {
            if(i==0 || z==(x-1) || i==z || z>i)
            {
            document.write("*");
            }
            else
            {
                document.write("&nbsp;");
            }
        }
            document.write("<br>");
    }

    document.write("<hr>"); 

    document.write('<br>Равносторонний:<br>');
    i=z=0;
    var max = 10;
    var space = "",
    star = "";
    while (i < max) {
      space = "";
      star = "";
      for (j = 0; j < max - i; j++) space += "&nbsp&nbsp";
      for (j = 0; j < 2 * i + 1; j++) star += "*";
      document.write(space + star +"</br>");
      i++;
    }

    document.write("<hr>"); 

    document.write('<br>Ромб:<br>');

    i=z=0;
    var max = 6;
    var space = "",
    star = "";
    while (i < max) {
      space = "";
      star = "";
      for (j = 0; j < max - i; j++) space += "&nbsp&nbsp";
      for (j = 0; j < 2 * i + 1; j++) star += "*";
      document.write(space + star +"</br>");
      i++;
    }
    i=z=0;
    var max = 5;
    var space = "",
    star = "";
    while (i < max) {
      space = "";
      star = "";
      for (j = 6; j >= max - i; j--) space += "&nbsp&nbsp";
      for (j = 8; j > 2 * i -1 ; j--) star += "*";
      document.write(space + star +"</br>");
      i++;
    }
}