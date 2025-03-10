import React from 'react'
import { Grid2 } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useNavigate } from 'react-router';
const OrderCard = () => {
    const navigate = useNavigate();
    const handleOnClick = ()=>
    {
        navigate(`/account/order/${5}`)
    }
  return (
    <div onClick={()=>handleOnClick()}>
        <Grid2 container className="cursor-pointer justify-between border p-3 mt-4 shadow-lg hover:shadow-2xl">
            <Grid2 item size={6}>
                <div className='flex space-x-1'>
                <div>
                <img className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] bg-cover object-contain object-top' src="https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Model wearing plain black basic tee." />
            </div>
            <div className="space-y-2 mt-3">
              <p className=''>Men Slim mid Rise Black Jeans</p>
              <p className='opacity-50 text-sm font-semibold'>Size: M</p>
              <p className='opacity-50 text-sm font-semibold'>Color: Black</p>
              </div>
                </div>
            </Grid2>
            <Grid2 size={2} >
                <p className='mt-3'>$199</p>
            </Grid2>
            <Grid2 item size={4} className="mt-3">
                {true && <><p className='flex flex-row space-x-1'>
                    <RadioButtonCheckedIcon className='text-sm text-green-500'/>
                    <span className='text-sm'>Delivered On March 03
                        <br />
                        <span className='text-xs text-gray-600 opacity-90'>Your Item Has Been  Deliverd</span>
                    </span>
                </p>
                </>}
                {false && <p>
                    <span>Delivered On March 03</span>
                </p>}
            </Grid2>
        </Grid2>

    </div>
  )
}

export default OrderCard