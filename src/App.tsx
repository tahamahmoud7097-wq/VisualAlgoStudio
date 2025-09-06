import './Home.css';
import {useState, useEffect, useContext, createContext,lazy,Suspense} from "react";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
const Matrices = lazy(() => import("./pages/matrices.tsx"))
const Graphs = lazy(() => import("./pages/graphs.tsx"))
const Backtracking = lazy(() =>import("./pages/backtracking.tsx"))
const Greedy = lazy(()=> import("./pages/greedy.tsx"))
const DP = lazy(()=>import("./pages/DP.tsx"))
const Sorting = lazy(()=>import("./pages/sorting.tsx"))
const DnC = lazy(()=> import("./pages/dnc.tsx"))
//main app func
function App(){
  return(
    <div className="appCont">
        <Suspense fallback={<div>loading...</div>} >
    <Routes>
      <Route path = "/"
      element = {<Home />} />
      <Route path="matrices/*" 
      element= {<Matrices />} />
      
      <Route path="graphs/*" 
      element= { <Graphs /> } />
      
      <Route path="backtracking/*" 
      element= {<Backtracking />} />
      
      <Route path="greedy/*" 
      element= {<Greedy />} />
      
      <Route path="dp/*" 
      element= {<DP />} />
      
      <Route path="sorting/*" 
      element= {<Sorting />} />
      
      <Route path="dnc/*" 
      element= {<DnC />} />
    </Routes>
    </Suspense>
    </div>
);}
//the func for homepage routing which has routes to the pages for different algorithm categories
function Routing(){
  return(
  <div>
    <nav className="navContainer">
      <Link to="/matrices/*" className="nav">Matrices</Link>
      <Link to="/graphs/*" className="nav">Graphs</Link>
      <Link to="/backtracking/*" className="nav">Backtracking</Link>
      <Link to="/greedy/*" className="nav">Greedy Algorithms</Link>
      <Link to="/dp/*" className="nav">Dynamic Programming</Link>
      <Link to="/sorting/*" className="nav">Sorting Algorithms</Link>
      <Link to="/dnc/*" className="nav">Divide and Conquer</Link>
    </nav>
  </div>
  );}
function Home(){
  return(
  <div className="HomeContainer">
    <h1 className="heading">Visual<span className="grad">AlgoStudio</span></h1>
    <p className="heroTextSec">
    <strong>Visual<span className="grad">AlgoStudio</span></strong> is a fun website made by <strong>Taha Mahmoud</strong> to help you visualize the different algorithms and data structures that us devs always use.
    </p>
    <p className="heroTextSec">
    visualizing algorithms can be quite helpful for learning many algorithms easily but it's also quite hard for many algorithms, <strong>Visual<span className="grad">AlgoStudio</span></strong> is made to solve that problem!
    </p>
    <p className="heroTextSec">
    Choose an algorithm category from down below and pick one of the algorithms visualized below. If an algorithm or category you want is not on the list of algorithms, contact me on my email below!
    </p>
    <Routing />
    <div className="linkCont"><a href="mailto:tahamahmoud7097@gmail.com?subject=Algorithm Visualization Request" className="link">Email me</a></div>
  </div>
);}
export default App;