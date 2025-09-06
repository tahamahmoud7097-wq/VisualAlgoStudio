import './App.css'
import {useState, useEffect, useContext, createContext} from "react";
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
function Backtracking(){
  const navigate = useNavigate()
  return(
    <div className="appCont">
      <button onClick = {() => navigate("/")} className ="nav">Home</button>
      <p>Hi!</p>
    </div>
  )}
export default Backtracking;