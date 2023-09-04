const containerElement = document.querySelector('.container')
const numeri = 100




document.querySelector('.generate').addEventListener('click' , function () {
    if (containerElement.className = 'none') {
        containerElement.className = 'container'
    }
    if (containerElement.className !== 'container') {
        ''
    }
    for (let i = 0; i < numeri; i++) {
        const quadratoElement = document.createElement('div');
        quadratoElement.className = 'square'
        quadratoElement.innerText = i + 1
        containerElement.append(quadratoElement)
        quadratoElement.addEventListener('click' , function() {
            /* console.log('Il numero selezionato è il : ' + quadratoElement.innerText); */
            
            console.log(`Il numero selezionato è ${+quadratoElement.innerText === 1 ? "l'" : "il"} : ${quadratoElement.innerText}`);
            quadratoElement.className = 'blue'
            quadratoElement.addEventListener('click' , function() {
                if (quadratoElement.className === 'blue') {
                    quadratoElement.className = 'square'
                } else {
                    quadratoElement.className = 'blue'
                }
            })
        })
    }
})
document.querySelector('.delete').addEventListener('click' , function(){
    if (containerElement.className = 'container') {
        containerElement.className = 'none'
    }
})
