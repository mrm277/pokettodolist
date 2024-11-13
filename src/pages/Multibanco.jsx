import React from "react";
import Layout from "./Layout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

function Multibanco() {
  return (
    <>
      <Layout>
        <h1 className="text-2xl font-bold  text-center">MB Pocket</h1>
        <p className="mb-4">Welcome to your pocket bank account</p>
        <h3 className="text-xl font-semibold text-center">Current balance:</h3>
        <p className="text-xl mb-4 text-center">200 €</p>
        <div className="space-y-4 text-center">
          <Input placeholder="insira money" className="mb-3" />
          <Button className="w-full">Deposit</Button>
          <Button variant="destructive" className="w-full">Withdraw</Button>
        </div>
      </Layout>
    </>
  );
}

export default Multibanco;
