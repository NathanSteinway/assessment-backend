const charArray =  [
    {
        name: "zangief",
        quote: "Nothing is impossible if you keep training!",
        imageURL: "https://cdn.dashfight.com/65d2fff46ed07dafc06870c41afaf286c64966f8.jpg"
    },
    
    {
        name: "Link",
        quote: "...",
        imageURL: "https://www.svg.com/img/gallery/the-inspiration-behind-the-legend-of-zeldas-link/intro-1670425086.webp"
    },
    
    {
        name: "Veigar",
        quote: "You deny the darkness in your soul! You deny your power!",
        imageURL: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/06/Final-Boss-Veigar-.jpg"
    }
]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {

        // Array of Fortunes!
        const fortunes = [
            "A faithful friend is a strong defense.", 
            "A lifetime friend shall soon be made.", 
            "A person of words and not deeds is like a garden full of weeds.", 
            "A soft voice may be awfully persuasive.", 
            "Adventure can be real happiness.", 
            "All the effort you are making will ultimately pay off.", 
            "Allow compassion to guide your decisions."
        ]

        // Sets a variable equal to a random number within the range of the fortunes array length
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        // Sets a variable equal to the fortunes array with an index of randomIndex.
        // In other words, randomFortune = fortunes[i], which is a random number based on the fortunes array length.
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    getInspired: (req, res) => {

        let randomIndex = Math.floor(Math.random() * charArray.length)
        let randomQuote = charArray[randomIndex]

        res.status(200).send(randomQuote)
    },

    postNewChar: (req, res) => {

    }
}