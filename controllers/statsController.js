const CryptoData = require('../models/crypto');
const latestData = async (req,res) => {
   const {coin} = req.query
   if(!coin) return res.status(400).json({message: 'Error : Coin Name is required'})
   if(coin !== 'bitcoin' && coin !== 'ethereum' && coin !== 'matic-network') return res.status(400).json({message: 'Error : Invalid Coin Name'})
   try{
    const latestData = await CryptoData.find({ coin: coin })
    .sort({ timestamp: -1 })
    .limit(1);
    
    if(!latestData || latestData.length === 0) return res.status(404).json({message: 'Error : Data not found'})
    console.log(latestData)
    res.status(200).json({
      price : latestData[0].price,
      marketCap : latestData[0].marketCap,
      "24hChange" : latestData[0].priceChange24h
   });
   }catch(err){
    console.error('Error fetching data:', err);
    res.status(500).json({ message: 'Error fetching data', error: err.message });
   }
}

const deviation = async (req,res) => {
   const {coin} = req.query
   if(!coin) return res.status(400).json({message: 'Error : Coin Name is required'})
   if(coin !== 'bitcoin' && coin !== 'ethereum' && coin !== 'matic-network') return res.status(400).json({message: 'Error : Invalid Coin Name'})
    try{
        const records = await CryptoData.find({ coin: coin })
        .sort({ timestamp: -1 })
        .limit(100);
        
        if(!records || records.length === 0) return res.status(404).json({message: 'Error : Data not found'})
        
        const prices = records.map(record => record.price)
        const mean = prices.reduce((sum,price) => sum+price,0)/prices.length
        const deviation = Math.sqrt(prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length)
        res.status(200).json({
            deviation
        })
       }catch(err){
        console.error('Error fetching data:', err);
        res.status(500).json({ message: 'Error fetching data', error: err.message });
       }
}

module.exports = {latestData,deviation}