import React, { useEffect, useState } from "react";
import {ethers} from 'ethers';
import { contractABI,contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = ()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    // console.log({provider,signer,transactionContract});
    return transactionContract;
}

export const TransactionProvider = ({ children }) => {
    const [connectedAccount,setConnectedAccount] = useState('');
    const [formData,setFormData] = useState({addressTo:'',amount:'',keyword:'',message:''});
    const [isLoading,setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [transactions, setTransactions] = useState([]);

    const handleChange = (e,name)=>{
        setFormData((prevState)=>({...prevState,[name]:e.target.value}));
    }

    const getAllTransactions = async()=>{
        try {
            if(ethereum){
                const transactionContract = getEthereumContract();
                const availableTransactions = await transactionContract.getAllTransactions();
                // console.log('availableTransactions',availableTransactions);
                const structuredTransactions = availableTransactions.map((transaction) => ({
                    addressTo: transaction.receiver,
                    addressFrom: transaction.sender,
                    timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),//Give good time for presenting
                    message: transaction.message,
                    keyword: transaction.keyword,
                    amount: parseInt(transaction.amount._hex) / (10 ** 18), //For getting ethereum, have to multiply bt 10^18
                }));
                setTransactions(structuredTransactions);
                console.log(structuredTransactions);
            }
        } 
        catch (error) {
            console.log(error);
            throw new Error('Error in getting all transactions');
        }
    }

    const checkIfWalletIsConnected = async()=>{
        try {
            if(!ethereum) return alert('Please install Metamask');

            const accounts = await ethereum.request({method:'eth_accounts'});
            if(accounts.length){
                setConnectedAccount(accounts[0]);
                getAllTransactions();
                checkIfTransactionsExist();
            }
            else{
                console.log('No accounts found');
            }
        } 
        catch (error) {
            console.log(error);
            throw new Error('I\'m in Checkif No ethereum object.'); 
        }    
    }

    const checkIfTransactionsExist = async()=>{
        try {
            if (ethereum){
                const transactionContract = getEthereumContract();
                const currentTransactionCount = await transactionContract.getTransactionCount();
                console.log(currentTransactionCount.toNumber());
                window.localStorage.setItem("transactionCount", currentTransactionCount);
            }
                console.log('ethereum');
        } 
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    const connectWallet = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
    
          const accounts = await ethereum.request({ method: "eth_requestAccounts", });
    
          setConnectedAccount(accounts[0]);
          window.location.reload();
        } catch (error) {
          console.log(error);
          throw new Error("No ethereum object");
        }
    };

    const sendTransaction = async ()=>{
        try {
            if (ethereum) {
              const { addressTo, amount, keyword, message } = formData;
              const transactionContract = getEthereumContract();
              const parsedAmount = ethers.utils.parseEther(amount);
      
              await ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                  from: connectedAccount,
                  to: addressTo,
                  gas: "0x5208",
                  value: parsedAmount._hex,
                }],
              });
      
              const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
      
              setIsLoading(true);
              console.log(`Loading - ${transactionHash.hash}`);
              await transactionHash.wait();
              console.log(`Success - ${transactionHash.hash}`);
              setIsLoading(false);
      
              const transactionsCount = await transactionContract.getTransactionCount();
                  
              setTransactionCount(transactionsCount.toNumber());
              window.location.reload();
            } else {
              console.log("No ethereum object");
            }
          } 
        catch (error) {
            console.log(error);
            throw new Error('I\'m in Send No ethereum object.');    
        }
        
    }   

    useEffect(()=>{
        checkIfWalletIsConnected(); 
        // checkIfTransactionsExist();
    }, [transactionCount]);
    return(
        <TransactionContext.Provider value={{connectWallet, transactions, isLoading,connectedAccount,handleChange,formData,setFormData,sendTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}