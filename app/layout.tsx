"use client"
import "./globals.css";
import { Navbar } from "flowbite-react";
export const metadata = {
  title: 'Website Generate QR Code',
  description: 'Generate high-quality QR codes for free with our easy-to-use QR code generator. Create custom codes for your website, business cards, and more. Our tool supports multiple QR code types and allows you to customize the colors and design. Start generating QR codes today and enhance your marketing strategy with ease.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Website Generate QR Code</title>
      <meta name="description" content="Generate high-quality QR codes for free with our easy-to-use QR code generator. Create custom codes for your website, business cards, and more. Our tool supports multiple QR code types and allows you to customize the colors and design. Start generating QR codes today and enhance your marketing strategy with ease." />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <body>
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
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          QR Code Generator
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/navbars"
            active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            About 
          </Navbar.Link>
          <Navbar.Link href="/navbars">
          Technology
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
         {/*End Navbar */}
        {children}
        {/*Footers*/}
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a
        href="https://flowbite.com/"
        className="flex items-center mb-4 sm:mb-0"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite
        </span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2023{" "}
      <a href="https://flowbite.com/" className="hover:underline">
        Flowbite™
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>
        {/*End Footers */}
      </body>
    </html>
  )
}
