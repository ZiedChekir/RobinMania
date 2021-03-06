// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

interface IGameItems {
    function balanceOf(address _owner, uint256 _id)
        external
        view
        returns (uint256);
    function safeTransferFrom(
        address _from,
        address _to,
        uint256 _id,
        uint256 _value,
        bytes calldata _data
    ) external;
    function isApprovedForAll(address account, address operator) external view returns(bool);
}