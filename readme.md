This is a Node.js application that fetches cryptocurrency data (Bitcoin, Matic, Ethereum) from the CoinGecko API and stores it in a MongoDB database every 2 hours. It provides two main API endpoints:

1. **/stats** - Fetches the latest data for a requested cryptocurrency (price, market cap, 24-hour change).
2. **/deviation** - Calculates the standard deviation of the price for the requested cryptocurrency from the last 100 records stored.