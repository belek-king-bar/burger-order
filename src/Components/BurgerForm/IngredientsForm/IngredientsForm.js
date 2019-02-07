import React from 'react';
import { Button, Row, Col} from 'reactstrap';

function IngredientsForm(props) {
    return <Row>
            <Col className="text-right">
                <h4>{props.label}</h4>
            </Col>
            <Col className="m-0 mb-2" xs={2}>
                <Button disabled={props.isAddButtonDisabled()} type="submit" onClick={props.onChangeIngredient}>LESS</Button>
            </Col>
            <Col className="text-left m-0 mb-2">
                <Button value="add" type="submit" onClick={props.onChangeIngredient}>MORE</Button>
            </Col>

    </Row>
}



export default IngredientsForm;