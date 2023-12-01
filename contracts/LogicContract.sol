// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract LogicContract is Initializable {
    uint256 private value;

    function initialize(uint256 _value) public initializer {
        value = _value;
    }

    function getValue() public view returns (uint256) {
        return value;
    }

    function setValue(uint256 _newValue) public {
        value = _newValue;
    }
}