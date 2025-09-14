import {Routes,Route} from "react-router-dom";
import type {navItem, sortingStep} from "./Types.ts";
import {useState,useEffect,useMemo} from "react";
import {AnimatedNav,Loader,slideIn,range,arrGenerator,useReplayContext,SpeedDropdown} from "./helpers.tsx";
import {motion as m} from "framer-motion";
import {Play, Pause,RotateCcw}from"lucide-react"

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
function Visualizer({steps}:{steps:sortingStep[]}) {
  const {Replay,triggerReplay} = useReplayContext();
  const [PBspeed, setPBspeed] =
  useState<number>(1);
  const [step,setStep]=
  useState<sortingStep>([]);
  const [Paused, setPaused] =
  useState<boolean>(true);
  useEffect(() => {
    if(steps.length > 0){
      steps.reverse();
      setStep(steps.pop()!);
      setPaused(true);
    }
  },[Replay,steps]);
  useEffect(() => {
    if(Paused || steps.length === 0)return;
    let pendingSteps:sortingStep[] = [];
    let frameId:number;
    let lasttime = performance.now();
    let Speed = 100/PBspeed;
    let acc = 0;
    const loop = (now:number) => {
      const delta = now - lasttime;
      lasttime = now;
      acc += delta;
      if(acc >= Speed){
      if(pendingSteps.length === 0 && steps.length > 0){
        for(let i=0;i<5&&steps.length>0;i++){
          pendingSteps.push(steps.pop()!);
        }
        pendingSteps.reverse();
      }
      if(pendingSteps.length > 0){
        setStep(pendingSteps.pop()!);
      }
      acc -= Speed;
      }
      if(steps.length > 0 || pendingSteps.length > 0){
        frameId = 
        requestAnimationFrame(loop);
      }
    };
    frameId = requestAnimationFrame(loop);
    return() => cancelAnimationFrame(frameId);
  },[Paused,steps,PBspeed]);
//helper for playbtn logic
function getPlayIcon() {
  if (steps.length === 0) return <RotateCcw size={25} />;
  if (Paused) return <Play size={25} className="Icon"/>;
  return <Pause size={25} className="Icon"/>;
}
//pulse animation variant and props
  const Pulse = {
    normal: {background: "linear-gradient(135deg,#237f3f,#3f9f37)" },
      done:{background:[
      "linear-gradient(135deg,#237f3f,#3f9f37)","linear-gradient(135deg, #00c490, #00d076)","linear-gradient(135deg,#237f3f,#3f9f37)"]}}
const pulseProps = 
  steps.length === 0
  ?{initial:"normal",animate:["normal","done"]}
  :{initial:"normal"};
//The visualization
  return(
    <div>
    <m.span 
    initial="hidden"
    animate="visible" >
    <SpeedDropdown playback={PBspeed} setPlayback={setPBspeed} variants = {slideIn}/></m.span>
    <m.div className = "sortingVis"
    {...pulseProps}
    transition = {{staggerChildren:0.02}}>
{/*mapping the values inside the step of the index we have in setIndex state because we want every step to appear alone for a set amount of time instead of all in the same time*/}
      {step.map((value:number,idx:number) => (
        <m.div className = "sortingBar" 
          key = {idx}
          variants = {Pulse}
          transition={{duration:0.2}}
          style = {{
          height :`${value*3}px`
          ,width :"10px"
        }} />
        ))}
    </m.div>
    <m.span className="playBtnCont"
      initial="hidden"
      animate="visible">
{/*if the button is clicked, it checks if where you are, if you're at the end, means a replay which regenerates the array and resets the index, if not, then it flips pause which causes it to play if paused and pause if playing*/}
    <m.button 
      variants={slideIn}
      whileTap={{scale:0.85}}
      whileHover={{scale:1.15}}
      transition = {{ type:"spring", stiffness:160, damping:35 }}
      onClick = {() => {
        if(steps.length === 0){
          triggerReplay(!Replay);}
          else{
            setPaused(!Paused);
          }}}
      className = "playBtn" >{getPlayIcon()}
    </m.button></m.span>
    </div>
  );}
function SortingHome(){
//memoized array for an infinite sorting effect while keeping the performance high
  const ani = useMemo<sortingStep[]>(() =>[
  [1,3,2,5,4],
  [2,4,1,3,5],
  [5,1,3,4,2],
  [3,4,2,1,5],
  [4,1,3,5,2]
  ],[]);
  const [Idx, setIdx] =
  useState<number>(0);
  //does an effect that loops through the ani array indefinetly by using similar logic to the Visualizer
  useEffect(() => {
    const id = setInterval(() => {
    setIdx((i) => (i + 1 < ani.length ? i + 1 : 0));},150);
    return () => clearInterval(id);},[ani]);
  //memoized routing links array for performance
  const navItems: navItem[] = useMemo(()=>[
    { label:"Merge Sort", to:"mergesort" },
    { label:"Bubble Sort", to:"bubblesort" },
    { label:"Quick Sort", to:"quicksort" },
    { label:"Insertion Sort", to:"insertionSort" },
    { label:"Radix Sort",to:"radixsort" }
  ],[]);
  return(
    <div>
      <div className="sortingHero">
      {ani[Idx].map((value:number,idx:number) => (
        <div className = "sortingBarHero" 
          key = {idx}
          style = {{
          height :`${value*40}px`
        }} />
        ))}
      </div>
      <AnimatedNav navItems={navItems} />
    </div>
  );}
function MergeSort(){
  const {Replay} = useReplayContext();
  const [MergeSteps, setMergeSteps] =
  useState<number[]>([]);
  function MergeSortWSteps(arr:number[],start:number=0,end:number=arr.length,steps:sortingStep[] = []):sortingStep[]{
    if(end-start<=1) return steps;
    const mid:number = 
    Math.floor((start+end)/2);
    MergeSortWSteps(arr,start,mid,steps);
    MergeSortWSteps(arr,mid,end,steps);
    merge(arr,start,mid,end,steps);
    return steps;
  }
function merge(arr:number[],start:number,mid:number,end:number,steps:sortingStep[]){
  let left:number[] = arr.slice(start,mid);
  let right:number[] = arr.slice(mid,end);
  let i:number=0, j:number=0, k:number=start
  while(i<left.length && j<right.length){
    if(left[i] < right[j]){
      arr[k++] = left[i++]
    }else{
      arr[k++] = right[j++]
    }
    steps.push([...arr])
  }
  while(i < left.length){
    arr[k++] = left[i++];
    steps.push([...arr]);
  }
  while(j < right.length){
    arr[k++] = right[j++];
    steps.push([...arr]);
  }
}
useEffect(() => {
    setMergeSteps(MergeSortWSteps([...arrGenerator(150,150)]));},[Replay]);
  return(
    <div>
     <div className="headerFlex">
      <h2 className="inheader">
        Merge
        <span className="grad">Sort</span>
      </h2></div>
      <Visualizer steps = {MergeSteps} />
    </div>
);}
function BubbleSort(){
  const {Replay} = useReplayContext();
  const [BubbleSteps, setBubbleSteps] =
  useState<number[][]>([]);
  function bubbleSortWSteps(arr:number[]):sortingStep[]{
    let steps:sortingStep[] = [];
    const n:number = arr.length;
    steps.push([...arr]);
    for(let i:number of range(n)){
      for(let j of range(n-i-1)){
        if(arr[j] > arr[j+1]){
          [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
          steps.push([...arr])
        }}}
    return steps;}
  useEffect(() => {
    setBubbleSteps(bubbleSortWSteps([...arrGenerator(150,150)]));},[Replay]);
  return(
    <div>
     <div className="headerFlex">
      <h2 className="inheader">
        Bubble 
        <span className="grad">Sort</span>
      </h2></div>
      <Visualizer steps = {BubbleSteps} />
    </div>
);}
function QuickSort(){
  const {Replay} = useReplayContext();
  const [QuickSteps, setQuickSteps] =
  useState<number[][]>([]);
  function quickSortWSteps(arr:number[],left:number = 0,right:number = arr.length - 1,steps:sortingStep[] = []):sortingStep[] {
    steps.push([...arr]);
    if (left >= right) return steps;
    let pivot:number= arr[Math.floor((left+right)/2)];
    let i:number = left, j:number = right
    while (i<=j){
      while (arr[i] < pivot) i++;
      while (arr[j] > pivot) j--;
      if (i<=j){
        [arr[i],arr[j]] = [arr[j],arr[i]];
        steps.push([...arr]);
        i++;
        j--;
      }}
    quickSortWSteps(arr,left,j,steps);
    quickSortWSteps(arr,i,right,steps);
    return steps
  }
  useEffect(() => {
    setQuickSteps(quickSortWSteps([...arrGenerator(150,150)]));},[Replay]);
  return(
    <div>
     <div className="headerFlex">
      <h2 className="inheader">
        Quick 
        <span className="grad">Sort</span>
      </h2></div>
      <Visualizer steps = {QuickSteps} />
    </div>);}
function InsertionSort(){
  const {Replay} = useReplayContext();
  const [InsertionSteps, setInsertionSteps] =
  useState<number[][]>([]);
  function insertionSortWSteps(arr:number[]):sortingStep[]{
    let steps:sortingStep[] = [];
    const n:number = arr.length;
    steps.push([...arr]);
    for(let i:number in range(n)){
      let comp:number = arr[i];
      let j:number = i - 1;
      while(j >= 0 && arr[j] > comp){
        arr[j+1] = arr[j];
        j -= 1;
        steps.push([...arr]);}
      arr[j+1] = comp;
      steps.push([...arr]);}
    return steps;}
  useEffect(() => {
    setInsertionSteps(insertionSortWSteps([...arrGenerator(150,150)]));},[Replay]);
  return(
    <div>
     <div className="headerFlex">
      <h2 className="inheader">
        Insertion 
        <span className="grad">Sort</span>
      </h2></div>
      <Visualizer steps = {InsertionSteps} />
    </div>);}
function RadixSort(){
  const [RadixSteps, setRadixSteps] =
  useState<number[][]>([]);
  const {Replay} = useReplayContext();
  function CountingSort(arr:number[],exp:number,steps:sortingStep[]){
    const n:number = arr.length;
    let output:number[] = Array(n).fill(0);
    let count:number[] = Array(10).fill(0);
    for(let num:number of arr){
      let index:number=Math.floor(num/exp)%10;
      count[index] += 1;
    }
    for(let i:number of range(10,1)){
      count[i] += count[i-1];
    }
    let I:number = n - 1;
    while(I>=0){
      let Index:number = Math.floor(arr[I]/exp)%10;
      output[count[Index] - 1] = arr[I];
      count[Index] -= 1;
      I -= 1;
    }
    steps.push([...arr]);
    for(let i of range(n)){
      arr[i] = output[i];
      steps.push([...arr]);
    }
    steps.push([...arr]);
  }
  function RadixSortWSteps(arr:number[]){
    let steps:sortingStep[] = [];
    steps.push([...arr]);
    const maxNum:number = Math.max(...arr);
    let exp:number = 1;
    while(Math.floor(maxNum/exp) > 0){
      CountingSort(arr,exp,steps);
      steps.push([...arr]);
      exp*=10
    }
    return steps;
  }
useEffect(() => {
    setRadixSteps(RadixSortWSteps([...arrGenerator(150,150)]));},[Replay]);
  return(
   <div>
     <div className="headerFlex">
      <h2 className="inheader">
        Radix 
        <span className="grad">Sort</span>
      </h2></div>
      <Visualizer steps = {RadixSteps} />
    </div>);}
export default Sorting;