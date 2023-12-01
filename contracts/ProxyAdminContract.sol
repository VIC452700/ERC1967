// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import './ProxyContract.sol';

contract ProxyAdminContract is Initializable {
    function upgrade(
        address proxyAddress,
        address newLogicAddress
    ) external {
        ProxyContract proxy = ProxyContract(payable(proxyAddress));
        bytes memory data =
            abi.encodeWithSignature("upgradeTo(address)", newLogicAddress);
        (bool success, ) = address(proxy).call(data);
        require(success, "upgrade failed");
    }
}