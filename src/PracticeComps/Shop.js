import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Shop() {

    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')

        const items = await data.json()
        console.log(items.data)
        setItems(items.data)
    }

    return (
        <div>
            {items.map(array=> (
                <h1 key={array.itemid}>
                    <Link to={`/shop/${array.itemid}`}>{array.item.name}</Link>
                    </h1>
            )
            )}
            
        </div>
    )
}

export default Shop