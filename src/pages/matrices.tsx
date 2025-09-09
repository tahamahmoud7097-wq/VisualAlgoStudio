import {Routes,Route} from "react-router-dom";
import type {navItem} from "./Types.ts";
import {AnimatedNav} from "./Animations.tsx";
function Matrices(){
  return(
    <Routes>
      <Route index element ={<MatrixHome />}/>
      <Route path = "transpose"
      element = {<MatrixTranspose />}/>
      <Route path = "rotation"
      element = {<MatrixRotation />}/>
      <Route path = "snail"
      element = {<SnailTraversal />}/>
      <Route path = "search"
      element = {<MatrixSearch />}/>
      <Route path = "matrixgeneration"
      element = {<MatrixGeneration />}/>
    </Routes>
  );}
function MatrixHome(){
  const navItems:navItem[] = [
    {label:"Matrix Transpose",to:"transpose"},
    {label:"Matrix Rotation",to:"rotation"},
    {label:"Matrix Snail Traversal",to:"snail"},
    {label:"Matrix Search",to:"search"},
    {label:"Matrix Generation",to:"matrixgeneration"}
  ];
  return <AnimatedNav navItems={navItems} />;}
function MatrixTranspose(){
  return(
   <div className="NqueensContainer">
    <p>hi!</p>
   </div>
);}
function MatrixRotation(){
  return(
   <div className="PermutationsContainer">
    <p>hi!</p>
   </div>
);}
function SnailTraversal(){
  return(
   <div className="WordSearchContainer">
    <p>hi!</p>
   </div>
);}
function MatrixSearch(){
  return(
   <div className="CombosOfKContainer">
    <p>hi!</p>
   </div>
);}
function MatrixGeneration(){
  return(
   <div className="SumCombosContainer">
    <p>hi!</p>
   </div>
);}
export default Matrices;