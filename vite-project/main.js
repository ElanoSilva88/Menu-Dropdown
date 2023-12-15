import './style.css'

function menuPal(){
    const btnPal = document.querySelector('.timeTimes');
    const timePal = document.querySelector('.listaJogadoresPal');
    btnPal.addEventListener('click', () => {
        console.log('quadfsf')
        if (timePal.classList.contains('hidden')) {
            timePal.classList.remove('hidden')
        } else {
            timePal.classList.add('hidden')
        }

    })
}

menuPal()