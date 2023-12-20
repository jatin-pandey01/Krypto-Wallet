import React, { useState } from 'react';
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import logo from './../assets/logo.png';

const NavbarItem = ({title,classProps}) =>{
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}

const Navbar = () => {

    const [toggleMenu,setToggleMenu] = useState(false);

  return (
    <div className='w-full flex md:justify-center md:flex-row flex-row-reverse justify-between items-center p-4'>
        <div className='md:flex-[0.5] flex-initial justify-center items-center'>
            <img src={logo} loading='lazy' className='w-32 cursor-pointer'/>
        </div>
        <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
            {
                ['Market','Exchange','Tutorials','Wallets'].map((item,index)=>{
                    return <NavbarItem key={index} title={item} />
                })
            }
            <li className='bg-[#2952e3] py-2 px-7 rounded-full mx-4 cursor-pointer hover:bg-[#2546bd]'>
                Login
            </li>
        </ul>
        <div className='flex md:hidden relative'>
            {/* {
                toggleMenu ? <AiOutlineClose className='text-white text-2xl cursor-pointer transition-all ease-linear duration-1000' onClick={()=>setToggleMenu(false)}/> : 
                <HiMenuAlt4 className='text-white text-2xl cursor-pointer transition-all ease-linear duration-1000' onClick={()=> setToggleMenu(true)}/>
            } */}
            { !toggleMenu && <HiMenuAlt4 className='text-white text-2xl cursor-pointer transition-all ease-linear duration-1000' onClick={()=> setToggleMenu(true)}/>  }
            { toggleMenu && (
                <ul className='z-10 fixed top-0 -left-2 p-3 w-[30vw] h-screen shadow-2xl list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                    <li className='text-xl my-2'> 
                        <AiOutlineClose className='cursor-pointer' onClick={()=>setToggleMenu(false)}/> 
                    </li>
                    {
                        ['Market','Exchange','Tutorials','Wallets'].map((item,index)=>{
                            return <NavbarItem key={index} title={item} classProps='my-2 px-8 w-full text-lg' />
                            })
                    }
                    <li className='w-full'>
                    <li className='bg-[#2952e3] w-24 py-2 px-7 rounded-full mx-4 cursor-pointer my-2 hover:bg-[#2546bd]'>
                        Login
                    </li> 
                    </li>  
                </ul>
            )}
        </div>

    </div>
  )
}

export default Navbar;