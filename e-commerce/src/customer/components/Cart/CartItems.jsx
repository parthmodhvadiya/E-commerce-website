import React from 'react'
import { IconButton,Button } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItems = () => {
  return (
    <div className='px-5 shadow-lg border rounded-md py-10 my-5'>
        <div className='flex flex-wrap text-start'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] bg-cover object-contain object-top' src="https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Model wearing plain black basic tee." />
            </div>
            <div className="lg:col-span-2 mt-1">
              <h1 className="text-lg font-semibold text-grey-900">
                UniversalOutfit
              </h1>
              <h1 className='opacity-60'>Casual Puff Sleeve Solid Woman White Top</h1>
              <h1 className='opacity-60'>Seller: Crishtaliyo 2Fashion</h1>
              <div className="flex flex-row mt-5">
                <h2 className="sr-only">Product information</h2>
                <p className="text-md text-gray font-semibold">
                  $190
                </p>
                <p className="text-md text-gray ml-2 opacity-60 line-through">
                  $399
                </p>
                <p className="text-md text-gray ml-2  text-green-400 font-semibold">
                  50% off
                </p>
              </div>
            </div>
        </div>
        <div className='lg:flex lg:space-x-10 pt-4 items-center text-start'>
            <IconButton>
                <RemoveCircleOutlineIcon/>
            </IconButton>
            <span className='py-1 px-7 border rounded-sm'>1</span>
            <IconButton className='opacity-80' sx={{color:'blue'}}>
                <AddCircleOutlineIcon/>
            </IconButton>
        <div>
            <Button className="text-blue opacity-80">remove</Button>
        </div>
        </div>
    </div>
  )
}

export default CartItems