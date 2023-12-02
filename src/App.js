import React from 'react';
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

function App({numberOfElements}) {
  const clientNumberOfElements = typeof window !== "undefined" ? window.numberOfElements || 5: null;
  const finalNumberOfElements = numberOfElements || clientNumberOfElements;

  return (
    <div>
      <Header />
      <Body numberOfElements={finalNumberOfElements} />
      <Footer />
    </div> 
  );
}

export default App;