const cron = require('node-cron');
const Crypto = require('../models/crypto')
const coins = ['bitcoin','matic-network','ethereum']

const fetchData = async () => {try{
    const url = 'https://api.coingecko.com/api/v3/simple/price'
    const params = new URLSearchParams({
        ids: 'bitcoin,matic-network,ethereum', 
        vs_currencies: 'usd',  
        include_market_cap: 'true',  
        include_24hr_change: 'true'
      });
      
    const urlWithParams = `${url}?${params.toString()}`;
      
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-xQkujUG56TAMPiZHUTsXH2nD' 
        }
      }

    const response = await fetch(urlWithParams, options)
    const data = await response.json()

    for(let i=0;i<3;i++){
        const newCrypto = new Crypto({
            coin: coins[i],
            price: data[coins[i]].usd,
            marketCap: data[coins[i]].usd_market_cap,
            priceChange24h: data[coins[i]].usd_24h_change
        })
        await newCrypto.save();
     }
     console.log(`Data Saved at ${new Date()}`)
    }catch(err){
        console.error(err)
}}

const cronJob = () => {cron.schedule('* */2 * * *', fetchData);}
module.exports = cronJob