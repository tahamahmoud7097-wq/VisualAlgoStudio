import {Routes, Route} from "react-router-dom";
import type {navItem} from "./Types.ts";
import {AnimatedNav} from "./helpers.tsx";
function Backtracking(){
  return(
    <div>
    <Routes>
      <Route index
      element = {<BacktrackingHome />}/>
      <Route path = "nqueens"
      element = {<Nqueens />} />
      <Route path = "permutations"
      element = {<Permutations />} />
      <Route path = "wordsearch"
      element = {<WordSearch />} />
      <Route path = "combosk"
      element = {<CombosOfK />} />
      <Route path = "sumcombos"
      element = {<SumCombos />} />
    </Routes>
    </div>
  );}
function BacktrackingHome(){
  const navItems: navItem[] = [
    { label:"N Queens", to:"nqueens" },
    { label:"Permutations",to:"permutations"},
    { label:"Word Search", to:"wordsearch" },
    { label:"Combos of K Elements",to:"combosk" },
    { label:"Combos that Sum to K",to:"sumcombos"}
  ];
  return <AnimatedNav navItems={navItems} />;}
function Nqueens(){
  return(
   <div className="NqueensContainer">
    <p>hi!</p>
   </div>
);}
function Permutations(){
  return(
   <div className="PermutationsContainer">
    <p>hi!</p>
   </div>
);}
function WordSearch(){
  return(
   <div className="WordSearchContainer">
    <p>hi!</p>
   </div>
);}
function CombosOfK(){
  return(
   <div className="CombosOfKContainer">
    <p>hi!</p>
   </div>
);}
function SumCombos(){
  return(
   <div className="SumCombosContainer">
    <p>hi!</p>
   </div>
);}
export default Backtracking;