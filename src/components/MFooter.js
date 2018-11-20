import React, { Component } from 'react';
import { Panel } from "react-bootstrap";
import './Footer.css';

export default class MFooter extends Component {
    render() {
        return (
            <Panel>
                <Panel.Body>&copy; {new Date().getFullYear()} Copyright &nbsp;{" Greentech Innovation Group, Mawlamyine"}</Panel.Body>
            </Panel>
        )
    }
}
