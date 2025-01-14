import ExpensesTable from "./ExpensesTable";
import PriceFilter from "./PriceFilter";
import { useState, useEffect } from "react";

function ShoppingList() {
    const [list, setList] = useState([])
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await fetch('https://fakestoreapi.in/api/products', {
                    method: 'GET',
                    headers: {
                    }
                })
                const result = await response.json();
                const resultProducts = result.products;
                setList(resultProducts);
            }
            catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        fetchTask();
    }, [])



    return (
        <div className="shoppingList">
            <div >
                <label >SHOP</label>
                <PriceFilter updateMinPrice={setMinPrice} updateMaxPrice={setMaxPrice}/>
            </div>
            <ExpensesTable list={list} minPrice={minPrice} maxPrice={maxPrice} />
        </div>
    )
}

export default ShoppingList;
