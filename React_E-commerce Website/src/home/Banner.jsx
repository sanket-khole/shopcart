import React, { useState } from 'react'
import productData from '../products.json'

const title = (
    <h2>Search Your One From <span>Thousand</span> of Products</h2>
)

const desc = "We have the largest collection of products"

const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million Customers",
    },
    {
        iconName: "icofont-notification",
        text: "More then 2000 Marchent",
    },
    {
        iconName: "icofont-globe",
        text: "Buy Anything Online",
    },
];

const Banner = () => {
    const [searchInput, setSearchInput]= useState("");
    const [filterProducts, setfilterProducts]= useState(productData);

    // console.log(productData)
   
    // search functionality

    const handleSearch = e => {
        // console.log(e.target.value)
        const searchTerm = e.target.value;
        setSearchInput(searchTerm)
    }

    return (
        <div className='banner-section style-4'>
            <div className="contaner">
                <div className="banner-content">
                    {title}
                    <form>
                        <input type="text" name='search' placeholder='Search your Product' value={searchInput} onChange={handleSearch} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Banner;