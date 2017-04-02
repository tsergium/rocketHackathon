import React, { Component } from 'react'

class Modal extends Component {

    constructor (props) {
        super(props);
        this.state = { modalActive: false }
    }

    openModal () {
        this.setState({ modalActive: true })
    }

    closeModal () {
        this.setState({ modalActive: false })
    }

    render () {
        return (
            <div>
                <a onClick={this.openModal.bind(this)}>
                    <img className="cat-face" src={this.props.image} />
                </a>

                {this.state.modalActive && (
                    <div className='modal-dialog'>
                        <a title='Close' onClick={this.closeModal.bind(this)}>X</a>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.description}</p>
                        <p>{this.props.duration}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default Modal;