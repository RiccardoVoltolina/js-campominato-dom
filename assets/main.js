/* Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.






/* esecuzione */
/* 
- creo una variabile che mi selezioni 16 numeri random da 1 a 100
- metto una condizione con if/else dove se il numero si è ripetuto allora riscelgo i numeri random

*/






let giocoAttivo = true
const containerElement = document.querySelector('.container')
const numeri = 100
let listaNumeriRandom = []
let quadratoRosso;
while (listaNumeriRandom.length < 16) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (! listaNumeriRandom.includes(randomNumber)) {
        listaNumeriRandom.push(randomNumber)
    }
}
console.log(listaNumeriRandom);
let h1Element = document.querySelector('h1')
h1Element.classList.add('white','none')
let clickTotali = 0;





document.querySelector('.generate').addEventListener('click' , function () {
    if (containerElement.className = 'none') {
        containerElement.className = 'container'
    }
    if (containerElement.className !== 'container') {
        ''
    }
    containerElement.innerHTML = ''
    for (let i = 0; i < numeri; i++) {
        const quadratoElement = document.createElement('div');
        quadratoElement.className = 'square'
        quadratoElement.innerText = i + 1
        containerElement.append(quadratoElement)
       
        quadratoElement.addEventListener('click' , function() {
          if (giocoAttivo === true) {
              /* console.log('Il numero selezionato è il : ' + quadratoElement.innerText); */
              clickTotali++;
              if (clickTotali >= 84) {
                  h1Element.innerHTML = 'Complimenti,hai vinto!'
              }
                  
              console.log(`Il numero selezionato è ${+quadratoElement.innerText === 1 ? "l'" : "il"} : ${quadratoElement.innerText}`);
              quadratoElement.className = 'blue'
  
              for (let i = 0; i < listaNumeriRandom.length; i++) {
                  if (Number(quadratoElement.innerText) === Number(listaNumeriRandom[i])) {
                      quadratoRosso = true
                      console.log(quadratoRosso);
                      quadratoElement.className = 'red' 
                      h1Element.classList.remove('none')
                      h1Element.innerHTML = 'Ops, hai preso una bomba,hai perso!'
                      giocoAttivo = false
                      console.log('hai cliccato in totale ' + clickTotali);

                  } 
             
              }
          }
        
       
        })
    }
})
document.querySelector('.delete').addEventListener('click' , function(){
    location.reload();
})
