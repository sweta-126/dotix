import React from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";
import { IoMdRefresh } from "react-icons/io";
import { BsFillFileEarmarkPdfFill, BsShareFill } from "react-icons/bs";
import { AiFillDashboard, AiFillHome } from "react-icons/ai";
import { MdGridView } from "react-icons/md";
import "./Score.css"

const Score = () => {
  const location = useLocation();
  const score = location.state;
  console.log(score);
  const correct = score / 100;
  const incorrect = 10 - correct;

  return (
    <div>
      <div className="s-top">
        <div className="score">Your Score is {score} pt</div>
      </div>
      <span className="s-arrow">
        <ArrowButton />
      </span>
      <ul className="score-card">
        <li style={{color:"#FFC102"}}>
        🟡 100%<span>Completion</span>
        </li>
        <li style={{color:"#FFC102"}}>
        🟡 10 <span>Total Question</span>
        </li>
        <li style={{color:"#064814"}}>
        🟢 {correct} <span>Correct</span>
        </li>
        <li style={{color:"#b90d07"}}>
        🔴 {incorrect} <span>Wrong</span>
        </li>
      </ul>
      <ul className="score-buttom">
        <Link to="/home"  style={{textDecoration:"none", color:'inherit'}}>
        <li>
          <div className="s-circle">
            <IoMdRefresh />
          </div>
          <span>Play Again</span>
        </li>
        </Link>
        <Link to="/home"  style={{textDecoration:"none", color:'inherit'}}>
        <li>
          <div className="s-circle">
            <AiFillHome />
          </div>
          <span>Home</span>
        </li>
        </Link>
        <Link to="/leaderboard"  style={{textDecoration:"none", color:'inherit'}}>
        <li>
          <div className="s-circle">
            <AiFillDashboard />
          </div>
          <span>Leaderboard</span>
        </li>
        </Link>
        <li>
          <div className="s-circle">
            <BsFillFileEarmarkPdfFill />
          </div>
          <span>Generate PDF</span>
        </li>
        <li>
          <div className="s-circle">
            <BsShareFill />
          </div>
          <span>Share score</span>
        </li>
        <li>
          <div className="s-circle">
            <MdGridView />
          </div>
          <span>Review Answer</span>
        </li>
      </ul>
    </div>
  );
};

export default Score;
