import React from 'react';
import { Button, Form, FormGroup} from 'reactstrap';

function IngredientsForm(props) {
    return <Form className="container">
        <FormGroup>
            <p>{props.name}</p>
            <Button disabled={props.isAddButtonDisabled} type="submit" onClick={props.Remove}>LESS</Button>
            <Button type="submit" onClick={props.Add}>MORE</Button>
        </FormGroup>
    </Form>
}



export default IngredientsForm;