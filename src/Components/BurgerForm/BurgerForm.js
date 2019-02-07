import React from 'react';
import IngredientsForm from './IngredientsForm/IngredientsForm.js';
import {availableIngredients} from "../../App";


function BurgerForm(props) {
    return (
        <div>
            <h3>Current Price: {props.total} </h3>
            <div>

                {availableIngredients.map(item => {
                    return <IngredientsForm
                    key = {item.name}
                    label={item.label}
                    onChangeIngredient = {(event) => props.changeIngredient(item.name, event)}
                    isAddButtonDisabled = {() => props.isDisabled(item.name)}
                />
                })}

            </div>

        </div>


    )
}



export default BurgerForm;



