import { Wallet, Contract } from 'ethers'
import { Web3Provider } from 'ethers/providers'
import { deployContract } from 'ethereum-waffle'

import { expandTo18Decimals } from './utilities'

import PlasmaswapFactory from './../../../plasmaswap-core/build/PlasmaswapFactory.json'
import IPlasmaswapPair from './../../../plasmaswap-core/build/IPlasmaswapPair.json'

import ERC20 from '../../build/ERC20.json'
import WETH9 from '../../build/WETH9.json'
import PlasmaswapRouter from '../../build/PlasmaswapRouter.json'
import RouterEventEmitter from '../../build/RouterEventEmitter.json'

const overrides = {
  gasLimit: 9999999
}

interface SwapFixture {
  token0: Contract
  token1: Contract
  WETH: Contract
  WETHPartner: Contract
  factorySwap: Contract
  routerSwap: Contract
  routerEventEmitter: Contract
  router: Contract
  pair: Contract
  WETHPair: Contract
}

export async function RunFixture(provider: Web3Provider, [wallet]: Wallet[]): Promise<SwapFixture> {
  // deploy tokens
  const tokenA = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])
  const tokenB = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])
  const WETH = await deployContract(wallet, WETH9)
  const WETHPartner = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])

  // deploy
  const factorySwap = await deployContract(wallet, PlasmaswapFactory, [wallet.address])

  // deploy router
  const routerSwap = await deployContract(wallet, PlasmaswapRouter, [factorySwap.address, WETH.address], overrides)

  // event emitter for testing
  const routerEventEmitter = await deployContract(wallet, RouterEventEmitter, [])

  // initialize
  await factorySwap.createPair(tokenA.address, tokenB.address)
  const pairAddress = await factorySwap.getPair(tokenA.address, tokenB.address)
  const pair = new Contract(pairAddress, JSON.stringify(IPlasmaswapPair.abi), provider).connect(wallet)

  const token0Address = await pair.token0()
  const token0 = tokenA.address === token0Address ? tokenA : tokenB
  const token1 = tokenA.address === token0Address ? tokenB : tokenA

  await factorySwap.createPair(WETH.address, WETHPartner.address)
  const WETHPairAddress = await factorySwap.getPair(WETH.address, WETHPartner.address)
  const WETHPair = new Contract(WETHPairAddress, JSON.stringify(IPlasmaswapPair.abi), provider).connect(wallet)

  return {
    token0,
    token1,
    WETH,
    WETHPartner,
    factorySwap,
    routerSwap,
    router: routerSwap,
    routerEventEmitter,
    pair,
    WETHPair
  }
}
