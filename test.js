const url = 'https://api.coingecko.com/api/v3/simple/price'
const params = new URLSearchParams({
    ids: 'bitcoin,matic-network,ethereum', 
    vs_currencies: 'usd',  
    include_market_cap: 'true',  
    include_24hr_change: 'true', 
    precision: '2' 
  });
  
  const urlWithParams = `${url}?${params.toString()}`;
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-xQkujUG56TAMPiZHUTsXH2nD' 
    }
  };

const response = await fetch(urlWithParams, options)
const data = await response.json()
const coins = ['bitcoin','matic-network','ethereum']
 for(let i=0;i<3;i++){
    console.log(data[coins[i]].usd)
}