import {Routes,Route} from "react-router-dom";
import type {navItem} from "./Types.ts";
import {AnimatedNav} from "./Animations.tsx";
function Sorting(){
  return(
    <Routes>
      <Route index element={<SortingHome />}/>
      <Route path = "mergesort"
      element = {<MergeSort />}/>
      <Route path ="bubblesort"
      element = {<BubbleSort />}/>
      <Route path = "quicksort"
      element = {<QuickSort />}/>
      <Route path = "insertionSort"
      element = {<InsertionSort />}/>
      <Route path = "radixsort"
      element = {<RadixSort />}/>
    </Routes>
  );}
function SortingHome(){
  const navItems: navItem[] = [
    { label:"Merge Sort", to:"mergesort" },
    { label:"Bubble Sort", to:"bubblesort" },
    { label:"Quick Sort", to:"quicksort" },
    { label:"Insertion Sort", to:"insertionSort" },
    { label:"Radix Sort",to:"radixsort" }
  ];
  return <AnimatedNav navItems={navItems} />;}
function MergeSort(){
  return(
   <div className="NqueensContainer">
    <p>hi!</p>
   </div>
);}
function BubbleSort(){
  return(
   <div className="PermutationsContainer">
    <p>hi!</p>
   </div>
);}
function QuickSort(){
  return(
   <div className="WordSearchContainer">
    <p>hi!</p>
   </div>
);}
function InsertionSort(){
  return(
   <div className="CombosOfKContainer">
    <p>hi!</p>
   </div>
);}
function RadixSort(){
  return(
   <div className="SumCombosContainer">
    <p>hi!</p>
   </div>
);}
export default Sorting;