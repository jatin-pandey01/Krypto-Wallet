// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0; 

//It's like a class of java
contract Transactions { 
    uint256 transactionCount;

    //Event in solidity is to used to log the transactions happening in the blockchain.
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
    
    //Similar to c/c++ struct
    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    //Array of TransferStruct data type
    TransferStruct[] transactions;

    //We have to define whether it's public or private, and memory is a keyword used to store data for execution of a contract.
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        //Pushing into array, msg.sender : will be the person who's currently connecting with the contract.
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword)); 
        // Emit keyword is used to emit an event in solidity, which can be read by the client in Dapp.
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    //Here it is returning whose data type is TransferStruct.
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns(uint256) {
        return transactionCount;
    }

}