import React, { Component } from 'react';
import Card from './card'
import './card.css'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'




class App extends Component {
  constructor() {
    super();
    this.state = {
      suits: ["diamonds", "clubs", "hearts", "spades"],
      ranks: [
        "ace",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "jack",
        "queen",
        "king",
      ],
      deck: [],
      dealerPoints: '',
      firstCardplayerPoints: '',
      secondCardplayerPoints: '',
      a: '',
      firstCardplayerSuit: '',
      secondCardplayerSuit: '',
      thirdCardplayer: '',
      thirdCardDealer: '',
      dealerSuits: '',
      thirdCardPlayerPoints: 0,
      thirdCardDealerPoints: 0,
      totalPlayerPoints: null,
      show: false,
      win: false
    }


    this.addNewCard = this.addNewCard.bind(this);
  }


  componentDidMount() {
    this.setState({ dealerPoints: this.state.ranks[Math.floor(Math.random() * this.state.ranks.length)], dealerSuits: this.state.suits[Math.floor(Math.random() * this.state.suits.length)] })
    this.setState({ firstCardplayerPoints: this.state.ranks[Math.floor(Math.random() * this.state.ranks.length)], firstCardplayerSuit: this.state.suits[Math.floor(Math.random() * this.state.suits.length)] })
    this.setState({ secondCardplayerPoints: this.state.ranks[Math.floor(Math.random() * this.state.ranks.length)], secondCardplayerSuit: this.state.suits[Math.floor(Math.random() * this.state.suits.length)] })

  }


  getDealerCards = () => {
    return <div className="cards">
      <Card suites={this.state.dealerSuits} ranks={this.state.dealerPoints} />
      <img alt="playing-card" className="dealerCard" src={`https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/red2.svg`} />

    </div>
  }

  getPlayerCards = () => {
    return <div className="cards">

      <Card suites={this.state.firstCardplayerSuit} ranks={this.state.firstCardplayerPoints} />
      <Card suites={this.state.firstCardplayerSuit} ranks={this.state.secondCardplayerPoints} />
    </div>
  }

  getPlayerPoints = () => {
    const a = this.state.firstCardplayerPoints === 'ace' ? 1 : this.state.firstCardplayerPoints === 'jack' || this.state.firstCardplayerPoints === 'queen' || this.state.firstCardplayerPoints === 'king' ? '10' : this.state.firstCardplayerPoints
    const b = this.state.secondCardplayerPoints === 'ace' ? 1 : this.state.secondCardplayerPoints === 'jack' || this.state.secondCardplayerPoints === 'queen' || this.state.secondCardplayerPoints === 'king' ? '10' : this.state.secondCardplayerPoints
    const c = this.state.thirdCardPlayerPoints === 'ace' ? 1 : this.state.thirdCardPlayerPoints === 'jack' || this.state.thirdCardPlayerPoints === 'queen' || this.state.thirdCardPlayerPoints === 'king' ? '10' : this.state.thirdCardPlayerPoints
    const d = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10)
    return d
  }

  addNewCard = () => {
    const thirdCardPlayerPoints = this.state.ranks[Math.floor(Math.random() * this.state.ranks.length)]
    const thirdCardDealerPoints = this.state.ranks[Math.floor(Math.random() * this.state.ranks.length)]

    this.setState({ thirdCardplayer: <Card suites={this.state.suits[Math.floor(Math.random() * this.state.suits.length)]} ranks={thirdCardPlayerPoints} /> })
    this.setState({ thirdCardPlayerPoints: thirdCardPlayerPoints, thirdCardDealerPoints: thirdCardDealerPoints })
    this.setState({ thirdCardDealer: <Card suites={this.state.suits[Math.floor(Math.random() * this.state.suits.length)]} ranks={thirdCardDealerPoints} />, show: true })
    console.log(this.state.firstCardplayerPoints)
  }

  holdCards = () => {
    const thirdCardDealerPoints = this.state.ranks[Math.floor(Math.random() * this.state.ranks.length)]
    // this.setState({ show: true })
    this.setState({ thirdCardDealer: <Card suites={this.state.suits[Math.floor(Math.random() * this.state.suits.length)]} ranks={thirdCardDealerPoints} />, thirdCardDealerPoints: thirdCardDealerPoints, show: true })
  }

  refreshPage = () => {
    window.location.reload(false);

  }

  render() {
    const fisrtCardDealerPoints = this.state.dealerPoints === 'ace' ? 1 : this.state.dealerPoints === 'jack' || this.state.dealerPoints === 'queen' || this.state.dealerPoints === 'king' ? '10' : this.state.dealerPoints
    const thirdCardDealerPoints = this.state.thirdCardDealerPoints === 'ace' ? 1 : this.state.thirdCardDealerPoints === 'jack' || this.state.thirdCardDealerPoints === 'queen' || this.state.thirdCardDealerPoints === 'king' ? '10' : this.state.thirdCardDealerPoints
    const dealerPoints = parseInt(fisrtCardDealerPoints, 10) + parseInt(thirdCardDealerPoints, 10)
    const playerPoints = this.getPlayerPoints()


    return (
      <div className="App">
        <div className="container">
          
          <h1>{this.state.show === false && 'BLACKJACK GAME'}</h1>
          {this.state.show === true &&
            <div>
              {playerPoints > 21 ? <h1>BUST</h1> :
                dealerPoints === playerPoints ? <h1>DREW</h1> :
                  dealerPoints < playerPoints || dealerPoints > 21 ?<div> <h1>WIN</h1> <Confetti /></div> : <h1>LOST</h1> } 
            </div>}
        </div>
        
        <div className="container">
          <p>Dealer</p>
        Points: {dealerPoints}
          <div className='cards'>
            <div>{this.state.thirdCardDealer !== '' && this.state.thirdCardDealer}</div><div>{this.getDealerCards()}</div>
          </div>
        </div>
        <div className="container">
          <p>Player</p>
          <div>Points: {playerPoints}</div>

          <div className='cards'>
            {this.getPlayerCards()}{this.state.thirdCardplayer !== '' && this.state.thirdCardplayer}
          </div>
        </div>

        <div className="container"><Button disabled={this.state.show === true ? true : false} variant="primary" onClick={this.addNewCard}>Hit</Button> <Button disabled={this.state.show === true ? true : false} onClick={this.holdCards} variant="primary">Stick</Button>{' '}<Button disabled={this.state.show === true ? false : true} onClick={this.refreshPage} variant="primary">Try again</Button>{' '}</div>

      </div>

    );
  }
}

export default App;