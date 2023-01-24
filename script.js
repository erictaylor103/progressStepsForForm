const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
console.log("Initial Current Active:" + currentActive);

next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length){
        currentActive = circles.length;        
    }

    update();

    console.log("Next current active:" + currentActive);
    
});

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;        
    }

    update();

    console.log("Previous current active:" + currentActive);
});

function update(){
    circles.forEach((circle, idx) => {        
        if(idx < currentActive){
            circle.classList.add('active');            
        }else{
            circle.classList.remove('active');            
        }
        console.log("IDX:" + idx);        
    })

    const actives = document.querySelectorAll('.active');

    const activesPercentage = (actives.length -1) / (circles.length -1) * 100;

    progress.style.width = activesPercentage + '%';

    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}