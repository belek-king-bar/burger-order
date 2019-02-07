import React from 'react';
import { Button } from 'reactstrap';

function IngredientsForm(props) {
    return <div>

            <h4>{props.label}</h4>
            <Button disabled={props.isAddButtonDisabled()} type="submit" onClick={props.onChangeIngredient}>LESS</Button>
            <Button className="ml-3" value="add" type="submit" onClick={props.onChangeIngredient}>MORE</Button>

    </div>
}



export default IngredientsForm;