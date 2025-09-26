import {motion as m} from "framer-motion";
import {Link, useLocation} from "react-router-dom";
import type {navItem,ReplayType} from "./pages/Types.ts";
import {useContext,createContext,useState} from "react";
import{Settings} from "lucide-react";
//slide in variants
export const slideIn = {
  hidden: { opacity: 0, x:"-140vw" },
  visible: { opacity: 1, x: 0 }};
//fade in variants
export const fadeIn = {
  hidden: {opacity:0},
  visible: {opacity:1}
};
//animated navigation, makes each item pop up on a stagger by using framer-motion's staggerChildren
export function AnimatedNav({navItems}:{navItems:navItem[]}) {
  const location = useLocation();
//deciding animation behavior based on which you're in home or not, bc you're never outside of viewport outside of home, if you're in home, we want on view, else then on mount
  const animationProps =
  location.pathname === "/"
  ?{initial:"hidden",whileInView:"visible"}
  :{initial:"hidden",animate:"visible"};
  return(
    <m.nav className = "navContainer"
    {...animationProps}
    viewport={{once:true}}
    transition = {{staggerChildren:0.3}}>
{/*simple mapping array into links*/}
      {navItems.map(({label, to}) => (
        <m.div className = "navItemContainer"
        key={to}
        whileTap={{scale:0.90}}
        whileHover={{scale:1.10}}
        variants={slideIn}
        transition = {{ type:"spring", stiffness:160, damping:35 }}>
          <Link to={to} className="nav">
          {label}</Link>
        </m.div>
      ))}
    </m.nav>
);}
//temporary spinner
export function Loader(){
  return(
    <m.div
      style ={{width:"50px",height:"50px",border:"5px solid #43e79f",borderRadius:"50%",borderTop:"5px solid transparent",borderLeft:"5px solid transparent",margin:"auto",position:"absolute",top:0,bottom:0,left:0,right:0}}
      initial={{borderLeft:"5px solid transparent"}}
      animate = {{rotate:360,borderLeft:"5px solid transparent"}}
      exit = {{borderLeft:"5px solid #43e79f"}}
      transition = {{repeat:Infinity,type:"spring",stiffness:160,damping:50}} />
  );}
// a simple reusable range function similar to python's for consistency and convenience while working with loops and arrays of patterns of numbers
export function range(end:number,start:number=0,step:number = 1){
  const arr: number[] = [];
  for (let i:number= start; i< end; i += step){
    arr.push(i);}
  return arr;
}
//random array generator for the visualizations that need it, works using Math.floor and Math.random to generate random nums and create an array from them
export function arrGenerator(size:number,maxVal:number){
  const arr = Array.from({ length: maxVal},(_,i) => i + 1);
  for ( let i = arr.length - 1; i > 0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr.slice(0,size);
}
//Replay context for replaying algorithm visualizations easily
const ReplayContext =
createContext<ReplayType|undefined>(undefined);
export function 
ReplayProvider({children} : {children:React.ReactNode }){
  const [Replay, setReplay] =
  useState<boolean>(false);
  const triggerReplay = () =>
  setReplay(prev => !prev);
  return(
    <ReplayContext.Provider
    value = {{Replay,triggerReplay}}>
      {children}
    </ReplayContext.Provider>
  );}
//custom hook for the context
export const useReplayContext = () =>
  useContext(ReplayContext);
//speed toggle
export function SpeedDropdown({playback, setPlayback}) {
//state that decides to show the the options or not
  const [open, setOpen] = useState(false);
//speed options
  const speeds = [0.5, 1, 1.5, 2];
  const settingsProps =
  open ?{initial:"hidden",animate:"visible"}:{initial:"hidden",animate:"hidden"};
  return (
    <div className="speedDropdown">
    {/*the speed settings toggle btn, onClick it flips open which changes the classname and does the animation so I can make it look like a toggle*/}
      <m.button
        onClick={() => setOpen(!open)}
        className={`speedBtn ${open?"":"open"}`}
        variants={fadeIn}
        whileTap={{scale:0.85}}
        whileHover={{scale:1.15}}
        transition = {{ type:"spring", stiffness:160, damping:35 }}>
        {playback}<Settings size={25} />
      </m.button>
      <m.div
        {...settingsProps}
        transition={{staggerChildren:0.23}}
        className="optionsContainer" >
        {speeds.map(s => (
          <m.button
            variants={fadeIn}
            whileTap={{scale:0.85}}
            whileHover={{scale:1.15}}
            transition = {{ type:"spring", stiffness:170, damping:35 }}
            key={s}
            onClick={() => {
              setPlayback(s);
              setOpen(false);}}
            className={`optionBtn ${playback === s ? "active" : ""}`}>
            {s}x
          </m.button>
        ))}
      </m.div>
    </div>
  );}