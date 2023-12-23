import React from 'react'
import Image from 'next/image'

import {footerLinks} from '@/constants/index'
import Link from 'next/link'

const Footer = () => {
  return (
  <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
<div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 '>
<div className='flex flex-col justify-start items-start gap-6'>
    <Image src={"/logo.svg"} alt='logo' width={118} height={18} className='object-contain'/>
    <p className='text-base text-gray-700'>Carhub 2023
    <br/>
All rights reserved &copy;
    </p>

</div>
<div className='footer__links'>
{footerLinks.map((Linnk)=>(
    <div key={Linnk.title} className='footer__link'>
<h3 className='font-bold'>{Linnk.title}</h3>
{Linnk.links.map((item)=>(
   <Link key={item.title} href={item.url}>{item.title}</Link>
))}
    </div>
))}
</div>
</div>
<div className='flex justify-between items-center mt-10 border-t border-gray-100 flex-wrap sm:px-16 px-6 py-10'>
    <p>@2023 CarHub All rights reserved</p>
    <div className='footer__copyrights-link'>
<Link href="/" className='text-gray-500'>Privacy policy </Link>
<Link href="/" className='text-gray-500'>Terms of use </Link>

    </div>

</div>

  </footer>
  )
}

export default Footer
