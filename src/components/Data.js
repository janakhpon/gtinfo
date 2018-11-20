import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import { Button } from 'react-bootstrap';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import base from './base';
import './Data.css';









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
        let value = this.getInput.value;
        let newItems = this.state.items;
        newItems.push(value);

        this.setState({
            items: newItems
        })
        this.getInput.value = ''
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
                <CardHeader >
                    <Col smOffset={5}>
                        <h4>Membership Data Collection</h4>
                        <br />
                    </Col>

                </CardHeader>
                <CardBody>
                    <Paper >
                        <Table className="root">
                            <TableHead>
                                <TableRow>
                                    <TableCell><h5>Name</h5></TableCell>
                                    <TableCell ><h5>DOB </h5></TableCell>
                                    <TableCell ><h5>Language</h5></TableCell>
                                    <TableCell ><h5>Experience</h5></TableCell>
                                    <TableCell ><h5>Started Date</h5></TableCell>
                                    <TableCell ><h5>Rank</h5></TableCell>
                                    <TableCell ><h5>Update</h5></TableCell>
                                    <TableCell ><h5>Remove</h5></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                              

                                    {this.state.items.map((bdate, experience, language, name, rank, sdate, index) => {
                                        return <TableRow key={index}>

                                            <TableCell><h6>{name}</h6></TableCell>
                                            <TableCell><h6>{bdate}</h6></TableCell>
                                            <TableCell><h6>{language}</h6></TableCell>
                                            <TableCell><h6>{experience}</h6></TableCell>
                                            <TableCell><h6>{sdate}</h6></TableCell>
                                            <TableCell><h6>{rank}</h6></TableCell>
                                            <TableCell><Button type="submit" bsStyle="warning" bsSize="sm">edit</Button></TableCell>
                                            <TableCell><Button type="submit" bsStyle="danger" bsSize="sm">remove</Button></TableCell>

                                        </TableRow>

                                    })}

                                


                            </TableBody>
                        </Table>
                    </Paper>

                </CardBody>
                <CardFooter>


                </CardFooter>
            </Card>

        )
        
    }
}



