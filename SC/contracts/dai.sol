// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Dai is ERC20 {
    constructor() ERC20('Dai Stable','DAI') {}

    function faucet(address to, uint amount) external {
        _mint(to, amount);
    }
}