import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';
import { deletePoi } from './app_store/actions';

const RemovingDialog = (props) => {
    
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);   

    return (
        <div>
            <Button size="sm" variant="outline-danger" onClick={handleShow} >
                Remove
            </Button>

            <Modal 
            show={show} 
            onHide={handleClose} 
            animation={false} 
            centered>
                <Modal.Header closeButton>Are you sure that you want to remove POI?</Modal.Header>
                <Modal.Body>
                    <em>Place name: </em> <strong>{props.poiName}</strong> <br />
                    <em>Street: </em> <strong>{`${props.poiStreet} ${props.poiHousenumber}`}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                            Cancel
                    </Button>
                    <Button variant="primary" onClick={() => {handleClose(); props.deletePoi(props.poiId)}}>
                        Remove POI
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        deletePoi: (poiId) => dispatch(deletePoi(poiId))
    }
}

export default connect(null, mapDispatchToProps)(RemovingDialog);