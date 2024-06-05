"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-red-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">

                                <a href="/" className="text-white">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/18374935?s=280&v=4"
                                        alt="Logo"
                                        className="w-10 h-10"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <Link href="/">
                                    <p className="text-white hover:bg-white hover:text-red-500 rounded-lg p-">Home</p>
                                </Link>
                                <Link href="/blogs">
                                    <p className="text-white hover:bg-white hover:text-red-500 rounded-lg p-">Blogs</p>
                                </Link>
                                <Link href="/about">
                                    <p className="text-white hover:bg-white hover:text-red-500 rounded-lg p-">About</p>
                                </Link>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-500 hover:bg-white focus:outline-none"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="/" className="text-white block hover:bg-white hover:text-red-500 rounded-lg p-2">Blogs</a>
                            <a href="/" className="text-white block hover:bg-white hover:text-red-500 rounded-lg p-2">About</a>
                            <a href="/" className="text-white block hover:bg-white hover:text-red-500 rounded-lg p-2">Contact</a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
