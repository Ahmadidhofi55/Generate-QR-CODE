"use client"
import React,{useEffect} from "react";
import DarkModeButton from "./components/darkmode";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navbar } from "flowbite-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <html lang="en">
      <head>
        <title>Website Generate QR Code</title>
        <meta name="description" content="Generate high-quality QR codes for free with our easy-to-use QR code generator. Create custom codes for your website, business cards, and more. Our tool supports multiple QR code types and allows you to customize the colors and design. Start generating QR codes today and enhance your marketing strategy with ease." />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className=" dark:bg-slate-600">
        {/* Navbar */}
        <Navbar
          fluid={true}
          rounded={true}
        >
          <Navbar.Brand href="">
            <img
              src="./logoqr.png"
              className="mr-3 h-6 sm:h-9"
              alt="Logo QR Code Generator"
            />
            <span className="self-center  whitespace-nowrap text-xl font-bold dark:text-white">
              QR Code Generator
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link
              href="/"
              active={true} className="font-mono hover:underline hover:text-black"
            >
              Home
            </Navbar.Link>
            <Navbar.Link className=" font-mono hover:underline hover:text-black" href="/about">
              About
            </Navbar.Link>
            <Navbar.Link className=" font-mono hover:underline hover:text-black" href="/technology">
              Technology
            </Navbar.Link>
            <Navbar.Link className=" font-mono hover:underline hover:text-black" href="/navbars">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
        {/*End Navbar */}
        {/* darkmode button */}
        <DarkModeButton/>
        {/* end dark mode button */}
        {children}   
        {/*Footers*/}
        <footer className="bg-gray-900 fixed bottom-0 w-full text-white py-4 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between container mx-auto">
            <div className="flex items-center mb-3 md:mb-0">
              <p className="text-sm">AHMADIDHOFI - ORNOTDEV © 2023</p>
            </div>
            <div className="flex flex-col md:flex-row">
              <a href="https://github.com/Ahmadidhofi55" className="mr-3 md:mr-6 hover:text-gray-500 hover:underline" >
                <i className="fa-xl fa-brands fa-github"></i>
              </a>
              <a href="#" className="mr-3 md:mr-6 hover:text-[#0077B5] hover:underline">
                <i className="fa-brands fa-xl fa-linkedin"></i>
              </a>
              <a href="#" className="mr-3 md:mr-6 hover:text-[#CB2D88] hover:underline">
                <i className="fa-brands fa-xl fa-instagram"></i>
              </a>
              <a href="#" className="mr-3 md:mr-6 hover:text-[#738ADB] hover:underline">
                <i className="fa-brands fa-xl fa-discord"></i>
              </a>
            </div>
          </div>
        </footer>
        {/*End Footers */}
      </body>
    </html>
  )
}
