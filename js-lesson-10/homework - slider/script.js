window.onload = () => {
    const prevBtn = document.getElementById('prev-button');
    const nextBtn = document.getElementById('next-button');
    let slider = document.getElementById('slider');
    const backgrnds = document.querySelectorAll('#img-slider img');
    let counter = 0;
    slider.style.backgroundImage = (`url(${backgrnds[counter].src})`);

    function slide()
    {
        slider.style.backgroundImage = (`url(${backgrnds[counter].src})`);
    }

    if (prevBtn.addEventListener || nextBtn.addEventListener)
    {
        prevBtn.addEventListener('click', function () {
            counter--;
            if (counter < 0) {
                counter = backgrnds.length - 1;
            }
            slide();
    })
        nextBtn.addEventListener('click', function () {
            counter++;
            if (counter >= backgrnds.length) {
                counter = 0;
            }
            slide();
        })
    }
}