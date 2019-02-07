import React from 'react';
import { Button } from 'reactstrap';

function IngredientsForm(props) {
    return <div>

            <p>{props.label}</p>
            <Button disabled={props.isAddButtonDisabled()} type="submit" onClick={props.onChangeIngredient}>LESS</Button>
            <Button value="add" type="submit" onClick={props.onChangeIngredient}>MORE</Button>

    </div>
}



export default IngredientsForm;