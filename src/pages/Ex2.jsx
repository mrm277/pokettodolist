import React from "react";
import Layout from "./Layout";

function Ex2() {
  return (
    <>
      <Layout>
        <h1 className="text-2xl font-bold mb-4 text-center">
          Styled Components
        </h1>
        <div className="space-y-4 text-center">
          <p className="text-lg">This is a styled component</p>
          <div className="p-4 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition-colors">
            <p className="text-lg">This is a styled component</p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Ex2;
