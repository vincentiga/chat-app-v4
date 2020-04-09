import React from 'react'
import './Contact.css'


class Contact extends React.Component {
    constructor (props) {
        super (props)
        this.state = {online: props.online}
    }
    render(){
        return (
            <div className='Contact'>
                
                <img src={this.props.avatar} className='avatar' alt={this.props.avatar}></img>
                <h4 className='name'>{this.props.name}
                    <div className='status'>
                        <index className={this.state.online ? 'status-online' : 'status-offline'}></index>
                        <index onClick={event => {const newStatus = !this.state.online; this.setState({online: newStatus})}} className='status-text'>{this.state.online ? 'online' : 'offline'}</index>             
                    </div>
                </h4>
           </div>


        )}}

export default Contact;