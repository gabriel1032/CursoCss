(function(){
    const sliders = [...document.querySelectorAll('.testimonio_cuerpo')];
    const botonsiguiente = document.querySelector('#next');
    const botonatras = document.querySelector('#before');
    let value;

    botonsiguiente.addEventListener('click', ()=>{
        changePosition(1);
    });

    botonatras.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimonio = document.querySelector('.testimonio_cuerpo--show').dataset.id;
        value = Number(currentTestimonio);
        value += add;
        
        sliders[Number(currentTestimonio)-1].classList.remove('testimonio_cuerpo--show')
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length :1;
        }
        sliders[value-1].classList.add('testimonio_cuerpo--show')

    }


})();