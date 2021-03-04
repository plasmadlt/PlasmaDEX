pragma solidity =0.5.16;

import '../PlasmaswapERC20.sol';

contract ERC20 is PlasmaswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
