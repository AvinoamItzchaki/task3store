import ExpenseItemTable from "./ExpenseItemTable";
import { ClearCollection } from "./HandleDB";
import './css/ExpensesTable.css'

function HandleCartProducts(props) {
    let total = props.list.reduce((sum, product) => {
        sum += product.price * product.count;
        return sum;
    }, 0);
    return (
        <div className="shoppingList">
            <div className='expense-grid-to-cart'>
                {
                    props.list.map((item, index) => {
                        return (
                            <ExpenseItemTable
                                image={item.image}
                                title={item.title}
                                count={item.count}
                                price={item.price}
                                isCart={true}
                            />
                        )
                    })
                }
            </div>
            <div>
                <br></br>
                <label>Total is: {total.toFixed(3)}$</label>
                <br></br>
                <button className='purchase now button'>PURCHASE NOW</button>
                <button className='delete-cart-button' onClick={() => {
                    const clear = async () => {
                        await ClearCollection();
                        alert('cart cleared!');
                        window.location.reload();
                    }
                    clear()
                }}>CLEAR SHOPPING CART</button>
            </div>
        </div>
    )
}

export default HandleCartProducts;