import React from 'react'
import { Grid2,Box, TextField } from '@mui/material';
import AdressCard from './AdressCard';

const DelivaryAdressForm = () => {
    const handleSubmit = (e)=>
    {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get('firstName'),
            lastname: data.get('lastName'),
            address: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            postalcode: data.get('postalcode'),
            phonenumber: data.get('phonenumber')
        }
        console.log(address);
    }
  return (
    <div>
        <Grid2 container spacing={4} className='justify-between'>
            <Grid2 item className='w-full lg:max-w-[40rem] border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                <div className='p-5 py-7 cursor-pointer'>
                    <AdressCard/>
                    <button
                  type="submit"
                  className="mt-10 flex items-center rounded-sm justify-center border border-transparent bg-indigo-600 px-4 py-1 text-sm font-normal text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                >
                  Delivar Here
                </button>
                </div>
            </Grid2>
            
        <Grid2 item className='w-full lg:w-6/12'>
            <Box className='border rounded-e-md shadow-md p-5'>
                <form onSubmit={handleSubmit}>
                    <Grid2 container  className='justify-between'>
                        <Grid2 item xs={12} sm={6} className='w-full lg:w-6/12 my-2 px-2'>
                            <TextField  required className='w-full' id="firstName" name='firstName' label='First-Name' fullwidth autoComplete='given-name'/>
                        </Grid2>
                        <Grid2 item xs={12} sm={6} className='w-full lg:w-6/12 my-2 px-2'>
                        <TextField  required id="lastName" className='w-full' name='lastName' label='Last-Name' fullwidth autoComplete='given-name'/>
                        </Grid2>
                        <Grid2 item xs={12} className='w-full my-2 px-2'>
                        <TextField  required id="address" className='w-full' name='address' label='Address' fullwidth 
                        multiline rows={6}
                        autoComplete='given-name'/>
                        </Grid2>
                        <Grid2 item xs={12} sm={6} className='w-full lg:w-6/12 my-2 px-2'>
                            <TextField  required className='w-full' id="city" name='city' label='City' fullwidth autoComplete='given-name'/>
                        </Grid2>
                        <Grid2 item xs={12} sm={6} className='w-full lg:w-6/12 my-2 px-2'>
                        <TextField  required id="state" className='w-full' name='state' label='State' fullwidth autoComplete='given-name'/>
                        </Grid2>
                        <Grid2 item xs={12} sm={6} className='w-full lg:w-6/12 my-2 px-2'>
                            <TextField  required className='w-full' id="postalcode" name='postalcode' label='PostalCode' fullwidth autoComplete='given-name'/>
                        </Grid2>
                        <Grid2 item xs={12} sm={6} className='w-full lg:w-6/12 my-2 px-2'>
                        <TextField  required id="phonenumber" className='w-full' name='phonenumber' label='Phone-number' fullwidth autoComplete='given-name'/>
                        </Grid2>
                        <button
                  type="submit"
                  className="mt-3 flex items-center rounded-sm justify-center border border-transparent bg-indigo-600 px-4 py-1 text-sm font-normal text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                >
                  Delivar Here
                </button>
                    </Grid2>
                </form>
            </Box>
        </Grid2>
        </Grid2>

    </div>
  )
}

export default DelivaryAdressForm