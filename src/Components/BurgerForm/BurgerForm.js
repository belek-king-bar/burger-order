import React from 'react';
import IngredientsForm from './IngredientsForm/IngredientsForm.js';
import {availableIngredients} from "../../App";
import { Card } from 'reactstrap';


function BurgerForm(props) {
    return (
        <Card body inverse color="danger" className="container text-center mb-4 mt-4">
            <h4 className="mb-4">Цена: {props.total} </h4>
            <div className="m-0">

                {availableIngredients.map(item => {
                    return <IngredientsForm
                    key = {item.name}
                    label={item.label}
                    onChangeIngredient = {(event) => props.changeIngredient(item.name, event)}
                    isAddButtonDisabled = {() => props.isDisabled(item.name)}
                />
                })}

            </div>

        </Card>


    )
}



export default BurgerForm;



