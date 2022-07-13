function hw2_3()
{
    let a = prompt('Введите значение А:');
    let b = prompt('Введите значение B:');

    if (a >= b){
        document.write('Введенные значения не удовлетворяют условию A ('+a+') &#60; B ('+b+')<br>')
    }
    else
    {
        let sum=x=Number(a);
        let y=Number(b);
        for(; x<y; sum+=++x);

        /*do{
            sum+=++x;
        }
        while (x != y);*/

        document.write(sum+'<hr>');

        // нечетные значения:
        document.write('Нечетные:');
        x=Number(a);
        while (x < b) 
        {
        x++;
        if (x % 2) document.write(x + "<br>");
        }
    }
}