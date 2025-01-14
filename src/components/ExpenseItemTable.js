import './css/ExpenseItemTable.css'
import React from 'react';
import { Img } from 'react-image';
import {AddItemToDB} from "./HandleDB";

function ExpenseItemTable(props) {
    return (
        <td>
            <div className='expense-item'>
                <Img
                    src={props.image}
                    alt={props.title}
                    style={{width: "150px", height: "150px", objectFit: "cover", border: "1px solid #ccc"}}
                />
                <div className='expense-item__title'><h3>{props.title} </h3></div>

                <div className="container">
                    <div className="row">
                        <div> </div>
                    </div>

                    <div className="row">
                        <div className='expense-item__price'>  {props.price}$</div>
                    </div>

                    <div className="row">
                        {!props.isCart && (
                            <button
                                onClick={() => {
                                    AddItemToDB(props.image, props.title, props.price)
                                    alert('item added to cart!')
                                }}
                            >
                                Add To Cart
                            </button>
                        )}
                    </div>
                </div>



            </div>
        </td>

    );
}

export default ExpenseItemTable;
