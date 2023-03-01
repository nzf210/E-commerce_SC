// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract PaymentProcessor {
    address public admin;
    IERC20 public dai;


event PaymentDone(
    address payer,
    uint amount,
    uint paymentId,
    uint date
);


    constructor(address _admin, address _daiAddress) {
        admin = _admin;
        dai = IERC20(_daiAddress);
    }
    
    function pay(uint _amount, uint _paymentId)  external {
        dai.transferFrom(msg.sender, admin, _amount);
        emit PaymentDone(msg.sender, _amount, _paymentId, block.timestamp);
    }
}

