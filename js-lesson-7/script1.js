        const words = [
                "мистер",
                "танк",
                "профессионал",
                "майнкрафт",
                "слово",
                "ноутбук",
                "мышь",
                "школа",
                "друзья",
                "телефон",
                "адаптер",
                "тетрадь",
                "ручка",
                "калач",
                "книга",
                "черчение",
                "дневник",
                "часы",
                "наушники",
                "провод",
                "ластик",
                "линейка",
                "циркуль",
                "учебник",
                "пират",
                "учительница",
                "команда",
                "автобус",
                "подарок",
                "радуга",
                "стадион",
                "щенок",
                "луна",
                "сокровище",
                "заяц",
                "торт",
                "фломастер",
                "рыбак",
                "парк",
                "ромашка",
                "путешествие",
                "бумага",
                "аист",
                "щука",
                "писатель",
                "математика",
                "счёт",
                "меню",
                "успех",
                "стол",
                "велосипед",
                "пирамида",
                "число",
            ];
        let userName, turnCount;
        let cWord = pickWord(words);
        let secret = cWord.split('');
        let answerArray = [];
        let finish;
        function greeting(userName, turnCount, cWord) {
            document.getElementById('greeting').innerHTML = `Привет игрок ${userName}!<br> "Виселица"-игра на угадывание слов.`;
            counter(turnCount);
        }
        function endgame()
        {
            document.getElementById('send').setAttribute('disabled', 'disabled');
            document.getElementById('letter').setAttribute('disabled', 'disabled');
            document.getElementById('answer').innerHTML = `Загаданное слово: ${cWord}`;
        }
        function counter(turnCount)
        {
            document.getElementById('counter').innerHTML = `У тебя ${turnCount} попыток.`;
            if (turnCount == 0 && !compare()) {
                alert('Не осталось попыток. Ты проиграл :(');
                endgame();
            }
        }
        function pickWord(words) 
        {
            return words[Math.floor(Math.random() * words.length)];
        }
        function compare ()
        {
            for (i=0; i<answerArray.length; i++)
            {               
               finish = (answerArray[i]===secret[i]);
               if (!finish) break;
            }
            return finish;
        }
        function check()
        {
            let letter = document.getElementById('letter').value;
            let c;
            if (letter.length <1)
            {
                alert('Пустое значение');
            }
            else 
            {
                document.getElementById('letter').value = '';
                
                for (i=0; i<secret.length; i++)
                {
                    if(secret[i]==letter)
                    {
                        answerArray[i] = letter;
                        c = true;
                    }
                }          
            }
            ((!c)? turnCount--:'');    
            counter(turnCount);     
            if (compare())
            {   
                endgame(); 
                alert(`Поздравляем! Ты выиграл! \n Загаданное слово ${cWord}`);
            }
            document.getElementById('secret').innerHTML = answerArray.join(' ');
        }
        /*Начало игры*/
        function start()
        {
        do
        {
         userName = prompt('Привет! Введи свое имя: ');
        }
        while (userName.length < 1);
        turnCount = Math.round(cWord.length+cWord.length/2);

        /*Запуск игры*/
        greeting(userName, turnCount);
        for (let i = 0; i < cWord.length; i++) 
        {
            answerArray[i] = "_";
        };
        document.getElementById('secret').innerHTML = answerArray.join(' ');
    }