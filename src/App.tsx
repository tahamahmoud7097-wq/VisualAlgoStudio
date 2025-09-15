import './App.css';
import {lazy,Suspense,useEffect} from "react";
import {Routes, Route, useNavigate,useLocation} from "react-router-dom";
import type {navItem} from "./pages/Types.ts";
import {HomeIcon} from "lucide-react";
import {motion as m} from "framer-motion";
import matrixpic1 from "./Images/Matrix.png";
import graphTree1 from "./Images/GraphNodeshomepage.png";
import {slideIn, AnimatedNav, Loader, ReplayProvider} from "./pages/helpers.tsx";
const Matrices = lazy(() => import("./pages/matrices.tsx"));
const Graphs = lazy(() => import("./pages/graphs.tsx"));
const Backtracking = lazy(() => import("./pages/backtracking.tsx"));
const Greedy = lazy(()=> import("./pages/greedy.tsx"));
const DP = lazy(()=>import("./pages/DP.tsx"));
const Sorting = lazy(()=>import("./pages/sorting.tsx"));
const DnC = lazy(()=> import("./pages/dnc.tsx"));
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}
  const navItems:navItem[] = [
    { label:"Matrices", to:"/matrices" },
    { label:"Graphs", to:"/graphs" },
    { label:"Backtracking", to:"/backtracking" },
    { label:"Greedy", to:"/greedy" },
    { label:"Dynamic Programming", to:"/dp" },
    { label:"Sorting", to:"/sorting" },
    { label:"Divide & Conquer", to:"/dnc" }
  ];
//main app func
function App(){
  return(
    <ReplayProvider>
    <div className="appCont">
      <HomeBtn />
    <Suspense fallback={<Loader />} >
    <ScrollToTop />
    <Routes>
      <Route path = "/"
      element = {<HomePage />} />
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
    </ReplayProvider>
);}
//the func for homepage routing which has routes to the pages for different algorithm categories
function Routing(){
  return <AnimatedNav navItems={navItems} />;}
//home page component
function HomePage(){
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
    <img src={matrixpic1} alt="Binary Matrix" className="heroImage1"/>
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
function HomeBtn(){
  const location = useLocation();
  const navigate = useNavigate();
//Check current category and whether you're in its home or not, if not it returns null
  const currNav = navItems.find((item) =>
    location.pathname.startsWith(item.to));
  if (location.pathname === "/") return null;
  return(
    <m.div className="HomeBtnContainer"
    initial = "hidden"
    animate = "visible"
    viewport={{once:true}}>
    <div className="headerFlex">
      <m.button onClick={() => navigate("/")}
        variants={slideIn}
        whileTap={{scale:0.85}}
        whileHover={{scale:1.15}}
        transition = {{ type:"spring", stiffness:160, damping:35 }}
        className="homeBtn">
          <HomeIcon size={25} />
          </m.button>
          <h2 className="header">
        {currNav?currNav.label:null}{""}
        <span className="grad">{currNav? "Algos":null}</span>
      </h2></div>
    </m.div>
);}
export default App;