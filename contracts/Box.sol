// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Box is Initializable{
    uint256 private width;
    uint256 private height;

    // Emitted when the stored value changes
    event ValueChanged(uint256 newWidth, uint256 newHeight);

    function initialize(uint256 _width, uint256 _height) public initializer{
        width = _width;
        height = _height;
    }

    // Set a new dimension in the contract
    function setDimension(uint256 _width, uint256 _height) public {
        width = _width;
        height = _height;

        emit ValueChanged(_width, _height);
    }

    // Reads the last stored dimension
    function getWidth() public view returns (uint256) {
        return width;
    }

    function getHeight() public view returns (uint256) {
        return height;
    }
}
