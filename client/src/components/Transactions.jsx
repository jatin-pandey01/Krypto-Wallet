import React, { useContext } from 'react'
import dummyData from '../utils/dummyData';
import { TransactionContext } from '../context/TransactionContext';

// (parameter) transaction: {
//    transactionHash: number;
    // message: string;
    // timestamp: string;
    // addressFrom: string;
    // amount: string;
    // addressTo: string;
// }
const TransactionCard = ({transactionHash,message,timestamp,addressFrom,amount,addressTo,url}) => {
  return(
    <div className='bg-[#181918] m-4 flex flex-1 xl:min-w-[450px] xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl'>
      <div className='flex flex-col items-center w-full mt-3'>
        <div className='w-full mb-6 p-2'>
          <a href={`https://sepolia.etherscan.io/tx/${transactionHash}`} target='_blank'>
            <p className='text-white text-base'>
              From : {addressFrom.slice(0,8)}...{addressFrom.slice(addressFrom.length - 4)}
            </p>
          </a>
          <a href={`https://sepolia.etherscan.io/tx/${transactionHash}`} target='_blank'>
            <p className='text-white text-base'>
              To : {addressTo.slice(0,8)}...{addressTo.slice(addressTo.length - 4)}
            </p>
          </a>
          <p className='text-white text-base'>
            Amount : {amount}
          </p>
          { message && (
            <>
              <br/>
              <p className='text-white text-base'>Message :{message}</p>
            </>
          ) }
        </div>

        <div>
            <img src={url} alt="" />
          </div>
          <div className='bg-black p-3 px-5 w-max -mt-5 rounded-3xl shadow-2xl'>
            <p className='text-[#37c7da] font-bold'>
              {timestamp}
            </p>
          </div>
      </div>
    </div>
  );
}

const Transactions = () => {
  const {connectedAccount} = useContext(TransactionContext);

  return (
    <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
      <div className='flex flex-col md:p-12 py-12 px-4'>  
        {
          connectedAccount ? 
          (<h3 className='text-white text-3xl text-center my-2'>
            Latest transactions
          </h3>) :
          (<h3 className='text-white text-3xl text-center my-2'>
            Connect your account to see the latest transactions
          </h3>)
        }
        <div className='flex flex-wrap justify-center items-center mt-10'>
          {
            dummyData.reverse().map((transaction,index)=>{
              return <TransactionCard key={index} {...transaction} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Transactions;