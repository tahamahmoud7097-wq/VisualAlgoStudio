import {Routes,Route} from "react-router-dom";
import type {navItem} from "./Types.ts";
import {AnimatedNav} from "./helpers.tsx";
function Graphs(){
  return(
    <Routes>
      <Route index element={<GraphsHome />}/>
      <Route path = "dfsbfs"
      element = {<DFS_BFS />}/>
      <Route path = "componentcounter"
      element = {<ComponentCounter />}/>
      <Route path = "allpathsbetweentwonodes"
      element = {<Allpathsbetweentwonodes/>}/>
      <Route path = "islandcounter"
      element = {<IslandCounter />}/>
      <Route path = "dijkstra"
      element = {<Dijkstra />}/>
      <Route path = "bellmanford"
      element = {<BellmanFord />}/>
      <Route path = "floydwarshall"
      element = {<FloydWarshall />}/>
      <Route path = "astar"
      element = {<Astar />}/>
      <Route path = "kruskalprim"
      element = {<KruskalandPrim />}/>
      <Route path = "topological"
      element = {<TopologicalSort />}/>
    </Routes>
  )}
function GraphsHome(){
  const navItems: navItem[] = [
    { label:"DFS & BFS", to:"dfsbfs" },
    { label:"Count of Components",to:"componentcounter"},
    { label:"Dijkstra",to:"dijkstra"},
    { label:"Bellman-Ford", to:"bellmanford"},
    { label:"Floyd-Warshall",to:"floydwarshall"},
    { label:"A* (A star)", to:"astar" },
    { label:"Count of Islands on a grid",to:"islandcounter" },
    {label:"Kruskal & Prim",to:"kruskalprim"},
    { label:"All Paths Between 2 Nodes", to:"allpathsbetweentwonodes" },
    { label:"Topological Sort",to:"topological"}
  ];
  return <AnimatedNav navItems={navItems} />;}
function DFS_BFS(){
  return(
   <div className="NqueensContainer">
    <p>hi!</p>
   </div>
);}
function ComponentCounter(){
  return(
   <div className="PermutationsContainer">
    <p>hi!</p>
   </div>
);}
function IslandCounter(){
  return(
   <div className="WordSearchContainer">
    <p>hi!</p>
   </div>
);}
function Allpathsbetweentwonodes(){
  return(
   <div className="CombosOfKContainer">
    <p>hi!</p>
   </div>
);}
function Dijkstra(){
  return(
   <div className="SumCombosContainer">
    <p>hi!</p>
   </div>
);}
function FloydWarshall(){
  return(
   <div className="NqueensContainer">
    <p>hi!</p>
   </div>
);}
function BellmanFord(){
  return(
   <div className="PermutationsContainer">
    <p>hi!</p>
   </div>
);}
function Astar(){
  return(
   <div className="WordSearchContainer">
    <p>hi!</p>
   </div>
);}
function KruskalandPrim(){
  return(
   <div className="CombosOfKContainer">
    <p>hi!</p>
   </div>
);}
function TopologicalSort(){
  return(
   <div className="SumCombosContainer">
    <p>hi!</p>
   </div>
);}
export default Graphs;