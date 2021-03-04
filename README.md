# PlasmaDex -Decentralized Exchange Protocol (DEX)
Exchange basis on Automated Market Make protocol (AMM) - Uses a mathematical formula to determine the price of an asset. Assets are priced according to a pricing algorithm, unlike traditional exchanges that use an order book.
## Automated Market Maker (AMM)
AMM is peer-to-contract  (P2C) transactions as there is no need for counterparties in the traditional sense as transactions occur between users and contracts. Since there is no order book, there are no order types in AMM either. The price you get for the asset you want to buy or sell is determined by a formula. Smart contract liquidity still needs to be provided by users called liquidity providers.
 
Liquidity providers create a market by depositing the equivalent value of two tokens. In return, liquidity providers receive liquidity assets ‘P-LP’ that represent their share of the total liquidity pool. These liquidity tokens can be exchanged for the share they represent in the pool. Liquidity providers receive commissions on trades that take place in their pool
Take a look at the Token X/ Token Y  liquidity pool X and Y. The protocol takes these two values and multiplies them to calculate the total liquidity in the pool. Let's call this K. The main idea of the Protocol is that the liquidity K must remain constant, which means that the total liquidity in the pool is constant product. So, the formula for the total liquidity in the pool. 
constant product formula:

```
x * y = k
```
 
Suppose a trader decides to buy an asset Token X /  Token Y, when buying, he increases the share of the pool in X and decreases the part of the pool in Y. This means that the price of X grows, since it will decrease the amount of X in relation to Y, since the total liquidity (K) should remain constant. This mechanism determines the price. Ultimately, the price paid for X depends on how much the trade changes the relationship between X and Y. 
 
 
#### Earnings for Liquidity Providers
Real income for liquidity providers is the balance between the impermanent loss caused by price differences and the accumulated commissions from trading on the exchange.
Trade transactions are guaranteed to occur when prices change in the broader market. This is because if the price changes on another exchange, there will be an arbitrage opportunity created by the price difference between the exchanges. When an arbitrageur executes a profitable trade that brings the PlasmaDex exchange back in line with the broader market, liquidity providers benefit from the PlasmaDex exchange fees. 
 
The discrepancy in the number of assets between deposits and withdrawals is explained by the constant product formula.
The transaction value is calculated in such a way that after the transaction the constant product of the two liquidity pools is the same as before the transaction.
 
Impermanent loss occurs when the price ratio of the deposited tokens changes after you put them in the pool. The greater the change, the greater the fickle loss. If the price ratio between the pair remains in a relatively small range, volatile losses are also insignificant.  “Volatility” implies that if the assets return to the prices at which they were originally deposited, the losses are reduced. However, if you withdraw your funds at a different price ratio than when you deposited them, the losses will be very permanent. 

### ROUTER ADDRESS 

PlasmaSwap
```
[ChainId.MAINNET]: '0x5ec243F1F7ECFC137e98365C30c9A28691d86132'
```

### FACTORY ADDRESS 

PlasmaSwap
```
[ChainId.MAINNET]: '0xd87Ad19db2c4cCbf897106dE034D52e3DD90ea60'
```

### INIT CODE HASH

PlasmaSwap
```
[ChainId.MAINNET]: '611ee9501fb19c9df82695e66f6c58d69d86907b531dfbed652231515ae84081',
```


In-depth documentation on PlasmaDEX is available at [docs.plasma.finance](https://docs.plasma.finance)
## Reference
- [Ethereum](https://ethereum.org/)
- [Uniswap](https://github.com/Uniswap)
- [Balancer](https://github.com/balancer-labs)
- [SushiSwap](https://github.com/sushiswap)
- [0x](https://0x.org/)
- [WETH](https://weth.io)
