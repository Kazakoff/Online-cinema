import React, {useState} from 'react';
import {Button, Col, Form, Modal} from 'react-bootstrap';
import PropTypes from 'prop-types';

function BtnAddFilm (props) {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        start: '',
        end: '',
        tags: '',
        remove: 'remove',
    });

    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

    const {title, description, price, start, end, tags } =  formData;

    const sda = () => {
        handleClose();
        props.addFilm(formData)
    };

    return (
      <>
        <Button variant='outline-info' onClick={handleShow}>
                Add Film
        </Button>

        <Modal size='lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Film</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label>Title</Form.Label></Col>
                  <Col sm={10}>
                    <Form.Control
                      name='title'
                      value={title}
                      onChange={e => updateFormData(e)}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}> <Form.Label>Description</Form.Label></Col>
                  <Col sm={10}>
                    <Form.Control
                      name='description'
                      value={description}
                      onChange={e => updateFormData(e)}
                      as='textarea'
                      rows="3"
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label>Price</Form.Label></Col>
                  <Col sm={10}>
                    <Form.Control
                      name='price'
                      value={price}
                      onChange={e => updateFormData(e)}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}> <Form.Label>Start</Form.Label></Col>
                  <Col sm={3}>
                    <Form.Control
                      name='start'
                      value={start}
                      onChange={e => updateFormData(e)}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}> <Form.Label>End</Form.Label></Col>
                  <Col sm={3}>
                    <Form.Control
                      name='end'
                      value={end}
                      onChange={e => updateFormData(e)}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label>Tags</Form.Label></Col>
                  <Col sm={10}>
                    <Form.Control
                      name='tags'
                      value={tags}
                      onChange={e => updateFormData(e)}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-secondary' onClick={handleClose}>
                        Close
            </Button>
            <Button variant='outline-success' onClick={() => sda()}>
                        Add Film
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

BtnAddFilm.propTypes = {
    addFilm: PropTypes.func,
};

export default BtnAddFilm;