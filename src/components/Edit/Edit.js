import React, { Component } from 'react';
import './Edit.css'

class Edit extends Component {

    state = {
        firstName: '',
        lastName: '',
        phoneNumber: ''
    }

    shouldComponentUpdate = (nextProps) => {
        if(nextProps.editId !== this.props.editId) {
            this.changeState(nextProps.data, nextProps.editId)
            console.log(nextProps.data)
        }
        return true
    }

    changeState = (data, id) => {
        const contact = data[id]
        this.setState({...contact})
        // this.setState({
        //     firstName: contact.firstName,
        //     lastName: contact.lastName,
        //     phoneNumber: contact.phoneNumber
        // })
    }

    handleInputFristName = (e) => {
        this.setState({ firstName: e.target.value })
    }

    handleInputLastName = (e) => {
        this.setState({ lastName: e.target.value })
    }

    handleInputPhoneNumber = (e) => {
        this.setState({ phoneNumber: e.target.value })
    }

    handleClose = () => {
        this.props.onOpenEditor(this.props.editId)
    }

    handleSave = () => {
        if(!this.state.firstName || !this.state.lastName || !this.state.phoneNumber)return
        this.props.onSaveEdit(this.state)
        this.props.onOpenEditor(this.props.editId)
    }

    render() {
        return (
            <>
                {this.props.isOpen ? (
                    <div className="modal-window">
                        <div className="modal-back">
                            <input
                                value={this.state.firstName}
                                onChange={(e) => this.handleInputFristName(e)}
                                placeholder="Имя"
                            />
                            <input
                                value={this.state.lastName}
                                onChange={(e) => this.handleInputLastName(e)}
                                placeholder="Фамилия"
                            />
                            <input
                                value={this.state.phoneNumber}
                                onChange={(e) => this.handleInputPhoneNumber(e)}
                                placeholder="Телефон"
                            />
                            <div>
                                <button onClick={this.handleClose}>cancel</button>
                                <button onClick={this.handleSave}>save</button>
                            </div>
                        </div>
                    </div>
                ) : false}
            </>
        );
    }
}

export default Edit;