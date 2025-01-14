import { GetItems } from "./HandleDB";
import { useState, useEffect } from 'react';
import HandleCartProducts from "./HandleCartProducts";

function CartPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const items = await GetItems();
            setData(items);
        }
        fetchData();
    }, []);
    return (
        <HandleCartProducts list={data} />
    )
}
export default CartPage;