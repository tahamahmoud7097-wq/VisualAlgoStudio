import {Routes,Route} from "react-router-dom";
import type {navItem} from "./Types.ts";
import {AnimatedNav} from "./helpers.tsx";
function DnC(){
  return(
    <Routes>
      <Route index
      element = {<DnCHome />}/>
      <Route path = "quicksearch"
      element = {<QuickSearch />}/>
      <Route path = "inversions"
      element = {<Inversions />}/>
      <Route path = "matrixmultiplicationdnc"
      element = {<MatrixMultiplactionDnC />}/>
      <Route path = "closestpairofpts"
      element = {<ClosestPairOfPts />}/>
    </Routes>
  );}

function DnCHome(){
  const navItems:navItem[] = [
    { label:"Quick Search", to:"quicksearch" },
    { label:"Inversions", to:"inversions" },
    { label:"Matrix Multiplaction", to:"matrixmultiplicationdnc" },
    { label:"Closest Pair Of Points", to:"closestpairofpts" }
  ];
  return <AnimatedNav navItems={navItems} />;}
function QuickSearch(){
  return(
   <div className="NqueensContainer">
    <p>hi!</p>
   </div>
);}
function Inversions(){
  return(
   <div className="PermutationsContainer">
    <p>hi!</p>
   </div>
);}
function MatrixMultiplactionDnC(){
  return(
   <div className="WordSearchContainer">
    <p>hi!</p>
   </div>
);}
function ClosestPairOfPts(){
  return(
   <div className="CombosOfKContainer">
    <p>hi!</p>
   </div>
);}
export default DnC;