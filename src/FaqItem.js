import React, { Component } from 'react';

class FaqItem extends Component {
    state = {
        isOpened: false,
        isOpened2: false
    }

    expand = () => {
        this.setState({ isOpened: !this.state.isOpened })
    }

    expandMore = () => {
        this.setState({ isOpened2: !this.state.isOpened2 })
    }

    render() {
        return (

            <article id="faq">
                <div className="wrap">
                    <h3>{this.props.question}</h3>
                    <input type="button" value={this.state.isOpened ? '-' : '+'} onClick={this.expand} />
                </div>

                <div className="wrap">
                    <p className={this.state.isOpened ? 'show' : 'hide'}>{this.props.answer}</p>
                    <input type="button" className={this.state.isOpened ? 'show' : 'hide'} value={this.state.isOpened2 ? '-' : '+'} onClick={this.expandMore} />
                </div>

                <p className={this.state.isOpened2 && this.state.isOpened ? 'show' : 'hide' }>{this.props.answerLong}</p>
            </article>
            
        );
    }
}

export default FaqItem;