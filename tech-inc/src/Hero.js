import React from "react";
import './App.css';
import Form from "./Form";
import TodoList from './TodoList';

const Hero = ({ handleLogout }) => {
    return (
      <div className="App">
        <section className="hero">
          <nav>
            <h2>Dashboard</h2>
            <button onClick={handleLogout}>Logout</button>
          </nav>
          <h1>Tasks</h1>
        <Form/>
        <TodoList/> 
        </section>
        </div>
        
        
    );
};

export default Hero;

