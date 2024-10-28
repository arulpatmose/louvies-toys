import React, { Component } from 'react';
import { notification } from 'antd';
class WhatsAppNumber extends Component {
    constructor(props) {
        super(props);
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    render() {
        return (
            <div>
                <a href="#" onClick={this.handleFeatureWillUpdate.bind(this)}>
                    <img src="/static/img/icons/whatsapp.png" alt="louvie " />
                    &nbsp; +123 4564564565
                </a>
            </div>
        );
    }
}

export default WhatsAppNumber;
