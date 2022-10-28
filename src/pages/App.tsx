import React, {useEffect, useState} from 'react';
import logo from '../logo.svg';
import { Counter } from '../features/counter/Counter';
import './App.css';
import {constants} from "http2";
import {Table} from "../components/table/table";

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
