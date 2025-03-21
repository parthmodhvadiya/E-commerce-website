import React from 'react'
const Footer = () => {
  return (

<footer class="bg-black py-5 mt-10">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-5 py-24 lg:py-8 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#">About</a>
                </li>
                <li class="mb-4">
                    <a href="#"  >Blog</a>
                </li>
                <li class="mb-4">
                    <a href="#"  >Jobs</a>
                </li>
                <li class="mb-4">
                    <a href="#">Press</a>
                </li>
                <li class="mb-4">
                    <a href="#">Partners</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Solutions</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#"  >Marketing</a>
                </li>
                <li class="mb-4">
                    <a href="#"  >Analytics</a>
                </li>
                <li class="mb-4">
                    <a href="#"  >Commerce</a>
                </li>
                <li class="mb-4">
                    <a href="#"  >Insights</a>
                </li>
                <li class="mb-4">
                    <a href="#"  >Supports</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Documentation</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#"  >Guides</a>
                </li>
                <li class="mb-4">
                    <a href="#"  >API status</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#"  >Claim</a>
                </li>
                <li class="mb-4">
                    <a href="#"  >Privacy</a>
                </li>
                <li class="mb-4">
                    <a href="#"  >Terms</a>
                </li>
            </ul>
        </div>
        
    </div>
    
    <div className='py-5'>
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 My Company. All Rights Reserved.
        </span>
        <br/>
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">Made with love by Me.
        </span>
        <br/>
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">Icons are made by Freepik from <a href="www.flaticon.com">www.flaticon.com</a>
        </span>
        </div>
    </div>
</footer>

  )
}

export default Footer