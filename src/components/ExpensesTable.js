import ExpenseItemTable from './ExpenseItemTable';
import './css/ExpensesTable.css'

function ExpensesTable(props) {

    return (
        <div className="shoppingList">
            <div className="expense-grid">
                {
                    props.list.map((product, index) => {
                        if ((product.price < props.minPrice) || (product.price > props.maxPrice)) {
                            return null;
                        }
                        return (
                            <ExpenseItemTable
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                isCart={false}
                            />
                        )
                    })
                }
            </div>
        </div>

    );
}

export default ExpensesTable;
