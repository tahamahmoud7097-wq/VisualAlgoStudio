import {Routes,Route} from "react-router-dom";
import type {navItem} from "./Types.ts";
import {AnimatedNav} from "./Animations.tsx";
function DP(){
  return(
    <Routes>
      <Route index
      element = {<DPhome />}/>
      <Route path="fib" element = {<Fib />}/>
      <Route path="lcs" element = {<LCS />}/>
      <Route path="lis" element = {<LIS />}/>
      <Route path="coinchange"
      element = {<CoinChange />}/>
      <Route path="knapsack"
      element = {<Knapsack />}/>
    </Routes>
  );}
function DPhome(){
  const navItems:navItem[] = [
    { label:"Fibonacci", to:"fib" },
    { label:"Coin Change", to:"coinchange" },
    { label:"Knapsack", to:"knapsack" },
    { label:"Longest Common Subsequence", to:"lcs" },
    { label:"Longest Increasing Subsequence", to:"lis" }
  ];
  return <AnimatedNav navItems={navItems} />;}
function Fib(){
  return(
   <div className="PermutationsContainer">
    <p>hi!</p>
   </div>
);}
function LCS(){
  return(
   <div className="WordSearchContainer">
    <p>hi!</p>
   </div>
);}
function LIS(){
  return(
   <div className="CombosOfKContainer">
    <p>hi!</p>
   </div>
);}
function CoinChange(){
  return(
   <div className="SumCombosContainer">
    <p>hi!</p>
   </div>
);}
function Knapsack(){
  return(
   <div className="SumCombosContainer">
    <p>hi!</p>
   </div>
);}
export default DP;