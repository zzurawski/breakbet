
import React, {useState} from "react";
import '../styles/bets.css';


export default function Betting() {
        const [betWager, setBetWager] = useState(0)
        const [chosenBet, setChosenBet] = useState(null);
        const [betNum, setBetNum] = useState(0)

        
      
        const handleSelectBet = () => {
          const bet = {
                amount: betWager,
                type: chosenBet,
                number: betNum
            };
            console.log('Wager: ', bet)
        }

    return (
        <div className="betting-main-container">
            <header>
                <div className="user-info">here is username and winnings maybe throw in button to add fake coin</div>
                <div className="logo-container">lil logo div here</div>
            </header>

            <div className="betting-body">
                <div className="type-of-bets">
                    <div className="bet-type">
                    <label>
                        <h3>BATHROOM BREAKS: 3.5</h3>
                    </label>
                
                <div className="button-container">
                    <button onClick={() => setChosenBet('over')}>OVER<br></br></button>
                    <button onClick={() => setChosenBet('under')}>UNDER</button>
                </div>   
                </div>
                </div>

                <div className="bet-type">  
                <label>
                        <h3>SMOKE BREAK: 0.5</h3>
                    </label>
                
                <div className="button-container">
                    <button onClick={() => setChosenBet('over')}>OVER</button>
                    <button onClick={() => setChosenBet('under')}>UNDER</button>
                   
                </div>
                </div>
                

                <div className="bet-type">
                <label>
                    <h3>GO OUTSIDE</h3>
                </label>
                <div className="button-container">
                    <button onClick={() => setChosenBet('over')}>YES</button>
                    <button onClick={() => setChosenBet('under')}>NO</button>
                   
                </div>
                </div>
                
                <div className="wager-container">
                    <label>Bet Amount: 
                        <input
                            type="number"
                            value={betWager}
                            onChange={(e) => setBetWager(e.target.value)}
                        />
                    </label></div>
                <button onClick={handleSelectBet} id="submit">PLACE BET</button>
                
            </div>
        </div>
    )
}