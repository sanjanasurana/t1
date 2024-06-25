import React from 'react';
import ReactFlow, { Background, MarkerType, useNodesState, useEdgesState, addEdge, Controls, Handle, Position, NodeToolbar } from 'reactflow';
import 'reactflow/dist/style.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main1 from './page1';
import Compressor from './compressor';
import Wellhead from './wellhead';
import Hpseparator from './hpseparator';
import Login from './login';
export default function App() {
  return(
    <Router>
      <Routes>
        <Route exact path='/' element={<Login></Login>}></Route>
        <Route exact path='/main' element={<Main1></Main1>}></Route>
        <Route exact path='/compressor' element={<Compressor></Compressor>}></Route>
        <Route exact path='/wellhead' element={<Wellhead></Wellhead>}></Route>
        <Route exact path='/hpseparator' element={<Hpseparator></Hpseparator>}></Route>
      </Routes>
    </Router>
  )
}
