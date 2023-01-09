import logo from './logo.svg';
import Caver from 'caver-js';
import './App.css';

import * as buffer from "buffer";
window.Buffer = buffer.Buffer;

// eslint-disable-next-line
const COUNT_CONTRACT_ADDRESS = '1';
const ACCESS_KEY_ID = 'KASKVQPIZU3LJ7M2CE8DS9HU';
const SECRET_ACCESS_KEY = 'F06s3XjM7GBsq9kJBAF0vcKSbkno4c2zoaRnIq1A';
const CHAIN_ID = '1001';
// eslint-disable-next-line
const author_value = Buffer.from(ACCESS_KEY_ID + ":" + SECRET_ACCESS_KEY)
const option = {
 headers: [
  {
    name: "Authorization",
    value: "Basic " + author_value
  },
  {
    name: "x-chain-id",
    value: CHAIN_ID
  }
 ]
};

const caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", option));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GOOD <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
