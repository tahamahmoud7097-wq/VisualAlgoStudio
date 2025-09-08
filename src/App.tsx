import './App.css';
import {useState, useEffect,lazy,Suspense} from "react";
import {Routes, Route, Link, useNavigate,useLocation} from "react-router-dom";
import type {navItem} from "./pages/Types.ts"
import {motion as m} from "framer-motion"
import matrixpic1 from "./Images/Matrix.png"
import graphTree1 from "./Images/GraphNodeshomepage.png"
import {slideIn} from "./pages/Animations.tsx"
const Matrices = lazy(() => import("./pages/matrices.tsx"))
const Graphs = lazy(() => import("./pages/graphs.tsx"))
const Backtracking = lazy(() => import("./pages/backtracking.tsx"))
const Greedy = lazy(()=> import("./pages/greedy.tsx"))
const DP = lazy(()=>import("./pages/DP.tsx"))
const Sorting = lazy(()=>import("./pages/sorting.tsx"))
const DnC = lazy(()=> import("./pages/dnc.tsx"))
//main app func
function App(){
  return(
    <div className="appCont">
      <HomeBtn />
    <Suspense fallback={<Loader />} >
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
  const navItems:navItem[]= [
    { label:"Matrices", to:"/matrices/*" },
    { label:"Graphs", to:"/graphs/*" },
    { label:"Backtracking", to:"/backtracking/*" },
    { label:"Greedy Algorithms", to:"/greedy/*" },
    { label:"Dynamic Programming", to:"/dp/*" },
    { label:"Sorting Algorithms", to:"/sorting/*" },
    { label:"Divide & Conquer", to:"/dnc/*" }
  ];
  return(
    <m.nav className = "navContainer"
    initial = "hidden"
    whileInView = "visible"
    viewport={{once:true}}
    transition = {{staggerChildren:0.3}}>
      {navItems.map(({label, to}) => (
        <m.div className = "navItemContainer"
        key={to} 
        variants={slideIn} 
        transition = {{ type:"spring", stiffness:160, damping:35 }}>
          <Link to={to} className="nav">
          {label}</Link>
        </m.div>
      ))}
    </m.nav>
  );}
//home page component
function Home(){
  return(
  <div className="HomeContainer">
    <h1 className="heading"> <m.span
  className="titleIcon"
  initial={{ opacity: 0 }}
  animate={{opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  {"</>"}
</m.span>Visual<m.span
  className="grad"
  initial={{ opacity: 0 }}
  animate={{opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  {"AlgoStudio"}
</m.span></h1>
    <m.span initial="hidden"
    animate="visible"
    exit = "hidden"
    transition = {{staggerChildren:0.3}}
    viewport={{once:true}}>
    <div className="SecGrid">
    <m.div variants={slideIn}
    transition = {{ type:"spring", stiffness:160, damping:35 }}>
    <p className="heroTextSec1">
    <strong>Visual<span className="grad">AlgoStudio</span></strong> is a fun website made by <strong>Taha Mahmoud</strong> to help you visualize the different algorithms and data structures that us devs always use.
    </p></m.div>
    <m.div variants={slideIn}
    transition = {{ type:"spring", stiffness:160, damping:35 }}>
    <img src={matrixpic1} alt="matrix of ones and zeros" className="heroImage1"/>
    </m.div></div>
    <div className="SecFlex">
    <m.div variants={slideIn}
    transition = {{ type:"spring", stiffness:160, damping:35 }}>
    <p className="heroTextSec2">
    visualizing algorithms can be quite helpful for learning many algorithms easily but it's also quite hard for many algorithms, <strong>Visual<span className="grad">AlgoStudio</span></strong> is made to solve that problem!
    </p></m.div>
    <m.div variants={slideIn}
    transition = {{ type:"spring", stiffness:160, damping:35 }}>
    <img src = {graphTree1} alt ="a graph tree of connected nodes" className="heroImage2" /></m.div></div>
    <m.div variants={slideIn}
    transition = {{ type:"spring", stiffness:160, damping:35 }}>
    <p className="heroTextSec">
    Choose an algorithm category from down below and pick one of the algorithms visualized below. If an algorithm or category you want is not on the list of algorithms, contact me on my email below!
    </p></m.div>
    <Routing />
    <div className="linkCont"><a href="mailto:tahamahmoud7097@gmail.com?subject=Algorithm Visualization Request" className="link">Email me</a></div>
    </m.span>
  </div>
);}
//loading component
function Loader(){
  return(
    <m.div
      style ={{width:"50px",height:"50px",border:"5px solid #43e79f",borderRadius:"50%",borderTop:"5px solid transparent",borderLeft:"5px solid transparent",margin:"auto",position:"absolute",top:0,bottom:0,left:0,right:0}}
      initial={{borderLeft:"5px solid transparent"}}
      animate = {{rotate:360,borderLeft:"5px solid transparent"}}
      exit = {{borderLeft:"5px solid #43e79f"}}
      transition = {{repeat:Infinity,type:"spring",stiffness:160,damping:35}} />
  );}
function HomeBtn(){
  const location = useLocation();
  const navigate = useNavigate();
  const [home, sethome] =
  useState<boolean>(false);
  if (location.pathname === "/") return null;
  return(
    <m.div className="HomeBtnContainer"
    initial = "hidden"
    whileInView = "visible"
    viewport={{once:true}}>
      <m.button onClick={() => navigate("/")}
        variants={slideIn}
        transition = {{ type:"spring", stiffness:160, damping:35 }}
        className="homeBtn">
          <span className="material-symbols-rounded">home</span></m.button>
    </m.div>
);}
export default App;