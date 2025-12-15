import React from "react";

function HelpContainer({ children }) {
  return (
    <main className="lg:w-lg px-4 py-10 transition-all sm:m-auto sm:min-w-80 sm:p-6 md:w-120 lg:pt-10">
      {children}
    </main>
  );
}

export default HelpContainer;
