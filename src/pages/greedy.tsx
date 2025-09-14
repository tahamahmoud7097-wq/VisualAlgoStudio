import {Routes,Route} from "react-router-dom";
import type {navItem} from "./Types.ts";
import {AnimatedNav} from "./helpers.tsx";
function Greedy(){
  return(
    <Routes>
      <Route index element={<GreedyHome />}/>
      <Route path = "activities"
      element = {<Activities />}/>
      <Route path = "jobs"
      element = {<Jobs />}/>
      <Route path = "huffmancoding"
      element = {<HuffmanCoding />}/>
    </Routes>
  );}
function GreedyHome(){
  const navItems:navItem[] = [
    { label:"Activity Selection", to:"activities" },
    { label:"Job Sequencing", to:"jobs" },
    { label:"Huffman Coding", to:"huffmancoding" }
  ];
  return <AnimatedNav navItems={navItems} />;}
function Activities(){
  return(
   <div className="NqueensContainer">
    <p>hi!</p>
   </div>
);}
function Jobs(){
  return(
   <div className="PermutationsContainer">
    <p>hi!</p>
   </div>
);}
function HuffmanCoding(){
  return(
   <div className="WordSearchContainer">
    <p>hi!</p>
   </div>
);}
export default Greedy;