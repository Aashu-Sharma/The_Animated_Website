import React from 'react';
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

function Footer() {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-white'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row '>
        <p className='text-center text-sm md:text-left '>
          &copy; @Aashutosh 2026. All Rights Reserved.
        </p>
        <div className='flex justify-center gap-4 md:justify-start '>
            {socialLinks.map((link) => (
                <a key={link} href={link.href} target='_blank' rel='noopener noreferrer' className='transition-colors duration-500 ease-in-out hover:text-black'>{link.icon}</a>
            ))}
        </div>

        <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'>Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Footer
