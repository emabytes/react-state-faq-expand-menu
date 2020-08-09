import React, { Component } from 'react';
import FaqItem from './FaqItem';
import faq from './data.js';

class FaqList extends Component {
    state = {}
    
    render() {
        return (
            <section>
                {faq.map((element, index) =>
                    <FaqItem
                        key={index}
                        question={element.question}
                        answer={element.answer}
                        answerLong={element.answerLong}
                    />
                )}

            </section>
        );
    }
}

export default FaqList;