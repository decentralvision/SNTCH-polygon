import React, { useCallback } from "react";
import { useHistory } from "react-router";

export default function Info({ user, magic, handleChangeNetwork, balance }) {
  const history = useHistory();

  const logout = useCallback(() => {
    magic.user.logout().then(() => {
      history.push("/login");
    })
  }, [history]);

  return (
    <>
      <div className="container">
          <h1>Current user: {user.email}</h1>
          <button onClick={logout}>Logout</button>
        </div>

        <div className="container">
          <h1>Network</h1>
          <div className="info">
            <select name="network" onChange={(e) => handleChangeNetwork(e)}>
              <option value="ethereum">Ethereum (Ropsten Testnet)</option>
              <option value="matic">Matic (Live)</option>
            </select>
          </div>
          <h1>Public Address</h1>
          <div className="info">{user.publicAddress}</div>
          <h1>Balance</h1>
          <div className="info">{balance.toString().substring(0, 6)} {magic.network === 'matic' ? 'MATIC' : 'ETH'}</div>
          <div><a href="https://faucet.ropsten.be/" target="_blank">Get Test ETH</a></div>
          <div><a href="binance.com" target="_blank">Get MATIC</a></div>
        </div>
    </>
  )
}