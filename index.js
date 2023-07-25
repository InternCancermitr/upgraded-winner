const axios = require('axios');
const cheerio = require('cheerio');

const fetchGames = async () => {
    try {
       const response = await axios.get('https://www.amazon.com/s?k=games&crid=3UO0JI7GV5X6X&sprefix=games%2Caps%2C265&ref=nb_sb_noss_1')
       const html = response.data;
       const $ = cheerio.load(html);
       const games = []

       $('a-offscreen').each((index, el) => {
           const game = $(el)
           const title = game.find('a-offscreen').text()
           games.push(title)
       })
       return games
    } catch (err) {  
        console.error(err)
    }
}
fetchGames().then(games => console.log(games))