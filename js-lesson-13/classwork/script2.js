window.addEventListener("DOMContentLoaded", () => {
    
    const link = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    const head = document.querySelector('#head');
    const date = new Date();
    const hw = document.querySelector('#hw13');
    const monthes = new Array('Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня');
    head.innerHTML = `Курс обміну валют на ${date.getDate()} ${monthes[date.getMonth()]} ${date.getFullYear()}`;
    let counter = 0;
    try {
        fetch(link)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                data.forEach(row => {
                    const rates = document.querySelector('#rates');
                    const newRow = document.createElement('tr');
                    newRow.setAttribute('class', `row${(counter == 0) ? counter++ : counter--}`);
                    rates.appendChild(newRow);
                    const valName = document.createElement('td');
                    valName.innerHTML = `${row.txt}`;
                    const valSign = document.createElement('td');
                    valSign.innerHTML = `${row.cc}`;
                    const valRate = document.createElement('td');
                    valRate.innerHTML = `${row.rate}`;
                    newRow.appendChild(valName);
                    newRow.appendChild(valSign);
                    newRow.appendChild(valRate);
                });
            })
    } catch (error) {
        console.log(error);
    }   
    hw.addEventListener('click', () => {
        const rates = document.querySelector('#rates');
        while (rates.firstChild) {
            rates.removeChild(rates.firstChild);
        }
        try {
            fetch(link)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                data.forEach(row => {
                    if (row.rate > 25) {
                        const rates = document.querySelector('#rates');
                        const newRow = document.createElement('tr');
                        newRow.setAttribute('class', `row${(counter == 0) ? counter++ : counter--}`);
                        rates.appendChild(newRow);
                        const valName = document.createElement('td');
                        valName.innerHTML = `${row.txt}`;
                        const valSign = document.createElement('td');
                        valSign.innerHTML = `${row.cc}`;
                        const valRate = document.createElement('td');
                        valRate.innerHTML = `${row.rate}`;
                        newRow.appendChild(valName);
                        newRow.appendChild(valSign);
                        newRow.appendChild(valRate);
                    }
                });
            });
        } catch (error) {
            console.log(error);
        }
    })
})