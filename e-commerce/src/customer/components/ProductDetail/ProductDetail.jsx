"use client";

import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { Rating, Grid2 ,Box,LinearProgress} from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { Mens_kurta } from "../Data/Mens_kurta";
import ProductCard from "../Product/ProductCard";
import { useNavigate } from "react-router";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail() {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                alt={product.images[0].alt}
                src={product.images[0].src}
                className="hidden size-full rounded-lg object-cover lg:block"
              />
            </div>
            <div className="flex flex-row space-x-5 justify-center mt-4">
              {product.images.map((image) => (
                <img
                  alt={image.alt}
                  src={image.src}
                  className="aspect-3/2 w-full rounded-lg object-cover max-w-[5rem] max-h-[5rem]"
                />
              ))}
            </div>
          </div>
          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 text-start lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-xl font-semibold text-grey-900">
                UniversalOutfit
              </h1>
              <h1>Casual Puff Sleeve Solid Woman White Top</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <div className="flex flex-row space-x-3 mt-4">
                <h2 className="sr-only">Product information</h2>
                <p className="text-lg lg:text-xl text-gray font-semibold">
                  $190
                </p>
                <p className="text-lg lg:text-xl text-gray-400 opacity-80 line-through">
                  $399
                </p>
                <p className="text-lg lg:text-xl text-green-500 font-semibold">
                  50% off
                </p>
              </div>
              {/* Reviews */}
              <div className="mt-6">
                <div className="flex flex-row space-x-3">
                  <Rating
                    name="read-only"
                    value={4.5}
                    precision={0.1}
                    readOnly
                  />
                  <p className="ml-3 text-sm/6 font-medium opacity-50 text-indigo-600">
                    5465 Ratings
                  </p>
                  <p className="ml-3  text-sm/6 font-medium text-indigo-600 hover:text-indigo-500">
                    3874 Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <fieldset aria-label="Choose a color" className="mt-4">
                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="flex items-center gap-x-3"
                    >
                      {product.colors.map((color) => (
                        <Radio
                          key={color.name}
                          value={color}
                          aria-label={color.name}
                          className={classNames(
                            color.selectedClass,
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1"
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "size-8 rounded-full border border-black/10"
                            )}
                          />
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {product.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-xs"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6"
                          )}
                        >
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 size-full stroke-2 text-gray-200"
                              >
                                <line
                                  x1={0}
                                  x2={100}
                                  y1={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                <button
                  type="submit"
                  onClick={()=>navigate('/cart')}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Rating and Reveiws */}
        <section>
          <h1 className="font-semibold text-xl pb-4 px-6 text-start">
            Recent Reviews and Ratings
          </h1>
          <div className="border p-5">
            <Grid2 container spacing={37}>
              <Grid2 item xs={7}>
                <div className="space-y-5">
                  {[1, 1, 1].map((item) => (
                    <ProductReviewCard />
                  ))}
                </div>
              </Grid2>

              <Grid2 item xs={10} className="text-start pt-5">
                <h1 className="text-2xl  font-semibold pb-2">Product Rating</h1>
                <div className="flex flex-row space-x-2">
                  <Rating value={4.5} precision={.5} readOnly/>
                  <p className="opacity-60">5495 Ratings</p>
                </div>
                <Box className="mt-10 justify-items-start">
                    <Grid2 container className="justify-center items-center mt-3 space-x-4 text-start ">
                        <Grid2 item xs={2} className="w-[5rem]">
                            <p>Excellent</p>
                        </Grid2>
                        <Grid2 item xs={10}>
                            <LinearProgress sx={{bgcolor:'#d0d0d0',height:7,width:'20rem',borderRadius:10}} variant="determinate" value={65} color="success"/>
                        </Grid2>
                    </Grid2>
                    <Grid2 container className="justify-center items-center mt-3 space-x-4"  >
                        <Grid2 item xs={2} className="w-[5rem]">
                            <p>Very Good</p>
                        </Grid2>
                        <Grid2 item xs={10}>
                            <LinearProgress sx={{bgcolor:'#d0d0d0',height:7,width:'20rem',borderRadius:10}} variant="determinate" value={50} color="success"/>
                        </Grid2>
                    </Grid2>
                    <Grid2 container className="justify-center items-center mt-3 space-x-4">
                        <Grid2 item xs={2} className="w-[5rem]">
                            <p>Good</p>
                        </Grid2>
                        <Grid2 item xs={10}>
                        <LinearProgress sx={{
                  backgroundColor: 'white',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: 'yellow'
                  },bgcolor:'#d0d0d0',height:7,width:'20rem',borderRadius:10
                }}  variant="determinate" value={40} />
                        </Grid2>
                    </Grid2>
                    <Grid2 container className="justify-center items-center mt-3 space-x-4"  >
                        <Grid2 item xs={2} className="w-[5rem]">
                            <p>Average</p>
                        </Grid2>
                        <Grid2 item xs={10}>
                            <LinearProgress sx={{
                  backgroundColor: 'white',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: 'orange'
                  },bgcolor:'#d0d0d0',height:7,width:'20rem',borderRadius:10
                }}  variant="determinate" value={25} />
                        </Grid2>
                    </Grid2>
                    <Grid2 container className="justify-center items-center mt-3 space-x-4"  >
                        <Grid2 item xs={2} className="w-[5rem]">
                            <p>Poor</p>
                        </Grid2>
                        <Grid2 item xs={10}>
                        <LinearProgress sx={{
                  backgroundColor: 'white',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: 'red'
                  },bgcolor:'#d0d0d0',height:7,width:'20rem',borderRadius:10
                }}  variant="determinate" value={10} />
                        </Grid2>
                    </Grid2>
                </Box>
              </Grid2>
            </Grid2>
          </div>
        </section>
        
          {/* Similar Products */}
          <section className="pt-10 py-5">
                  <h1 className="lg:text-xl pb-4 px-6 font-semibold text-start">Similar Products</h1>
                  <Grid2 container gap={2} className="justify-center">
                    {
                        Mens_kurta.map((item)=><Grid2 item xs={2}><ProductCard Product={item}/></Grid2>)
                    }
                    
                  </Grid2>
          </section>
      </div>
    </div>
  );
}
