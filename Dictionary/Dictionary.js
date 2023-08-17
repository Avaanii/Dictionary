let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let result = document.getElementById("result");
let sound = document.getElementById("sound");
let btn = document.getElementById("search-btn");


btn.addEventListener("click", ()=>{
    let inpWord = document.getElementById("inp-word").value;
    console.log(inpWord);
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = 
        `
        <div class="word">
                <h3>${inpWord}</h3>
                <button onclick="playSound()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic}</p>
            </div>
        </div>
        <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
            synonym: ${data[0].meanings[0].synonyms[0]} 
        </p>
        `;

        sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
        
    })
    .catch(() => {
        result.innerHTML = `<h4 class="error">Couldn't find the word<h4/>`
    })
});

function playSound(){
    sound.play();
}





























