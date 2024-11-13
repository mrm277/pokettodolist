import React from "react";
import Layout from "./Layout";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw } from "../features/banking/bankingSlice";

function Multibanco() {
  const balance = useSelector((state) => state.banking.balance);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleDeposit = () => {
    if (amount > 0) {
      dispatch(deposit(amount)); // Dispara a ação de depósito
      setAmount(0);
    }
  };

  const handleWithdraw = () => {
    if (amount > 0) {
      dispatch(withdraw(amount)); // Dispara a ação de levantamento
      setAmount(0);
    }
  };

  return (
    <>
      <Layout>
        <h1 className="text-2xl font-bold  text-center">MB Pocket</h1>
        <p className="mb-4">Welcome to your pocket bank account</p>
        <h3 className="text-xl font-semibold text-center">Current balance:</h3>
        <p className="text-xl mb-4 text-center">{balance} €</p>
        <div className="space-y-4 text-center">
          <Input
            type="number"
            placeholder="Insira o valor"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mb-3"
          />
          <Button onClick={handleDeposit} className="w-full">
            Deposit
          </Button>
          <Button
            onClick={handleWithdraw}
            variant="destructive"
            className="w-full"
          >
            Withdraw
          </Button>
        </div>
      </Layout>
    </>
  );
}

export default Multibanco;
