const verifyCoin = (req,res,next) => {
    console.log("hello from middleware")
    const validCoins = ['bitcoin','ethereum','matic-network']
    const {coin} = req.query
    if(!coin) return res.status(400).json({message: 'Error : Coin Name is required'})
    if(!validCoins.includes(coin)) return res.status(400).json({message: 'Error : Invalid Coin Name'})
    next()
}

module.exports = verifyCoin