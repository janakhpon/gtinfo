import React, { Component } from 'react'
import { FormGroup, Col, ControlLabel, Checkbox, Button } from 'react-bootstrap';
import { Card } from 'reactstrap';
import './Register.css';
import base from './base';

export default class Register extends Component {


    constructor() {
        super();
        this.state = {
            items: [],
            editing: false,
            index: null,
            loading: true
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.edit = this.edit.bind(this);
    }

    handleAdd(e) {

        e.preventDefault()
        let addinputs = document.getElementsByClassName("form-control");
        let newData = {};


        for (let i = 0, len = addinputs.length; i < len; i++) {

            let key = addinputs[i].getAttribute('data-key');
            let value = addinputs[i].value;
            newData[key] = value;
        }

        let newItems = this.state.items;
        newItems.push(newData);

        this.setState({
            items: newItems
        })






        this.getName.value = ''
        this.getDate.value = ''
        this.getLanguage.value = ''
        this.getRank.value = ''
        this.getExperience.value = ''
        this.getSdate.value = ''
    }

    handleRemove(index) {
        let newItems = this.state.items;
        newItems.splice(index, 1);
        this.setState({
            items: newItems
        })
    }

    handleEdit(index) {
        this.setState({
            index: index,
            editing: true
        })
        this.getInput.value = this.state.items[index]

    }

    edit(e) {
        e.preventDefault();
        let index = this.state.index;
        let newItems = this.state.items;
        newItems[index] = this.getInput.value;
        this.setState({
            items: newItems,
            editing: false
        })
        this.getInput.value = '';
    }

    componentDidMount() {
        base.syncState('items', {
            context: this,
            state: 'items',
            asArray: true,
            then() {
                this.setState({ loading: false })
            }
        })
    }



    render() {
        return (

            <Card body outline color="success">

                <form onSubmit={this.handleAdd}>
                    <div className="name">
                        <FormGroup className="name" controlId="name">

                            <Col md={2}></Col>
                            <Col md={2}>
                                <ControlLabel className="aligntad" > Dev Name   </ControlLabel>
                            </Col>
                            <Col md={6}>
                                <input className="form-control" placeholder="Developer Name" data-key="name" type="text" required ref={(input) => this.getName = input} />
                            </Col>


                        </FormGroup>
                    </div>


                    <br />
                    <br />

                    <div>
                        <FormGroup className="bdate" controlId="bdate">

                            <Col md={2}></Col>
                            <Col md={2}>
                                <ControlLabel> Birth Date  </ControlLabel>
                            </Col>
                            <Col md={6}>
                                <input className="form-control" placeholder="Birth date" data-key="bdate" type="date" required ref={(input) => this.getDate = input} />
                            </Col>


                        </FormGroup>

                    </div>

                    <br />
                    <br />

                    <div className="language">
                        <FormGroup className="language" controlId="language">

                            <Col md={2}></Col>
                            <Col md={2}>
                                <ControlLabel> Using Language </ControlLabel>
                            </Col>
                            <Col md={6}>
                            <input className="form-control" placeholder="language" data-key="language" type="text" required ref={(input) => this.getLanguage = input} />
                            </Col>


                        </FormGroup>
                    </div>


                    <br />
                    <br />

                    <div className="experience">
                        <FormGroup className="experience" controlId="experience">

                            <Col md={2}></Col>
                            <Col md={2}>
                                <ControlLabel> Job Experience  </ControlLabel>
                            </Col>
                            <Col md={6}>
                                 <input className="form-control" placeholder="experience" data-key="experience" type="text" required ref={(input) => this.getExperience = input} />
                            </Col>


                        </FormGroup>
                    </div>


                    <br />
                    <br />

                    <div className="sdate">
                        <FormGroup className="sdate" controlId="sdate">

                            <Col md={2}></Col>
                            <Col md={2}>
                                <ControlLabel textAlign="right"> Started Date </ControlLabel>
                            </Col>
                            <Col md={6}>
                            <input className="form-control" placeholder="started date" data-key="sdate" type="date" required ref={(input) => this.getSdate = input} />
                            </Col>


                        </FormGroup>
                    </div>


                    <br />
                    <br />


                    <div className="rank">
                        <FormGroup className="rank" controlId="rank">

                            <Col md={2}></Col>
                            <Col md={2}>
                                <ControlLabel> Gained Rank </ControlLabel>
                            </Col>
                            <Col md={6}>
                            <input className="form-control" placeholder="gained rank" data-key="rank" type="text" required ref={(input) => this.getRank = input} />
                            </Col>


                        </FormGroup>
                    </div>


                    <br />
                    <br />


                    <FormGroup>
                        <Col mdOffset={4} md={8}>
                            <Checkbox validationState="success">Get group event notifications </Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col mdOffset={4} md={8}>
                            <Button type="submit" bsStyle="success">register</Button>
                        </Col>
                    </FormGroup>
                </form>

            </Card>

        )
    }
}
