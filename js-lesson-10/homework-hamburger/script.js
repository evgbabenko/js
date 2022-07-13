window.onload = () => {
    const productPrice = document.querySelector('.price');
    const productCalories = document.querySelector('.calories');
    const productToppings = document.querySelector('.toppings');
    const productGetSize = document.querySelector('.size');
    const productGetStuffing = document.querySelector('.stuffing');
    const checkboxMayo = document.querySelector('#topping_mayo');
    const checkboxSpice = document.querySelector('#topping_spice');
    class Hamburger {
        constructor(size, stuffing) {
            try
            {
                if (!size)
                    throw new HamburgerException('MissingData', 'сделайте вібор');
                if (size.paramType != 'size')
                    throw new HamburgerException('UncorectedParameters', 'неверный выбор');
                
                this.size = size;
                this.stuffing = stuffing;
            }
            catch (err)
            {
                alert(`${err.name}: ${err.message}`);
            }
        }
    }

    class Params {
        constructor(type, name, price, calories) {
            this.paramType = type;
            this.paramName = name;
            this.price = price;
            this.calories = calories;
        }
    }

    Hamburger.SIZE_SMALL = new Params('size', 'Small', 50, 20);
    Hamburger.SIZE_LARGE = new Params('size', 'Large', 100, 40);
    Hamburger.STUFFING_CHEESE = new Params('stuffing', 'Cheese', 10, 20);
    Hamburger.STUFFING_SALAD = new Params('stuffing', 'Salad', 20, 5);
    Hamburger.STUFFING_POTATO = new Params('stuffing', 'Potato', 15, 10);
    Hamburger.TOPPING_MAYO = new Params('topping', 'Mayo', 20, 5);
    Hamburger.TOPPING_SPICE = new Params('topping', 'Spice', 15, 0);
    Hamburger.TOPPING_MAYO.added = false;
    Hamburger.TOPPING_SPICE.added = false;

    Hamburger.prototype.addTopping = function (topping)
    {
        try
        { 
            if (!topping)
            { throw new HamburgerException('MissingData', 'no topping given'); }
            else if (topping.paramType != 'topping')
            { throw new HamburgerException('UncorectedParameters', "invalid topping"); }
            if (topping.added === true) throw new HamburgerException('DuplicateTopping', `Заправка ${topping.paramName} уже добавлена`);
            if (topping.paramName == 'Mayo') {
                this.toppingMayo = topping;
                topping.added = true;
            }
            else
            {
                this.toppingSpice = topping;
                topping.added = true;
            }
        }
        catch (err)
        {
            alert(`${err.name} : ${err.message}`);
        }
    }


    Hamburger.prototype.removeTopping = function (topping) {
    try {
        if (!topping)
        {
            throw new HamburgerException('MissingData', 'no topping given');
        }
        else if (topping.type != 'topping')
        {
            throw new HamburgerException('UncorectedParameters', 'invalid topping');
        }
        
        if (topping.added === false) throw new HamburgerException('MissingTopping', `Заправка ${topping.paramName} не добавлена`);   
        
        if (topping.paramName == 'Mayo')
        {
            delete this.toppingMayo;
            topping.added = false;
        }
        else
        {
            delete this.toppingSpice;
            topping.added = false;
        }
    }
    catch (err)
        {
        alert(`${err.name} : ${err.message}`);
        }
        
    }

    Hamburger.prototype.getToppings = function ()
    {
        var addedTopping = new Array(), i = 0;
        for (let prop in this)
        {
            if (this[prop].added === true)
            {
                addedTopping[i] = this[prop].paramName;
                i++;
            }
        }
        return addedTopping;
    }
    Hamburger.prototype.getSize = function ()
    {
        return this.size.paramName;
    }
    
    Hamburger.prototype.getStuffing = function ()
    {
        return this.stuffing.paramName;
    }

    Hamburger.prototype.calculatePrice = function ()
    {
        let price = 0;
        for (let prop in this)
        {
            if (this[prop].price) price = this[prop].price + price;
        }
        
        productPrice.innerHTML = price;
        return price;
    }

    Hamburger.prototype.calculateCalories = function ()
    {
        let calories = 0;
        for (let prop in this)
        {
            if (this[prop].calories) calories = this[prop].calories + calories;
        }
        productCalories.innerHTML = calories;
        return calories;
    }
    
    class HamburgerException {
        constructor(name, message) {
            this.name = name;
            this.message = message;
        }
    }
    
    const buttonCalculate = document.querySelector('#calculate');
    buttonCalculate.addEventListener('click', (ev) => {
    let inputSize, inputStuffing, hamburgerSize, hamburgerStuffng;
    inputSize = document.querySelectorAll('.burger_size');
    inputSize.forEach((el) => {
        if (el.checked == true) {
            if (el.id == 'size_small') {
                hamburgerSize = Hamburger.SIZE_SMALL
            } else if (el.id == 'size_large') {
                hamburgerSize = Hamburger.SIZE_LARGE
            }
        }
    })
    inputStuffing = document.querySelectorAll('.burger_stuffing');
    inputStuffing.forEach((el) => {
        if (el.checked) {
            switch (el.value) {
                case "cheese": {
                    hamburgerStuffng = Hamburger.STUFFING_CHEESE;
                } break;
                case "salad": {
                    hamburgerStuffng = Hamburger.STUFFING_SALAD;
                } break;
                case "potato": {
                    hamburgerStuffng = Hamburger.STUFFING_POTATO;
                }break;
                default: {
                    Hamburger.STUFFING_empty = new Params('stuffing', '', 0, 0);
                    hamburgerStuffng = Hamburger.STUFFING_empty;
                }
            }
        } else if (!el.checked && hamburgerStuffng == undefined)
        {
            Hamburger.STUFFING_empty = new Params('stuffing', '', 0, 0);
            hamburgerStuffng = Hamburger.STUFFING_empty;            
         }
    })

    let hamburger = new Hamburger(hamburgerSize, hamburgerStuffng);
    Hamburger.TOPPING_MAYO.added = false;
    Hamburger.TOPPING_SPICE.added = false;
    productToppings.innerHTML ='';
    productGetSize.innerHTML ='';
    productGetStuffing.innerHTML ='';
    
    if (checkboxMayo.checked == true && !hamburger.toppingMayo)
        hamburger.addTopping(Hamburger.TOPPING_MAYO);
    

    if (checkboxSpice.checked == true && !hamburger.toppingSpice)
        hamburger.addTopping(Hamburger.TOPPING_SPICE)

    hamburger.calculatePrice();
    hamburger.calculateCalories();

    const buttonAllTopping = document.querySelector('#all_toppings')
    buttonAllTopping.addEventListener('click', () =>{
        productToppings.innerHTML = hamburger.getToppings().join(", ");
    })

    const buttonGetSize = document.querySelector('#get_size');
    buttonGetSize.addEventListener('click', () => {
        productGetSize.innerHTML = hamburger.getSize();
    })
    
    const buttonGetStuffing = document.querySelector('#get_stuffing');
    buttonGetStuffing.addEventListener('click', () => {
        productGetStuffing.innerHTML = hamburger.getStuffing();
    })

})
}
