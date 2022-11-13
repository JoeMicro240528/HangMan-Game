let letters ="abcdefghijklmnopqrstuvwxyz";

//make array from the letters
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");

//looping on the array
lettersArray.forEach(letter => {

  //cerat span 
  let span = document.createElement("span");

  //create letter node
  let theletter = document.createTextNode(letter);

  // add letter to span and span to letter Container
  span.appendChild(theletter);
  span.className ="letter-box";
  lettersContainer.appendChild(span);
});

let words ={
    programming:["php","javascript","go","scala","fortran","r","mysql","python"],
    movies:["dark","lupin","panshee","the punesher","breking bad","ms rbot","la casa","Coco"],
    frinds:["omer","mohamed nor","kola","mohand salah","basher","bakri"],
    countries:["syria","Egypt","Yemen","Sudan","Qatar","phalestine"]
}


let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random()*allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomValueNamber = Math.floor(Math.random()*randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNamber];
//Set Category Info
document.querySelector(".game-info .category span").innerHTML =" "+ randomPropName;

let guessContainer = document.querySelector(".letters-guess");

let arrayValue = Array.from(randomValueValue);

arrayValue.forEach(letter =>{
   let span = document.createElement("span");

   if(letter === ' '){
      span.className = "with-space";
   }
   guessContainer.appendChild(span);
});

let guessSpan = document.querySelectorAll(".letters-guess span");
let wrongAttempts = 0;
let theDraw = document.querySelector(".hangman-draw");
document.addEventListener('click',(e)=>{
   let theStatus = false;
    if(e.target.className === "letter-box"){
        e.target.classList.add("clicked");
        let theClickedLetter = e.target.innerHTML.toLowerCase();
         
        let theChooseLetter = Array.from(randomValueValue.toLowerCase());
        theChooseLetter.forEach((wordLetter,wordIndex)=>{
           if(theClickedLetter == wordLetter){
                 theStatus = true;
             guessSpan.forEach((span,spanIndex)=>{
                 if(wordIndex === spanIndex){
                  span.innerHTML= theClickedLetter;
                 }
            });
           }
        });
        if(theStatus !== true){
            wrongAttempts++;
             
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            if(wrongAttempts === 8){
                endGame();

                lettersContainer.classList.add("finished");
            }
             
        }
    }
});


//End Game Function 
function endGame(){
   //Creat Popup Div
   let div = document.createElement("div");

   //Creat Text
    let divText = document.createTextNode(`Game Over, The Word Is "${randomValueValue}"`);

    div.appendChild(divText);

    div.className = "popup";

    document.body.appendChild(div);
}