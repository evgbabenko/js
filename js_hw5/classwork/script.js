/* создаем объект*/

let wallet =
{
    username: 'Иван Печкин',
    bitcoin:
    {
        valname: 'Bitcoin',
        vallogo: '<img src="./img/bitcoin.png" alt="bitcoin">',
        cash: 3.25,
        rate: 1054
    },
    etherium:
    {
        valname: 'Etherium',
        vallogo: '<img src="./img/ethereum.png" alt="etherium">',
        cash: 12.542,
        rate: 852.41
    },
    stellar:
    {
        valname: 'Stellar',
        vallogo: '<img src="./img/stellar.png" alt="stellar">',
        cash: 61.20120,
        rate: 745.41
    },
    balance: function (arg) {
        document.write(`<div><h3>Сьогодні ти маєш нагоду обміняти ${this[arg].valname}-и</h3></div>`);
        document.write(`<div><h3>за найкрутішим в світі курсом!</h3></div>`);
        document.write('<section>');
        document.write(`<div class="coins"><h3>Ти маєш <p class="cash">${this[arg].cash}</p></h3> <h3>${this[arg].vallogo}</h3></div>`);
        document.write(`<div class="rate"><h3>Курс обміну становить <p class="cash"> ${this[arg].rate} грн </p></h3><h4>за один ${this[arg].valname}</h4></div>`);
        document.write(`<div class="rate"><h3>Якщо сьогодні обміняти, отримаєш<h3><p class="cash">` + Math.round((this[arg].cash * this[arg].rate) * 100) / 100 + ` грн</h3></p></h4>`);
        document.write('<button>Обміняти</button></div>');
        document.write('</section>');
    },
    pre: function () {
        document.write('<header>');
        document.write(`<div><h3>Доброго дня <h2>${this.username}<h2>!</h3></div>`);
        document.write(`<div><h4>Сьогодні: ${Date()}</h4></div>`);
        document.write('</header>');
        document.write('<main>');
        document.write(`<div><h4>Сьогодні твій найкращій день!</h4></div>`);
        document.write(`<div><h4>Ми маємо дуже гарну новину!</h4></div>`);
    },
    after: function () {
        document.write('</main>');
        document.write('<footer>');
        document.write('<div><h4>Обмінний пункт "Краще не буває"</h4></div>')
        document.write('</footer>');
    }
}

wallet.pre();
wallet.balance("bitcoin");
wallet.balance("etherium");
wallet.balance("stellar");
wallet.after();