function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

window.onload = () => {
    const main = document.querySelector("main");
    const btn = document.createElement("button");
    btn.innerHTML = 'Создать круги?';
    const radius = document.createElement("input");
    radius.placeholder = 'Введите радиус';
    radius.type = 'number';
    const btnCreate = document.createElement("button");
    btnCreate.innerHTML = 'Рисовать';
    btnCreate.id = "create";
    main.appendChild(btn);
    canvas = document.createElement("div");
    canvas.id = 'maincanvas';
    circle = document.querySelector(".circle");    

    btn.addEventListener('click', function () {
        main.appendChild(radius);
        main.appendChild(btnCreate);
    }, false);
    
    btnCreate.addEventListener('click', function () {
        rad = radius.value;
        main.appendChild(canvas);
        for (i = 0; i < 100; i++)
        {
        let circle = document.createElement("div");
            circle.setAttribute('style', '.circle');
            circle.style.width = rad + 'px';
            circle.style.height = rad + 'px';
            canvas.append(circle)
            circle.className = 'circle';
            circle.style.background = getRandomColor();
        }
        radius.remove();
        btnCreate.remove();
        btn.remove();
    }
    )

    canvas.addEventListener('click', (event)=>{
        if (event.target.className == 'circle')
        {
            event.target.remove();
        }
    },true)
}