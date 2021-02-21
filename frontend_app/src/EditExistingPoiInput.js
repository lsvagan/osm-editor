import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';
import { editXml } from './app_store/actions';

function EditExistingPoiInput ( props ) {

    return (

        <Form>

            <Row>
                <Col md={8}>
                    <Form.Label>xml:</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={10}
                    // className = {} 
                    type="text" 
                    id="xmlOfExistingPoi"
                    placeholder="Click on map and select node for edit"
                    value = { props.xml }
                    onChange = { props.editXml } 
                    />
                </Col>
            </Row>
            <Button className = "mt-3 mb-3"> Save </Button>
    
        </Form>

    )
}

const mapStateToProps = ( state ) => {
    return {
        xml: state.xmlForEditReducer.xml
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        editXml: (e) => { dispatch(editXml(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExistingPoiInput);
