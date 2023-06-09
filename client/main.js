const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneCookie")
const quotesContainer = document.getElementById("vgQuotesContainer")
const quotesBtn = document.getElementById("vgQuotesBtn")

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

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
quotesBtn.addEventListener('click', getInspired)