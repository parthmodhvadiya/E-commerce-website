import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Button,Grid2, } from '@mui/material';
const OrderRateCard = () => {
  return (
    <div>
        <div className="p-4 shadow-md text-start mt-10 hover:shadow-xl">
          <Grid2 container className="justify-between items-center">
            <Grid2 item size={6}>
              <div className="flex space-x-1">
                <img
                  className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] bg-cover object-contain object-top"
                  src="https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                  alt="Model wearing plain black basic tee."
                />
                <div className="space-y-2 mt-3">
                  <p>Men Slim mid Rise Black Jeans</p>
                  <p className="space-x-10 ">
                    <span className="opacity-50 text-sm font-semibold">
                      Size: M
                    </span>
                    <span className="opacity-50 text-sm font-semibold">
                      Color: Black
                    </span>
                  </p>
                  <p>Seller: linaria</p>
                  <p>$199</p>
                </div>
              </div>
            </Grid2>
            <Grid2 item size={2.1}>
                <Button ><StarBorderIcon/> Rate & Review Product</Button>
            </Grid2>
          </Grid2>
        </div>
    </div>
  )
}

export default OrderRateCard