import React, { Component } from 'react';
import axios from 'axios';

import List from '../List/List';
import AddContact from '../AddContact/AddContact';
import Edit from '../Edit/Edit';
import Loader from '../Loader/Loader';

class ContactBook extends Component {

  state = {
    data: [],
    editId: null,
    isOpen: false,
    loading: true
  }

  componentDidMount() {
    this.fetchContact();
  }

  fetchContact = async () => {
    const { data } = await axios.get('http://localhost:8000/contacts');
    setTimeout(() => {
      this.setState({ data });
      this.setState({ loading: false })
    }, 200)

    // const result = await axios.get('http://localhost:8000/contacts');
    // this.setState({ data: result.data })
  }

  handleAdd = async (newContact) => {
    await axios.post('http://localhost:8000/contacts', newContact);
    this.fetchContact();
  }

  handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/contacts/${id}`);
    this.fetchContact();
  }

  handleOpenEditor = (index) => {
    this.setState({
      editId: index,
      isOpen: !this.state.isOpen
    })
  }

  handleSaveEdit = async (editedContact) => {
    await axios.put(`http://localhost:8000/contacts/${editedContact.id}`, editedContact);
    this.fetchContact();
  }

  checkPage =(currentItem) => this.props.page === undefined || this.props.page === currentItem;

  render() {
    return (
      <div className="contactBook">

        {this.checkPage('ADD') && (
            <AddContact
            data={this.state.data}
            onAdd={this.handleAdd}
            />
        )}

        {this.state.loading && <Loader className="loader"/>}

        {this.checkPage('LIST') && (
            <>{this.state.data.length ? (
                <List
                    data={this.state.data}
                    onDelete={this.handleDelete}
                    onOpenEditor={this.handleOpenEditor}
                />
            ) : this.state.loading ? null : (<p className="empty-list">Список контактов пуст!</p>)}</>
        )}

        <Edit
          data={this.state.data}
          isOpen={this.state.isOpen}
          editId={this.state.editId}
          onOpenEditor={this.handleOpenEditor}
          onSaveEdit={this.handleSaveEdit}
        />

      </div>
    );
  }
}

export default ContactBook;