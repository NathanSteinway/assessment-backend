const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneCookie")
const quotesContainer = document.getElementById("vgQuotesContainer")
const quotesBtn = document.getElementById("vgQuotesBtn")
const submitBtn = document.getElementById('submitBtn')
const form = document.getElementById('form')
const charName = document.getElementById('Character Name')
const charQuote = document.getElementById('Quote')
const charImg = document.getElementById('imageURL')
const deleteBtn = document.getElementById('deleteBtn')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const fortune = res.data
            alert(fortune)
        })
};

const getInspired = () => {
    axios.get("http://localhost:4000/api/quote")
        .then(res => {

            let { name, quote, imageURL } = res.data

            quotesContainer.innerHTML = `
                <h1>${name}</h1>
                <img src="${imageURL}"</img>
                <p>${quote}</p>
            `
        })
        .catch(err => console.log(err))
}

const makeNew = (evt) => {

    evt.preventDefault()
    
    let bodyObj = {
        name: charName.value,
        quote: charQuote.value,
        imageURL: charImg.value
    }

    axios.post("http://localhost:4000/api/char", bodyObj)
        .then(res => {
            console.log(res.data)
        })
}

const killHero = (evt) => {

    evt.preventDefault()

    let bodyName = {
        name: charName.value
    }

    axios.delete(`http://localhost:4000/api/char/delete`, bodyName)

}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
quotesBtn.addEventListener('click', getInspired)
form.addEventListener('submit', makeNew)
deleteBtn.addEventListener('click', killHero)