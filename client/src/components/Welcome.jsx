import React, { useContext } from 'react';
import {AiFillPlayCircle} from 'react-icons/ai';
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';
import Loader from './Loader';
import { TransactionContext } from '../context/TransactionContext';



const Welcome = () => {
    // const connectWallet = ()=>{}
    const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';
    const inputStyles = 'w-full my-2 rounded p-2 border-none white-glassmorphism bg-transparent outline-none text-white';
    const {connectWallet,connectedAccount,handleChange,formData,sendTransaction,isLoading} = useContext(TransactionContext);
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const {addressTo,amount,keyword,message} = formData;
        if(!addressTo || !amount || !keyword || !message) return;
        sendTransaction();
    }

    // console.log(connectWallet);

  return (
    <div className='w-full flex justify-center items-center'>
        <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
            <div className='flex flex-1 justify-start flex-col mf:mr-10'>
                <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
                    Send Crypto <br/> across the world
                </h1>
                <p className='text-left text-white mt-5 font-light md:w-9/12 w-11/12 text-base'>
                    Explore the crypto world. Buy and Sell cryptocurrencies easily on Krypto.
                </p>
                {!connectedAccount &&
                <button type='button' onClick={connectWallet} className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    <p className='text-white text-base font-semibold'>Connect Wallet</p>
                </button>
                }
                <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
                    <div className={`rounded-tl-xl ${commonStyles}`}>Reliability</div>
                    <div className={`${commonStyles}`}>Security</div>  
                    <div className={`sm:rounded-tr-xl ${commonStyles}`}>Ethereum</div>
                    <div className={`${commonStyles} sm:rounded-bl-xl`}>Web 3.0</div>
                    <div className={`${commonStyles}`}>Low fees</div>
                    <div className={`rounded-br-xl ${commonStyles}`}> Blockchain </div>
                </div>
            </div>

            <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
                <div className='p-3 flex flex-col justify-end items-start rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
                    <div className='flex justify-between flex-col w-full h-full'>
                        <div className='flex justify-between items-start'>
                            <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                                <SiEthereum className='text-white text-[21px]'/>
                            </div>
                            <BsInfoCircle className='text-[17px] text-white' /> 
                        </div>
                        <div>
                            <p className='text-white font-light text-sm'>
                                {connectedAccount ? `${connectedAccount.slice(0,8)}...${connectedAccount.slice(connectedAccount.length - 4)}`: 'Address'}
                            </p>
                            <p className='text-white font-semibold text-lg mt-1'>Ethereum</p>
                        </div>
                    </div>
                </div>

                <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
                    <input type='text' step='0.0001' placeholder='Address To' name='addressTo' onChange={(e)=>{handleChange(e,'addressTo')}} className={`${inputStyles}`}/>
                    <input type='number' step='0.0001' placeholder='Amount (ETH)' name='amount' min='0' onChange={(e)=>{handleChange(e,'amount')}} className={`${inputStyles}`}/>
                    <input type='text' step='0.0001' placeholder='Keyword (Gif)' name='keyword' onChange={(e)=>{handleChange(e,'keyword')}} className={`${inputStyles}`}/>
                    <input type='text' step='0.0001' placeholder='Enter Message' name='message' onChange={(e)=>{handleChange(e,'message')}} className={`${inputStyles}`}/>
                    <div className='h-[1px] w-full bg-gray-400 my-2' />
                    {
                        isLoading ? <Loader/> : 
                        (<button type='button' onClick={handleSubmit} className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full'>
                            Send Now
                        </button>)
                    }
                </div>

            </div>
        </div>
    </div>
  )
}

export default Welcome;