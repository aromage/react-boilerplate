import React from "react";
import { Helmet } from "react-helmet";

const Page404: React.FC = () => (
  <div className="nc-Page404">
    <Helmet>
      <title>404 || Blog Magazine React Template</title>
    </Helmet>
    <div className="container relative py-16 lg:py-20">
      {/* HEADER */}
      <header className="text-center max-w-2xl mx-auto space-y-7">
        <h2 className="text-7xl md:text-8xl">🪔</h2>
        <h1 className="text-8xl md:text-9xl font-semibold tracking-widest">
          404
        </h1>
      </header>
    </div>
  </div>
);

export default Page404;
