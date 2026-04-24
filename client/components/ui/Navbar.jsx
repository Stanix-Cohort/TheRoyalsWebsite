'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    return(
        <nav className='w-full border-b bg-white'>
            <div className='max-w-7xl max-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 h-[80px]'>
              
                {/* Logo Section */}
                <Link href='/' className='flex items-center'>
                <Image src='/assets/navLogo-blue.svg'
                 alt='The RoyalLogo'
                 width={160}
                 height={40}
                // className='object-contain'
                />
                </Link>
            
                    <ul className='hidden md:flex items-center gap-10'>
                        <li>
                        <Link href='/' className='cursor-pointer hover:text-blue-700 transition'>
                        Home
                        </Link>
                        </li>

                        <li>
                        <Link href='/about' className='cursor-pointer hover:text-blue-700 transition'>
                        About
                        </Link>
                        </li>

                        <li className='relative'>
                        <button onClick={() => setIsOpen(!isOpen)}
                         className='flex items-center gap-1 hover:text-blue-700 cursor-pointer transition font-medium'>
                        Initiative
                        <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {isOpen && (
                        <div className='absolute top-full left-0 mt-4 w-[320px] bg-white 
                        border border-gray-100 shadow-2xl rounded-2xl p-6 z-50'>

                            <div className='space-y-3'>
                                <h6 className='text-[11px] font-medium text-gray-400 tracking-wide '>
                                    Community Support & Empowerment
                                </h6>
                                <Link href="/initiatives/cabi" className='block px-1 py-2 hover:bg-blue-50 text-sm'> 
                                Clothe A BoyChild Initiative (CABI)
                                </Link>
                            </div>
                            <div className='space-y-3'>
                                <h6 className='text-[11px] font-medium text-gray-400 tracking-wide '>
                                    Education
                                </h6>
                                <Link href="/initiatives/urgent-2k" className='block px-1
                                py-2 hover:bg-blue-50 text-sm'>
                                Urgent 2k Campaign
                                </Link>
                            </div>
                            <div className='space-y-3'>
                                <h6 className='text-[11px] font-medium text-gray-400 tracking-wide'>
                                    Leadership Pathway
                                </h6>
                                <div className='inline-block px-2.5 py-0.5 bg-gray-50 border border-gray-100 rounded-md'>
                                    <span className='text-[12px] font-bold text-gray-300 uppercase tracking-tight'>
                                        Coming Soon
                                    </span>
                                
                                </div>
                            </div>
                        </div>
                        )}
                        </li>

                        <li>
                        <Link href='/gallery' className='cursor-pointer hover:text-blue-700 transition'>
                        Gallery
                        </Link>
                        </li>

                        <li>
                        <Link href='/contact' className='cursor-pointer hover:text-blue-700 transition'>
                        Contact
                        </Link>
                        </li>
                        
                    </ul>
            

                <button className='hidden md:flex items-center justify-between
                 bg-blue-400 h-[55px] w-[206px] pl-6 pr-2 rounded-full'>
                   <Link href='/contact'>
                   <p className='text-white text-sm font-medium'>Get Involved</p>
                   </Link> 
                    <span className='flex items-center justify-center
                     w-10 h-10 bg-blue-950 rounded-full text-white'>
                     → 
                     </span>
                </button>
                {/* Mobile Menu Button */}
                <button className='md:hidden'
                onClick={() => setOpenMenu(true)}>
                    <Menu size={24} />
                </button>

            </div>
            {/* Mobile SideBar */}
            {openMenu && (
                <div className='fixed inset-0 bg-black/30 z-40'
                onClick={() => setOpenMenu(false)}>

            {/* Sidebar */}
            <div className='fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white h-full p-6 flex flex-col z-50'
            onClick={(e) => e.stopPropagation()} >

                {/* Header */}
                <div className='flex items-center justify-between w-full'>
                  <Image
                  src='/assets/navLogo-blue.svg'
                  alt='logo'
                  width={160}
                  height={60}
                   />
                   <button onClick={() => setOpenMenu(false)}>
                    <X />
                   </button>
                </div>
                {/* Middle Links */}
                <div className='flex flex-col gap-10 mt-10'>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>

                    <button className='flex justify-between items-center' 
                    onClick={() => setIsOpen(!isOpen)}
                    >
                        Initiatives
                        <ChevronDown />
                    </button>
                    {/* Dropdown Menu */}
                        {isOpen && (
                        <div className='mt-1 ml-2 space-y-2 pl-4 
                        border border-gray-100 shadow-2xl rounded-2xl p-6 z-50'>

                            <div className='space-y-2'>
                                <h6 className='text-[5px] font-semibold text-gray-400 uppercase tracking-[0.1em] '>
                                    Community Support & Empowerment
                                </h6>
                                <Link href="/initiatives/cabi" className='block px-1 py-2 hover:bg-blue-50 text-sm'> 
                                Clothe A BoyChild Initiative (CABI)
                                </Link>
                            </div>
                            <div className='space-y-2'>
                                <h6 className='text-[5px] font-semibold text-gray-400 uppercase tracking-[0.1em] '>
                                    Education
                                </h6>
                                <Link href="/initiatives/urgent-2k" className='block px-1
                                py-2 hover:bg-blue-50 text-sm'>
                                Urgent 2k Campaign
                                </Link>
                            </div>
                            <div className='space-y-3'>
                                <h6 className='text-[5px] font-semibold text-gray-400 uppercase tracking-[0.1em] '>
                                    Leadership Pathway
                                </h6>
                                <div className='inline-block px-2.5 py-0.5 bg-gray-50 border border-gray-100 rounded-md'>
                                    <span className='text-[12px] font-bold text-gray-400 uppercase tracking-tight'>
                                        Coming Soon
                                    </span>
                                
                                </div>
                            </div>
                        </div>
                        )}
                        <Link href='/gallery'>Gallery</Link>
                        <Link href='/contact'>Contact</Link>
                        <Link href='/privacy-policy' className='mt-8'>Privacy Policy</Link>
                    
                    
                </div>

                <div className='mt-auto pt-6'>
                    <button className='w-full flex items-center justify-between bg-blue-500 text-white px-5 py-3 rounded-full'>
                        Get Involved
                        <span className='bg-blue-900 w-8 h-8 flex items-center justify-center rounded-full'>
                         → 
                        </span>
                    </button>

                </div>
            </div>
                </div>

            )}
        </nav>
    );
}