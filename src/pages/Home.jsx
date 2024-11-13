import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center">React Exercises</h1>
      <div className="space-y-4 text-center">
        <Link
          to="/ex1"
          className="block p-4 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition-colors"
        >
          Ex1: Pocket Todo List
        </Link>
        <Link
          to="/ex2"
          className="block p-4 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition-colors"
        >
          Ex2: Styled Components
        </Link>
        <Link
          to="/ex3"
          className="block p-4 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition-colors"
        >
          Ex3. Multibanco
        </Link>
      </div>
    </Layout>
  );
}

export default Home;
