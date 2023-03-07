export default function baner() {
    const viewport = document.querySelector(".slider__vew-port");
    const sliderLine = document.querySelector(".slider__line");
    const slidreItems = document.querySelectorAll(".slider__item");

    const btnPrev = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");

    let widthVewPort;
    let numItems;
    let currentSlide = 0;

    setParam();

    window.addEventListener("resize", setParam);

    btnNext.addEventListener("click", () => {
        currentSlide++;
        if (currentSlide >= numItems) {
            currentSlide = 0;
        }
        sliderLine.style.right = `${widthVewPort * currentSlide}px`;
        activeDot(currentSlide);
    });

    btnPrev.addEventListener("click", () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = numItems - 1;
        }
        sliderLine.style.right = `${widthVewPort * currentSlide}px`;
        activeDot(currentSlide);
    });

    //-- dots --

    const dots = document.querySelector(".dots");

    for (let index = 0; index < numItems; index++) {
        console.log('dot');
        console.log(numItems);
        
        const dot = document.createElement('div');
        
        dot.classList.add('dot');
        dot.setAttribute('data-cunt', index)
        dot.addEventListener('click', () => {
            sliderLine.style.right = `${widthVewPort * index}px`;
            activeDot(index);
        });
        dots.append(dot);

    }

    activeDot();
    
    
    function activeDot(num = 0) {
        const ds = document.querySelectorAll('.dot');
        console.log(ds);  
        ds.forEach((item) => {
            item.classList.remove('dot--active');
        })
        console.log(ds[num]); 
        ds[num].classList.add('dot--active');

    }

    //-- /dots --

    //=== dragendrop ===

    //=== //dragendrop ===

    function setParam() {
        widthVewPort = viewport.getBoundingClientRect().width;
        numItems = slidreItems.length;

        let arrItems = Array.from(slidreItems);

        sliderLine.style.width = `${widthVewPort * numItems}px`;

        arrItems.forEach((item) => {
            item.style.width = `${widthVewPort}px`;
        });

        sliderLine.style.right = `${widthVewPort * currentSlide}px`;
    }
}
