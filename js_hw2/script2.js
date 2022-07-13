function hw2_2()
{
    /*
    var message;

    if(login=='Вася'){
        message='Привет';
    } else if (login=='Директор'){
        message='Здравстуйте';
    } else if (login==''){
        message='Нет логина';
    } else {
        message='п';
    }
    */ 
   let login=prompt("Введите логин:","Вася");
   let message = ((login=='Вася')? 'Привет' : ((login=='Директор')? 'Здравстуйте' : ((login=='')? 'Нет логина' : '')));
   document.write(message+'<hr>');
}
