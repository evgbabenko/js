function hw2_1()
{
    /*
    if (a+b < 4){
        result='malo';
    } else {
        result='mnogo';
    }
    */
    let a = prompt("Введите значение a:");
    let b = prompt("Введите значение b:");
    document.write((a+b < 4)? 'malo' : 'mnogo');
    document.write("<hr>");
}