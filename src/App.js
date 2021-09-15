/* eslint-disable */
import React, { useState } from "react";
import parse from "html-react-parser";
import InputNumber from "rc-input-number";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

import * as brain from "./brain";

import "./App.css";
import "./cards/cards.css";
import "./custom.css";
import peep from "./images/peep.png";

function App() {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [distributed, setDistributed] = useState(false);
  const playerCards = brain.distribute(numberOfPlayers);
  const display = distributed ? "block" : "none";
  const headertop = distributed ? "top" : "middle";

  return (
    <div className="App">
      <header className={`App-header ` + headertop}>
        <div className="widget">
          <h5>Hey, I'm your croupier today</h5>

          <FontAwesomeIcon icon={faUsers} />
          <h4> Please enter the number of player</h4>

          <InputNumber
            min={1}
            max={52}
            defaultValue={numberOfPlayers}
            onChange={(value) => {
              setDistributed(true);
              setNumberOfPlayers(value);
            }}
            onPressEnter={(value) => {
              setDistributed(true);
              setNumberOfPlayers(numberOfPlayers);
            }}
          />
        </div>
      </header>

      <div style={{ display: display }} className="card-wrap">
        <div className="playingCards">
          {playerCards.error && (
            <div className="err-wrap">
              {" "}
              <img src={peep} alt="peep" />
              <div className="err-msg">{playerCards.msg} </div>
            </div>
          )}

          {!playerCards.error &&
            playerCards.map((items, index) => {
              return (
                <div className="card-player">
                  <h4>
                    {" "}
                    Player {index + 1} {parse(brain.avatar())}
                  </h4>

                  <ul className="hand">
                    {items.map((subItems, sIndex) => {
                      return (
                        <li>
                          <a
                            href="#"
                            className={`card rank-${subItems.ranks} ${subItems.suit}`}
                          >
                            <span className="rank">
                              {subItems.ranks.toUpperCase()}
                            </span>
                            <span className="suit">
                              {parse(subItems.suitCode)}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
