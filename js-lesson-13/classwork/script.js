window.addEventListener("DOMContentLoaded", () => {
    const head = document.querySelector('#head');
    const date = new Date();
    const hw = document.querySelector('#hw13');
    const monthes = new Array('Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня');
    head.innerHTML = `Курс обміну валют на ${date.getDate()} ${monthes[date.getMonth()]} ${date.getFullYear()}`;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
    var arr = new Array();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            arr = JSON.parse(xhr.responseText);
            console.dir(arr);
            showRates(arr);
        }
    }
    let showRates = (arr) => {
        error = document.querySelector('#errorbox');
        let counter = 0;
        if (arr.length == 0) {
            error.innerHTML = 'Немає даних, які відповідають умові.';
        } else {
            arr.forEach(row => {
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
            })
        }
    }

    xhr.send();
    hw.addEventListener('click', () => {
        const rates = document.querySelector('#rates');
        while (rates.firstChild) {
            rates.removeChild(rates.firstChild);
        }
        let arrSorted = arr.filter(i => i.rate >= 20).sort((a, b) => a.rate - b.rate);
        showRates(arrSorted);
    }
    )
})