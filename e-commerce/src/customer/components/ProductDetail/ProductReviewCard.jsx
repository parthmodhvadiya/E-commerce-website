import React from 'react'
import { Grid2,Avatar,Box,Rating } from '@mui/material'
const ProductReviewCard = () => {
  return (
    <div>
        <Grid2 container spacing={2} gap={3} className='text-start'>
            <Grid2 item xs={1}>
                <Box>
                    <Avatar className='text-white w-[56] h-[56] opacity-80' sx={{bgcolor:'blue'}}>R</Avatar>
                </Box>
            </Grid2>
            <Grid2 item xs={9}>
                <div classroom='space-y-2  '>
                    <div>
                        <p>Ram</p>
                        <p>April 5, 2023</p>
                    </div>
                    <Rating name="half-rating" value={4.5} precision={.1} readOnly/>
                    <p >nice Product, i love this Product. i recommanded all of you to buy it once and use it </p>
                </div>
                
            </Grid2>
        </Grid2>
    </div>
  )
}

export default ProductReviewCard