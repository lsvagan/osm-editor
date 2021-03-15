import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './EditExistingPoiInput.css';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { editXml, postNode } from './app_store/actions';

class EditExistingPoiInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xmlInputError: false
        }
    }

    inputErrorHandler = (e) => {
        e.preventDefault();
        console.log(typeof(this.props.xml.xmlString));
        console.log(this.props.xml.xmlString);

        if(!this.props.xml) {
            //input is empty
            this.setState( { xmlInputError: true } );
        } else {

            //check xml format
            let parser = new DOMParser();
            let parsedXml = parser.parseFromString(this.props.xml.xmlString, 'application/xml');
            console.log(parsedXml);
            console.log(parsedXml.getElementsByTagName('parsererror')[0]);
            let parseError = parsedXml.getElementsByTagName('parsererror')[0];

            if(!parseError) {
                this.setState( { xmlInputError: false }, this.submitXml );
            } else {
                this.setState( { xmlInputError: true } );
            }

        }
        
    }

    submitXml = () => {
        console.log('submited! ', this.props.xml);
        this.props.postNode(this.props.xml);
    }

    render() {

        return (

            <Form>
    
                <Row>
                    <Col md={8}>
                        <Form.Label>xml:</Form.Label>
                        <Form.Control
                        as="textarea"
                        rows={10}
                        className = { this.state.xmlInputError ? 'xmlInputError' : '' } 
                        type="text" 
                        id="xmlOfExistingPoi"
                        placeholder="Click on map and select node for edit"
                        value = { this.props.xml.xmlString }
                        onChange = { this.props.editXml } 
                        />
                    </Col>
                </Row>
                <Button 
                    className = "mt-3 mb-3"
                    onClick = {this.inputErrorHandler}
                > 
                Save
                </Button>
        
            </Form>
    
        )

    }
    
}

const mapStateToProps = ( state ) => {
    return {
        xml: state.xmlForEditReducer.xml
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        editXml: (e) => { dispatch(editXml(e)) },
        postNode: (xml) => { dispatch(postNode(xml, ownProps)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditExistingPoiInput));
