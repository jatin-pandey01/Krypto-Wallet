import React from 'react';
import {BsShieldFillCheck} from 'react-icons/bs';
import {BiSearchAlt} from 'react-icons/bi';
import {RiHeart2Fill} from 'react-icons/ri';

const ServiceCard = ({color,title,icons,subtitle}) =>{
  return (
    <div className='flex flex-row justify-center items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
          {icons}
        </div>
        <div className='flex flex-col flex-1 ml-5 text-white'>
          <h1 className='mt-2 text-lg'>{title} </h1>
          <p className='mt-2 text-sm md:w-9/12'> {subtitle} </p>
        </div>
    </div>
  );
}

const Services = () => {
  return (
    <div className='w-full flex mf:flex-row flex-col justify-center items-center gradient-bg-services'>
      <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
        <div className='flex flex-1 flex-col justify-start items-start'>
          <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>
            Services that we <br/> continue to improve
          </h1>
        </div>
      </div>  

      <div className='flex flex-1 flex-col justify-start items-center'>
        <ServiceCard color='bg-[#2952E3]' title='Security Guaranteed' icons={<BsShieldFillCheck fontSize={21} className='text-white'/>} 
            subtitle='Security is guaranted.We always maintain privacy and maintaining the quality of our product'/>
        <ServiceCard color='bg-[#8945F8]' title='Best exchange rates' icons={<BiSearchAlt fontSize={21} className='text-white'/>} 
            subtitle='Security is guaranted.We always maintain privacy and maintaining the quality of our product'/>
        <ServiceCard color='bg-[#F84550]' title='Fastest transactions' icons={<RiHeart2Fill fontSize={21} className='text-white'/>} 
            subtitle='Security is guaranted.We always maintain privacy and maintaining the quality of our product'/>
      </div>
    </div>
  )
}

export default Services;