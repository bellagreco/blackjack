import React, { Component } from 'react';
import './card.css'

class Card extends Component {

    getCard = () => {
        // const url = convertCardSymbolToUrl(this.props.value);

        return <img alt="playing-card" className="playing-card" src={`https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/${this.props.suites}_${this.props.ranks}.png`} />;


    }

    //  getCards = (props) => {
    //     if (this.props.suits == "♣︎" || this.props.suits == "♠︎") {
    //       return (<div className="card card-black"><div className="card-tl"><div className="card-value">{this.props.values}</div><div className="card-suit">{this.props.suits}</div></div><div className="card-br"><div className="card-value">{this.props.values}</div><div className="card-suit">{this.props.suits}</div></div></div>);
    //     } else {
    //       return (<div className="card card-red"><div className="card-tl"><div className="card-value">{this.props.value}</div><div className="card-suit">{this.props.suit}</div></div>
    //         <div className="card-br"><div className="card-value">{this.props.value}</div><div className="card-suit">{this.props.suit}</div></div>
    //         </div>);
    //     }
    //   };

    render() {


        return (
            <div>
                <p> {this.getCard()}</p>
            </div>
        );
    }
}

export default Card;