import { Grid2 } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard';


const Order = () => {
    const option = [
        {lable:"On The Way", value: "on_the_way"},
        {lable:"Delevered", value: "delevered"},
        {lable:"Cancelled", value: "cancelled"},
        {lable:"Returned", value: "returned"}
    ];
  return (
    <div>
        <Grid2 container className="justify-between text-start mt-10 px-5 lg:px-20">
            <Grid2 item size={2.5}>
                <div className='h-auto shodow-lg bg-white p-5 border w-full  sticky top-5'>
                    <h1 className='font-bold text-lg'>Filter</h1>
                    <div className='space-y-4 my-5'>
                        <h1 className='font-semibold'>ORDER STATUS</h1>
                    </div>
                    {
                        option.map((item)=>
                        (

                            <div className='flex space-x-2 my-3 items-center' >
                            <input type="checkbox" defaultChecked={item.value} className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'/>
                            <label className="ml-3 text-sm text-semibold text-grey-600" htmlFor={item.value}>{item.lable}</label>
                        </div>
                        ))
                    }
                </div>
            </Grid2>
            <Grid2 item size={9}>
                {
                    [1,1,1,1,1].map((item)=><OrderCard/>)
                }
            </Grid2>
        </Grid2>
    </div>
  )
}

export default Order