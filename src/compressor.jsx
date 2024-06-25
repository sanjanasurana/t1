import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { applyNodeChanges } from 'reactflow';
import { Background, MarkerType,useNodesState,useEdgesState,addEdge,Controls, Handle, Position, NodeToolbar} from 'reactflow';

import 'reactflow/dist/style.css';
import TextUpdaterNode from './TextUpdaterNode';
import TextUpdaterNode1 from './TextUpdaterNode1';
import TextUpdaterNode2 from './TextUpdaterNode2';
import TextUpdaterNode3 from './TextUpdaterNode3';
import TextUpdaterNode4 from './TextUpdaterNode4';
import TextUpdaterNode5 from './TextUpdaterNode5';
import Rectangle1 from './Rectangle1';
import Rectangle2 from './RectangleTwo';
import CN1 from './CN1';
import CN2 from './CN2';
import CN3 from './CN3';
import CN4 from './CN4';
import CN5 from './CN5';
import CN6 from './CN6';
import CN7 from './CN7';
import CN8 from './CN8';
import CN9 from './CN9';
import CN10 from './CN10';
import CN11 from './CN11';
import CN12 from './CN12';
import CN13 from './CN13';
import CN14 from './CN14';
import CN15 from './CN15';
import CN16 from './CN16';
import CN17 from './CN17';
import CN18 from './CN18';
import CN19 from './CN19';
import redtie1 from './redtie1';
import redtie2 from './redtie2';
import redtie3 from './redtie3';
import redtie4 from './redtie4';
import greentie1 from './greentie';
import './index.css';

const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  textUpdater1: TextUpdaterNode1,
  textUpdater2: TextUpdaterNode2,
  textUpdater3: TextUpdaterNode3,
  textUpdater4: TextUpdaterNode4,
  textUpdater5: TextUpdaterNode5,
  rectangle1: Rectangle1,
  rectangle2: Rectangle2,
  cn1: CN1,
  cn2: CN2,
  cn3: CN3,
  cn4: CN4,
  cn5: CN5,
  cn6: CN6,
  cn7: CN7,
  cn8: CN8,
  cn9: CN9,
  cn10: CN10,
  cn11: CN11,
  cn12: CN12,
  cn13: CN13,
  cn14: CN14,
  cn15: CN15,
  cn16: CN16,
  cn17: CN17,
  cn18: CN18,
  cn19: CN19,
  redtie1: redtie1,
  redtie2: redtie2,
  redtie3: redtie3,
  redtie4: redtie4,
  greentie1: greentie1,
};

const initialNodes = [
  { id: '1', type: 'textUpdater', position: { x: -90, y: -49 }, draggable: false },
  { id: '2', type: 'textUpdater1', position: { x: -30, y: -49 }, draggable: false },
  { id: '3', type: 'textUpdater2', position: { x: 30, y: -49 }, draggable: false },
  { id: '4', type: 'textUpdater3', position: { x: -90, y: 70 }, draggable: false },
  { id: '5', type: 'textUpdater4', position: { x: -30, y: 70 }, draggable: false },
  { id: '6', type: 'textUpdater5', position: { x: 30, y: 70 }, draggable: false },
  { id: '7', type: 'rectangle1', position: { x: -110, y: -7 }, draggable: false },
  { id: '8', type: 'rectangle2', position: { x: -420, y:-25}, draggable: true},
  {id: '9', type:'cn1', position: {x:-65, y:-130}, draggable: false},
  {id: '10', type:'cn2', position: {x:-65, y:-130}, draggable: false},
  {id: '11', type:'cn3', position: {x:-65, y:-130}, draggable: false},
  {id: '12', type:'cn4', position: {x:-380, y:140}, draggable: false},
  {id: '13', type:'cn5', position: {x:-200, y:140}, draggable: false},
  {id: '14', type:'cn6', position: {x:-90, y:140}, draggable:false},
  {id: '15', type:'cn7', position: {x:20, y:140}, draggable:false},
  {id: '16', type:'cn8', position: {x:230, y:-20}, draggable:false},
  {id: '17', type:'cn9', position: {x:230, y:-5}, draggable:false},
  {id: '18', type:'cn10', position: {x:230, y:35}, draggable:false},
  {id: '19', type:'cn11', position: {x:275, y:-49}, draggable:false},
  {id: '20', type:'cn12', position: {x:275, y:68}, draggable:false},
  {id: '21', type:'cn13', position: {x:275, y:120}, draggable:false},
  {id: '22', type:'cn14', position: {x:140, y:-40}, draggable:false},
  {id: '23', type:'cn15', position: {x:200, y:-37}, draggable:false},
  {id: '24', type:'cn16', position: {x:240, y:-37}, draggable:false},
  {id: '25', type:'cn17', position: {x:280, y:-37}, draggable:false},
  {id: '26', type:'redtie1', position: {x:208, y:-70}, draggable:false},
  {id: '27', type:'redtie2', position: {x:208, y:-45}, draggable:false},
  {id: '28', type:'redtie3', position: {x:208, y:71}, draggable:false},
  {id: '29', type:'redtie4', position: {x:208, y:123}, draggable:false},
  {id: '30', type:'greentie1', position: {x:164, y:-5}, draggable:false},
  {id: '31', type:'cn18', position: {x:210, y:-125}, draggable:false},
  {id: '32', type:'cn19', position: {x:290, y:-125}, draggable:false},
]

const initialEdges = [
  { id: 'e1', source: '2', target: '1',sourceHandle: 'e4s',targetHandle: 'e2t', type: 'straight',style: {stroke: '#c0c5c9',strokeWidth: 8}},
  { id: 'e2', source: '3', target: '2',sourceHandle: 'e6s',targetHandle: 'e4t', type: 'straight',style: {stroke: '#c0c5c9',strokeWidth: 8}},
  { id: 'e3', source: '2', target: '1',sourceHandle: 'e3s',targetHandle: 'e1t', type: 'straight',style: {stroke: '#c0c5c9',strokeWidth: 8}},
  { id: 'e4', source: '3', target: '2',sourceHandle: 'e5s',targetHandle: 'e3t', type: 'straight',style: {stroke: '#c0c5c9',strokeWidth: 8}},
  { id: 'e5', source: '5', target: '4',sourceHandle: 'e9s',targetHandle: 'e7t', type: 'straight',style: {stroke: '#c0c5c9',strokeWidth: 8}},
  { id: 'e6', source: '5', target: '4',sourceHandle: 'e10s',targetHandle: 'e8t', type: 'straight',style: {stroke: '#c0c5c9',strokeWidth: 8}},
  { id: 'e7', source: '6', target: '5',sourceHandle: 'e11s',targetHandle: 'e9t', type: 'straight',style: {stroke: '#c0c5c9',strokeWidth: 8}},
  { id: 'e8', source: '6', target: '5',sourceHandle: 'e12s',targetHandle: 'e10t', type: 'straight',style: {stroke: '#c0c5c9',strokeWidth: 8}},
  { id: 'e9', source: '3', target: '6',sourceHandle: 'e6s',targetHandle: 'e11t', type: 'smoothstep',style: {stroke: '#c0c5c9',strokeWidth: 8}},
  { id: 'e10', source: '19', target: '3',sourceHandle: 'e13s',targetHandle: 'e5t', type: 'straight',style: {stroke: '#c0c5c9',strokeWidth: 8}},
  { id: 'e11', source: '20', target: '6',sourceHandle: 'e14s',targetHandle: 'e11t', type: 'smoothstep',style: {stroke: '#c0c5c9',strokeWidth: 8}},
  { id: 'e12', source: '21', target: '3',sourceHandle: 'e15s',targetHandle: 'e5t', type: 'smoothstep',style: {stroke: '#c0c5c9',strokeWidth: 8}},
  // { id: 'e13', source: '6', target: '3',sourceHandle: 'e12s',targetHandle: 'e5t', type: 'smoothstep',style: {stroke: '#c0c5c9',strokeWidth: 8}},
  { id: 'e14', source: '6', target: '22',sourceHandle: 'e12s',targetHandle: 'e16t', type: 'smoothstep',style: {stroke: '#c0c5c9',strokeWidth: 8}},
  { id: 'e15', source: '23', target: '24',sourceHandle: 'e17s',targetHandle: 'e18t', type: 'smoothstep',style: {stroke: '#c0c5c9',strokeWidth: 8}},




];
function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState('');
  const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleNodeClick = (event, node) => {
      if (node.id === '32') {
        setLoading(true);
        setTimeout(() => {
          // setLoading(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 300000);
        },);
      }
    };
  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
      setCurrentDate(new Date().toLocaleDateString());
    }, 1000);
    return () => clearInterval(timerID);
  }, []);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const handleCloseLoadingPane = () => {
    setLoading(false);
  };

  return (
    <div style={{ width: '100%', height: '550px'}}>
      <div className='navbar'>
        <div className='top1'>
          <div id="current-time" className='current-time'>{currentTime.toLocaleTimeString()}</div>
          <div>
            <button id="display-button" className='display-button'>Displays</button>
            <button id="logon-button" className='logon-button'>Log On...</button>
          </div>
        </div>
        <div className='top2'>
            <div>
              <div className='commontext1'>UNIT SUCTION<div className='blackbox'><div className='blackboxtext'>757 PSIG</div></div></div>
              <br></br>
              <div className='commontext2'>SUCT HEADER<div className='blackbox1'><div className='blackboxtext1'>727 PSIG</div></div></div>
            </div>
        </div>
        <div className='top3'>
            <div className='text3'>
              MANSFIELD <br></br>Unit 101
            </div>
            <br></br>
            <div className='text4'>
              CURRENT USER:DEFAULT
            </div>
        </div>
        <div className='top4'> 
            <div>
              <div className='commontext3'>UNIT DISCH<div className='blackbox2'><div className='blackboxtext'>757 PSIG</div></div></div>
              <br></br>
              <div className='commontext4'>DIS HEADER<div className='blackbox3'><div className='blackboxtext1'>727 PSIG</div></div></div>
            </div>
        </div>
        <div className='top5'>
              <div className='tr1'>
                <button className='blackbox4'>REMOTE</button>
                <div className="current-date">{currentDate}</div>
              </div>
              <div className='tr2'>
                <button id="button1" className='button1'>Configuration</button>
                <button id="button2" className='button2'>Utilities</button>
                <button id="button3" className='button3'>Trending</button>
              </div>
        </div>
      </div>
      <div className='greybox'>
              <div className='greyboxtext'>UNIT 1 OVERVIEW</div>
            </div>
            {loading && (
        <div className="loading-pane">
          <div className='loadingpane2'>
                <p className='loadingtext'>The given valve is not functioning as expected</p>
            <button onClick={handleCloseLoadingPane} className='xbutton'>x</button>
          </div>
        </div>
      )}
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        fitView
        style={rfStyle}
        elementsSelectable={true}
        edgesUpdatable={false}
        panOnDrag={false}
        preventScrolling
        zoomOnScroll={false}
        onNodeClick={handleNodeClick}
      />
      {/* {loading && (
        <div className="loading-pane">
          <div className='loadingpane2'>
                <p className='loadingtext'>The given valve is not functioning as expected</p>
            <button onClick={handleCloseLoadingPane} className='xbutton'>x</button>
          </div>
        </div>
      )} */}
      {/* {success && (
        <div className="blinking-text">
        </div>
      )} */}
      <div className="navbarbottom">
      {success && (
        <div className="blinking-text">
        </div>
      )}
          <div className="block1">
            <div className="block1title"><b>GENERAL DATA</b></div>
            <br></br>
            <div className='block1text'>ENGINE RUN HOURS: <div className='blackbox15'><div className='blackboxtext2'>3.0</div></div></div>
            <div className='block1text'>START ATTEMPT: <div className='blackbox15'><div className='blackboxtext2'>26</div></div></div>
            <div className='block1text'>SUCCESS STARTS: <div className='blackbox15'><div className='blackboxtext2'>4</div></div></div>
            <div className='block1text'>ACTUAL SPEED: <div className='blackbox15'><div className='blackboxtext2'>0.0 RPM</div></div></div>
            <div className='block1text'>DESIRED SPEED: <div className='blackbox15'><div className='blackboxtext2'>0.0 RPM</div></div></div>
            <div className='block1text'>SEQUENCE STEP: <div className='blackbox15'><div className='blackboxtext2'>42</div></div></div>
            <div className='block1text'>COMP LOAD STEP: <div className='blackbox15'><div className='blackboxtext2'>1</div></div></div>
          </div>
          <div className="block2">
            <div className="block2title"><b>TEMPERATURES</b></div>
            <br></br>
            <div className='block2text'>PRE CATALYST: <div className='blackbox15'><div className='blackboxtext2'>79.1 F</div></div></div>
            <div className='block2text'>POST CATALYST: <div className='blackbox15'><div className='blackboxtext2'>80.8 F</div></div></div>
            <div className='block2text'>HT OUT OF ENGINE: <div className='blackbox15'><div className='blackboxtext2'>138.0 F</div></div></div>
            <div className='block2text'>HT INTO ENGINE: <div className='blackbox15'><div className='blackboxtext2'>141.1 F</div></div></div>
            <div className='block2text'>LT OUT OF ENGINE: <div className='blackbox15'><div className='blackboxtext2'>82.2 F</div></div></div>
            <div className='block2text'>LT INTO ENGINE: <div className='blackbox15'><div className='blackboxtext2'>83.1 F</div></div></div>
            <div className='block2text'>ENGINE OIL: <div className='blackbox15'><div className='blackboxtext2'>86.0 F</div></div></div>
          </div>
          <div className="block3">
            <div className="block3title"><b>COMPRESSOR OIL</b></div>
            <br></br>
            <div className='block3text'>TEMPERATURE: <div className='blackbox15'><div className='blackboxtext2'>78.0 F</div></div></div>
            <div className='block3text'>PRESSURE A: <div className='blackbox15'><div className='blackboxtext2'>0.8 PSIG</div></div></div>
            <div className='block3text'>PRESSURE B: <div className='blackbox15'><div className='blackboxtext2'>0.9 PSIG</div></div></div>
            <div className='block3text'>FILTER DIFF PRESS: <div className='blackbox15'><div className='blackboxtext2'>0.1 PSID</div></div></div>
            <div className='block3textexception'>HOTSTART RUNNING: <div className='greencircle'></div></div>
          </div>
          <div className="block4">
            <div className="block4title"><b>COMPRESSOR PERFORMANCE</b></div>
            <br></br>
            <div className='block4text'>ENGINE LOAD: <div className='blackbox15'><div className='blackboxtext2'>78.0 F</div></div></div>
            <div className="block4title"><b>COMPRESSOR ROD LOAD</b></div>
            <br></br>
            <div className='block4text'>TENSION: <div className='blackbox15'><div className='blackboxtext2'>-6.2%</div></div></div>
            <div className='block4text'>COMPRESSION: <div className='blackbox15'><div className='blackboxtext2'>5.7%</div></div></div>
          </div>
      </div>
    </div>
  );
}

export default Flow;
