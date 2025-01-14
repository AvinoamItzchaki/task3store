import {useState} from "react";
import './css/PriceFilter.css'

function PriceFilter(props) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value)
    }
    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value)
    }
    const applyFilterProducts = () => {
        props.updateMinPrice(minPrice)
        props.updateMaxPrice(maxPrice)
    }
    return (
        <div>
            <label>
                Min Price:
                <h>  </h>
                <input type="number" name="minPrice" min="0"
                       value={minPrice}
                       onChange={handleMinPriceChange}
                />
            </label>
            <label>
                Max Price:
                <h>  </h>
                <input type="number" name="maxPrice" min="0"
                       value={maxPrice}
                       onChange={handleMaxPriceChange}
                />
            </label>
            <h>                                              </h>
            <button className="buttonFilterProducts" onClick={applyFilterProducts}>Filter Products</button>
        </div>
    )
}

export default PriceFilter;