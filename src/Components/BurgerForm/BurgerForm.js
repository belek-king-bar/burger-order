import React from 'react';
import { Form, FormGroup} from 'reactstrap';
import IngredientsForm from './IngredientsForm/IngredientsForm.js';


function BurgerForm() {
    return <Form className="container">
        <FormGroup>
            <div>
                <IngredientsForm/>
            </div>
        </FormGroup>
    </Form>
}



export default BurgerForm;