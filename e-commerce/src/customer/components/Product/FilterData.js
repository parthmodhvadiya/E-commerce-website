export const  filterData = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: false },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'S', label: 'S', checked: false },
        { value: 'M', label: 'M', checked: false },
        { value: 'l', label: 'l', checked: false },
        { value: 'xl', label: 'xl', checked: false },
        { value: '2xl', label: '2xl', checked: false },
        { value: '3xl', label: '3xl', checked: false },
      ],
    },
  ]

export const singleFilters = [
    {
        id: "price",
        name: "Price",
        options: [
            {value:"159-399",label:"₹159 To ₹399"},
            {value:"399-999",label:"₹399 To ₹999"},
            {value:"999-1999",label:"₹399 To ₹1999"},
            {value:"1999-2999",label:"₹1999 To ₹2999"},
            {value:"3999-4999",label:"₹3999 To ₹4999"}
        ]
    },
    {
        id:"discount",
        name:"Discount Range",
        options:[
            {value:"10",label:"10% and Above"},
            {value:"20",label:"20% and Above"},
            {value:"30",label:"30% and Above"},
            {value:"40",label:"40% and Above"},
            {value:"50",label:"50% and Above"},
            {value:"60",label:"60% and Above"},
            {value:"70",label:"70% and Above"},
            {value:"80",label:"80% and Above"}
        ]
    },
    {
        id:"availability",
        name:"Available",
        options:[
            {value:"in_Stock",label:"In Stock"},
            {value:"out_of_Stock", label:"Out of Stock"}
        ]
    }
]
