import React, { Component } from 'react';

class AddContact extends Component {

    state = {
        firstName: '',
        lastName: '',
        phoneNumber: ''
    };

    handleInputFirstName = (e) => {
        this.setState({ firstName: e.target.value })
    }
    
    handleInputLastName = (e) => {
        this.setState({ lastName: e.target.value })
    }

    handleInputPhoneNumber = (e) => {
        this.setState({ phoneNumber: e.target.value })
    }

    handleClick = () => {
        if(!this.state.firstName || !this.state.lastName || !this.state.phoneNumber)return
        this.props.onAdd(this.state)
        this.setState({
            firstName: '',
            lastName: '',
            phoneNumber: ''
        })
    }

    render() {
        return (
            <div className="add-contact">
                <input
                    value={this.state.firstName}
                    onChange={(e) => this.handleInputFirstName(e)}
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
                    type="number"
                    placeholder="Телефон"
                />
                <button onClick={this.handleClick}>add</button>
            </div>
        );
    }
}

export default AddContact;