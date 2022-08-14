(function(){
    const tituloPregunta = [...document.querySelectorAll('.preguntas_titulo')]
console.log(tituloPregunta);

    tituloPregunta.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('preguntas_padding--add');
            question.children[0].classList.toggle('preguntas_flechas--rotate');


            
            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;

        });
    });

})();