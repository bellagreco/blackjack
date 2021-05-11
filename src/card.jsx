import React, { Component } from 'react';
import './card.css'

class Card extends Component {

    getCard = () => {
        // const url = convertCardSymbolToUrl(this.props.value);

        return <img alt="playing-card" className="playing-card" src={`https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/${this.props.suites}_${this.props.ranks}.png`} />;


    }

    render() {


        return (
            <div>
                <p> {this.getCard()}</p>
            </div>
        );
    }
}

export default Card;
