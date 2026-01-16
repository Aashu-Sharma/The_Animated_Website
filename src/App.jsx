import { useState } from "react";
import {Hero, About, Navbar} from './comps/index.js';

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  );
}

export default App;
