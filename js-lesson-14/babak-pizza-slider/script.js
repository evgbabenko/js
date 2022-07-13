
window.addEventListener("DOMContentLoaded", () => {
//slider
    let $img = $("#slider img"),
        i = 1;
    isSlide = false;

  $(`#slider img:not(:nth-child(1))`).css({left:`${$("#slider").css("width")}`})
  // Прокрутка вперед
    function getNextImg() {
        if (!isSlide) {
            isSlide = true;
            let $width = $("#slider").css("width");
            $(`#slider img:not(:nth-child(${i}))`).css({ left: `${$width}` });
            $(`#slider img:nth-child(${i})`).animate({ left: `-${$width}` }, 800);
            if (i === $img.length) {
                i = 1;
                $(`#slider img:nth-child(1)`).animate({ left: "0" }, 800, () => { isSlide = false; });
            }
            else {
                $(`#slider img:nth-child(${i + 1})`).animate({ left: "0" }, 800, () => { isSlide = false; });
                i++
            };
        }
    }
  // Прокрутка назад
    function getPrevImg() {
        if (!isSlide) {
            isSlide = true;
            let $width = $("#slider").css("width");
            $(`#slider img:not(:nth-child(${i}))`).css({ left: `-${$width}` })
            $(`#slider img:nth-child(${i})`).animate({ left: `${$width}` }, 800);
            if (i === 1) {
                i = $img.length;
                $(`#slider img:nth-child(3)`).animate({ left: "0" }, 800, () => { isSlide = false; });
            }
            else {
                $(`#slider img:nth-child(${i - 1})`).animate({ left: "0" }, 800, () => { isSlide = false; });
                i--
            };
        }
    }
  // Привязка обработчиков событий
    $("#prev").click(getPrevImg);
    $("#next").click(getNextImg);
  // Интервал пролистывания
    setInterval(getNextImg, 15000);

//переменные и константы
     
    const sausages = [];
    const toppings = [];
    let pizzaSizeBtn = document.querySelector('#p-size');
    let sizePizza = document.querySelector('#dough');
    let dough = document.querySelector('#dough');
    const saucesBox = document.querySelector('#sauces');
    const meatsBox = document.querySelector('#meats');
    const fishsBox = document.querySelector('#fishs');
    const vegsBox = document.querySelector('#vegs');
    const otherBox = document.querySelector('#other');
    const cheesesBox = document.querySelector('#cheeses');
    const sizeBox = document.querySelector('#p-size');
    let delBtns = document.querySelectorAll('.delbutton');
    const priceInfo = document.querySelector('#pizzaprice');
    const saucesInfo = document.querySelector('#pizzasauces');
    const fillingsInfo = document.querySelector('#pizzafillings');

    const constructor = document.querySelector('#constructor');
    /*const sizeDiv = document.querySelector('#size');*/
    const errors = {
        checkSize: 'Виберіть будь ласка розмір',
        noFilling: 'Будь ласка, виберіть як найменьш один наповнювач',
        noSauce: 'Будь ласка, виберіть як найменьш один соус',
        noCheese: 'Будь ласка, виберіть як найменьш один сир',
        noSelect: 'Нвчого не вибрано'
    };

    class Ingredients {
        constructor(name, type, price, qty, picture) {
            this.name = name;
            this.price = price;
            this.type = type;
            this.qty = qty;
            this.picture = picture;
            this.added = false;
        }
    }
    class Pizza {
        constructor() {
            const keys = Pizza;
            for (const property in keys) {
                this[property] = Pizza[property];
            }   
        }
    };

//Sause
    Pizza.Size_Small = new Ingredients('Маленька - 25см', 'size', 25, 0, './img/pizza/dough.png');
    Pizza.Size_Medium = new Ingredients('Середня - 30см', 'size', 30, 0, './img/pizza/dough.png');
    Pizza.Size_Big = new Ingredients('Велика - 40см', 'size', 40, 0, './img/pizza/dough.png');
    Pizza.Size_SuperBig = new Ingredients('Супер Велика - 90см', 'size', 100, 0, './img/pizza/dough.png');
    

//Sause
    Pizza.Sauce_BBQ = new Ingredients('Соус BBQ', 'sauce', 15, 0, './img/pizza/sauce/bbq.png');
    Pizza.Sauce_Cesar = new Ingredients('Соус Цезар', 'sauce', 25, 0, './img/pizza/sauce/cesar.png');
    Pizza.Sauce_Cheessee = new Ingredients('Сирний соус', 'sauce', 15, 0, './img/pizza/sauce/cheessee.png');
    Pizza.Sauce_pizzaSauce = new Ingredients('Пицца-Соус', 'sauce', 5, 0, './img/pizza/sauce/pizza-souse.png');
    Pizza.Sauce_TarTar = new Ingredients('Соус Тар-Тар', 'sauce', 20, 0, './img/pizza/sauce/tar-tar.png');

//Meat
    Pizza.Filling_Beacone = new Ingredients('Бекон', 'meat', 15, 0, './img/pizza/meat/beacone.png');
    Pizza.Filling_Beef = new Ingredients('Яловичина', 'meat', 20, 0, './img/pizza/meat/beef.png');
    Pizza.Filling_Chicken = new Ingredients('Курка', 'meat', 10, 0, './img/pizza/meat/chicken.png');
    Pizza.Filling_Ham = new Ingredients('Хамон', 'meat', 30, 0, './img/pizza/meat/ham.png');
    Pizza.Filling_HuttungSausage = new Ingredients('Мисливські ковбаски', 'meat', 20, 0, './img/pizza/meat/hunting-sausages.png');
    Pizza.Filling_Peperroni = new Ingredients('Пеперроні', 'meat', 20, 0, './img/pizza/meat/peperroni.png');    

//Fish
    Pizza.Filling_Mussles = new Ingredients('Мідії', 'fish', 20, 0, './img/pizza/fish/mussels.png');
    Pizza.Filling_Salmon = new Ingredients('Лосось', 'fish', 40, 0, './img/pizza/fish/salmon.png');
    Pizza.Filling_Seafood = new Ingredients('Морепродукти', 'fish', 35, 0, './img/pizza/fish/seafood.png');
    Pizza.Filling_Shrimp = new Ingredients('Креветки', 'fish', 35, 0, './img/pizza/fish/shrimp.png');
    Pizza.Filling_Squid = new Ingredients('Кальмар', 'fish', 20, 0, './img/pizza/fish/squid.png');

//Vegs
    Pizza.Filling_Cherry = new Ingredients('Томати Черрі', 'veg', 25, 0, './img/pizza/veg/cherry.png');
    Pizza.Filling_Halapenio = new Ingredients('Перчик Халапеньо', 'veg', 40, 0, './img/pizza/veg/halapenio.png');
    Pizza.Filling_Onion = new Ingredients('Маринована цибуля', 'veg', 15, 0, './img/pizza/veg/onion.png');
    Pizza.Filling_Pepper = new Ingredients('Перець', 'fush', 20, 0, './img/pizza/veg/pepper.png');
    Pizza.Filling_Peckle = new Ingredients('Мариновані огірки', 'veg', 20, 0, './img/pizza/veg/pickle.png');
    Pizza.Filling_Tomato = new Ingredients('Томати', 'veg', 10, 0, './img/pizza/veg/tomato.png');

//Other
    Pizza.Topping_Champions = new Ingredients('Печериці', 'other', 25, 0, './img/pizza/other/champignons.png');
    Pizza.Topping_Corn = new Ingredients('Кукурудза', 'other', 10, 0, './img/pizza/other/corn.png');
    Pizza.Topping_Olives = new Ingredients('Оливки', 'other', 15, 0, './img/pizza/other/olives.png');
    Pizza.Topping_Pineapple = new Ingredients('Ананас', 'other', 20, 0, './img/pizza/other/pineapple.png');

//Cheese
    Pizza.Cheese_DorBlue = new Ingredients('Сир Дор-Блю', 'cheese', 50, 0, './img/pizza/cheese/dor-blue.png');
    Pizza.Cheese_Gauda = new Ingredients('Сир Гауда', 'cheese', 25, 0, './img/pizza/cheese/gauda.png');
    Pizza.Cheese_Mazarella = new Ingredients('Мацарелла', 'cheese', 15, 0, './img/pizza/cheese/mazarella.png');
    Pizza.Cheese_Parmezan = new Ingredients('Пармезан', 'cheese', 30, 0, './img/pizza/cheese/parmezan.png');


    Pizza.prototype.initConstructor = function()
    {
        const keys = Pizza;
        for (const property in keys)
        {
            const addElement = document.createElement("div");
            const addImage = document.createElement("img");
            const addName = document.createElement("div");
            const addPrice = document.createElement("div");
            
            switch (Pizza[property].type) {
                case 'sauce': {
                    addElement.setAttribute('class', 'ingredients');
                    addElement.setAttribute('id', property);
                    saucesBox.appendChild(addElement);
                } break;
                case 'meat': {
                    addElement.setAttribute('class', 'ingredients');
                    addElement.setAttribute('id', property);
                    meatsBox.appendChild(addElement);
                } break;
                case 'fish': {
                    addElement.setAttribute('class', 'ingredients');
                    addElement.setAttribute('id', property);
                    fishsBox.appendChild(addElement);
                } break;
                case 'veg': {
                    addElement.setAttribute('class', 'ingredients');
                    addElement.setAttribute('id', property);
                    vegsBox.appendChild(addElement);
                } break;
                case 'other': {
                    addElement.setAttribute('class', 'ingredients');
                    addElement.setAttribute('id', property);
                    otherBox.appendChild(addElement);
                } break;
                case 'cheese': {
                    addElement.setAttribute('class', 'ingredients');
                    addElement.setAttribute('id', property);
                    cheesesBox.appendChild(addElement);
                } break;
                case 'size': {
                    let addSizeButton = document.createElement('input');
                    addSizeButton.setAttribute('type', 'radio');
                    addSizeButton.setAttribute('name', 'pizza-size');
                    addSizeButton.setAttribute('class', 'btn-check');
                    addSizeButton.setAttribute('id', property);
                    addSizeButton.setAttribute('value', property);
                    sizeBox.appendChild(addSizeButton);
                    let addSizeButtonDescription = document.createElement('label');
                    addSizeButtonDescription.setAttribute('class', 'btn btn-outline-primary sizebutton');
                    addSizeButtonDescription.setAttribute('for', property);
                    sizeBox.appendChild(addSizeButtonDescription);
                    addSizeButtonDescription.innerHTML = Pizza[property].name;
                } break;
            }
                    addImage.setAttribute('src', `${Pizza[property].picture}`);
                    addImage.setAttribute('alt', `${Pizza[property].name}`);
                    addImage.setAttribute('title', `${Pizza[property].name}`);
                    addImage.setAttribute('id', property);
                    addImage.setAttribute('class', 'ingredients-img img-fluid');
                    addElement.appendChild(addImage);

                    addName.setAttribute('class', 'description');
                    addElement.appendChild(addName);
                    addName.innerHTML = Pizza[property].name;
                    
                    addPrice.setAttribute('class', 'price');
                    addElement.appendChild(addPrice);
                    addPrice.innerHTML = Pizza[property].price;

        }
    }

    Pizza.prototype.addItem = function (item) {
        if (item !== undefined) {
            for (const property in this) {
                if (this[item].type == 'size' && this[property].type == 'size') {
                    (property == item) ? this[property].qty = 1 : this[property].qty = 0;
                    (property == item) ? this[property].added = true : this[property].added = false;
                }
                else if (property == item) {
                    
                    this[property].added = true;
                    if (this[property].qty == 0 && this[property].type !== 'size' && this[property].added == true) {
                        const imageBox = document.querySelector(`#${this[property].type}img`);
                        const newLayer = document.createElement("img");
                        newLayer.setAttribute('src', `${Pizza[property].picture}`);
                        newLayer.setAttribute('alt', `${Pizza[property].name}`);
                        newLayer.setAttribute('title', `${Pizza[property].name}`);
                        newLayer.setAttribute('id', `${property}img`);
                        newLayer.setAttribute('class', 'img-fluid');
                        imageBox.appendChild(newLayer);
                    }

                    this[property].qty++;
                    
                    if (this[property].qty == 1 && this[property].type !== 'size' && this[property].added == true) {
                        const badge = document.querySelector('#' + property);
                        const newbadge = document.createElement("span");
                        newbadge.setAttribute('class', 'position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-primary');
                        newbadge.setAttribute('id',`${property}bagde`)
                        badge.append(newbadge);
                        newbadge.innerHTML = this[property].qty;
                        
                    }
                    else if (this[property].qty > 1) {

                       const badge = document.querySelector(`#${property}bagde`);
                        badge.innerHTML = this[property].qty;
                    }
                }
            }
        }
    };

    Pizza.prototype.calculate = function () {
        let totalPrice = 0;
        for (const property in this) {
            if (this[property].added) {
                totalPrice += this[property].price * this[property].qty;
            }
        }
        return totalPrice;
    };
        
    Pizza.prototype.ifExist = function () {
        let ifexist = false;
        for (const property in this) {
            if (this[property].added || ifexist)
            {
                ifexist = true;
            }
        }
        return ifexist;
    };

    Pizza.prototype.showInfo = function () {
        saucesInfo.innerHTML = '';
        fillingsInfo.innerHTML = '';
        let count = 0;
        for (const property in this)
        {
            if (this[property].added) {
                
                switch (this[property].type) {
                    case 'sauce': {
                        const addElement = document.createElement("div");
                        addElement.innerHTML = `${this[property].name} x ${this[property].qty} = ${this[property].price * this[property].qty}`
                        saucesInfo.appendChild(addElement);
                        const delButton = document.createElement('span');
                        delButton.setAttribute('id', `${count}-${property}`);
                        delButton.setAttribute('class', 'badge bg-secondary ms-3 delbutton');
                        addElement.appendChild(delButton);
                        delButton.innerHTML = "-";
                    } break;
                    case 'meat': 
                    case 'fish': 
                    case 'veg': 
                    case 'other': 
                    case 'cheese': {
                        const addElement = document.createElement("div");
                        addElement.setAttribute('id', count + property);
                        addElement.innerHTML = `${this[property].name} x ${this[property].qty} = ${this[property].price * this[property].qty}`
                        fillingsInfo.appendChild(addElement);
                        const delButton = document.createElement('span');
                        delButton.setAttribute('id', `${count}-${property}`);
                        delButton.setAttribute('class', 'badge bg-secondary ms-3 delbutton');
                        addElement.appendChild(delButton);
                        delButton.innerHTML = "-";
                    } break;
                }
                count++;
            }
        }
        delBtns = document.querySelectorAll('.delbutton');
    }

    Pizza.prototype.delItem = function (item) {
        if (item !== undefined) {
            for (const property in this) {
                if (property == item) {
                    this[property].qty--;
                    if (this[property].qty == 0) {
                        this[property].added = false;
                        const delImg = document.querySelector(`#${property}img`);
                        delImg.remove();
                        const badge = document.querySelector(`#${property}bagde`);
                        badge.remove();
                    } else {
                        const badge = document.querySelector(`#${property}bagde`);
                        badge.innerHTML = this[property].qty;
                    }

                }
            }
        }
        init();
    }
  
    pizzaSizeBtn.addEventListener('click', (event) => {
        let value = event.target.value;
        switch (value) {
            case 'Size_Small':
                {
                    sizePizza.style.transform = 'scale(0.7)';
                    newPizza.addItem(value);
                } break;
            case 'Size_Medium':
                {
                    sizePizza.style.transform = 'scale(0.85)';
                    newPizza.addItem(value);
                } break;
            case 'Size_Big':
            default:
                {
                    sizePizza.style.transform = 'scale(1)';
                    newPizza.addItem(value);
                } break;
        }

        init();
    });

    saucesInfo.addEventListener('click', (event) => {
        if ((event.target.className).includes('delbutton'))
        {
            let id = event.target.id;
            id = id.replace(/[0-9]-/g, '');
            newPizza.delItem(id);
        }
    }, true)
    
    fillingsInfo.addEventListener('click', (event) => {
        if ((event.target.className).includes('delbutton'))
        {
            let id = event.target.id;
            id = id.replace(/[0-9]-/g, '');
            newPizza.delItem(id);
        }
    },true)

    function init() {
        /*
            const priceInfo = document.querySelector('#price');
            const saucesInfo = document.querySelector('#price');
            const fillingsInfo = document.querySelector('#fillings');
        */
        priceInfo.innerHTML = newPizza.calculate();   
        newPizza.showInfo();
    };
    let newPizza = new Pizza;
    newPizza.initConstructor();
    init();
    //массив елементов, которые будем перемещать на корж пиццы
    let products = document.querySelectorAll(".ingredients");

   //перебираем, вычисляем елемент при зажатии
   products.forEach(e => {
      e.addEventListener('dragstart', function (dragItem) {
         //настраиваем информацию, которую передадим в перемещаемый елемент
          dragItem.dataTransfer.setData("dragItem", dragItem.target.id);         
      }, false)
   });

    dough.addEventListener("dragover", event => {
    // prevent default to allow drop
    event.preventDefault();
    });    
    
    dough.addEventListener('drop', dropItem => {
        //убираем лишние маневры по умолчанию
        if (dropItem.prdropItemDefault) dropItem.prdropItemDefault();
        if (dropItem.stopPropagation) dropItem.stopPropagation();
        dropItem.preventDefault();
        //принимаем информацию, которую настраивали выше
        let drpItem = dropItem.dataTransfer.getData("dragItem");
        newPizza.addItem(drpItem);
        init();
    }, false);



    const random = (min, max) => {
        const rand = min + Math.random() * (max - min + 1);
        return Math.floor(rand);
    }
    const floatWindow = document.querySelector('.floatwindow');
    floatWindow.style.left = `${random(0, 90)}%`;
    floatWindow.style.top = `${random(0, 90)}%`;
    
    floatWindow.addEventListener('mouseenter', () => {
        floatWindow.style.left = `${random(0, 90)}%`;
        floatWindow.style.top = `${random(0, 90)}%`;
    });
    floatWindow.addEventListener('click', () => {
        alert('Тебе повезло! Сегодня скидка от ЗСУ!');
    });

    function email(constructor) {
        let message = 'New Pizza order\n\r';
        let totalPrice = 0;
        for (const property in constructor) {
            if (constructor[property].added) {
                message += `${constructor[property].name} - ${constructor[property].qty} * ${constructor[property].price} = ${constructor[property].qty * constructor[property].price}\n\r`;
                totalPrice += constructor[property].price * constructor[property].qty;
            }
            
        }
        message += `Total price ${totalPrice}`
        return message;
    }

    function sendEmail(constructor) {
      Email.send({
        Host: "185.53.160.218",
        Username: "test@m4u-radio.net",
        Password: "test060309",
        To: 'evg.mishka@gmail.com',
        From: `${document.querySelector("#inputEmail").value}`,
        Subject: "New Pizza order",
        Body: email(constructor),
      })
        .then(function (message) {
          alert("Замовлення успішно відправлено!")
        });
    }

  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity() || !newPizza.ifExist()) {
          event.preventDefault()
          event.stopPropagation()
          if (!newPizza.ifExist()) { alert(errors.noSelect) };
        }
      else {
          sendEmail(newPizza);
        }

      form.classList.add('was-validated')
    }, false)
  })

})
