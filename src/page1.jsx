import React from 'react';
import ReactFlow, { Background, MarkerType,useNodesState,useEdgesState,addEdge,Controls, Handle, Position, NodeToolbar} from 'reactflow';
import 'reactflow/dist/style.css';
import './s1.css';
import { Link } from 'react-router-dom';
export const nodes = [
  // { id: '26', position: { x: 5, y: 0 }, data: { label: '' } ,targetPosition: 'left',sourcePosition: 'left', style: {border:'2px solid #000000',height:'680px',width:'1420px'}},
    { id: '1', position: { x: 240, y: 50 }, data: { label: <Link to='/compressor'>Compressors</Link> },targetPosition: 'bottom',sourcePosition: 'right', style: {border:'2px solid #00a900'}},
    { id: '2', position: { x: 850, y: 50 }, data: { label: 'To EXPORT' } ,targetPosition: 'left', style: {border:'2px solid #00a900'}},
    { id: '3', position: { x: 240, y: 160 },data: { label: <Link to='/hpseparator'>HP Separator</Link>},targetPosition: 'left',sourcePosition: 'top', style: {border:'2px solid #000000'}},
    { id: '4', position: { x: 240, y: 215 }, data: { label: 'HP Test Separator' },targetPosition: 'left', style: {border:'2px solid #000000'}},
    { id: '5', position: { x: 240, y: 270 }, data: { label: 'IP/HP Separator' },targetPosition: 'left', style: {border:'2px solid #000000'}},
    { id: '6', position: { x: 240, y: 325 }, data: { label: 'IP/HP Test Separator' },targetPosition: 'left',sourcePosition: 'right', style: {border:'2px solid #000000'} },
    { id: '7', position: { x: 240, y: 380 }, data: { label: '4X LP Separators' },targetPosition: 'left', style: {border:'2px solid #000000'}},
    { id: '8', position: { x: 240, y: 435 }, data: { label: '4X LP Test Separator' },targetPosition: 'left',sourcePosition: 'right', style: {border:'2px solid #000000'}},
    { id: '9', position: { x: 240, y: 530 }, data: { label: '2X Skim Tanks' },targetPosition: 'top',sourcePosition: 'bottom', style: {border:'2px solid #0000ff'} },
    { id: '10', position: { x: 240, y: 580 }, data: { label: '9X Booster Pumps' },targetPosition: 'top',sourcePosition: 'right', style: {border:'2px solid #0000ff'} },
    { id: '11', position: { x: 10, y: 200 }, data: { label: <Link to='/wellhead'>Wellhead</Link> },sourcePosition: 'bottom', style: {border:'2px solid #000000'},type: 'input',},    
    { id: '12', position: { x: 10, y: 270 }, data: { label: 'Manifold' },targetPosition: 'top',sourcePosition: 'right', style: {border:'2px solid #000000'}},
    { id: '13', position: { x: 480, y: 580 }, data: { label: '11X Injection Pumps' },targetPosition: 'left',sourcePosition: 'right', style: {border:'2px solid #0000ff'} },
    { id: '14', position: { x: 720, y: 580 }, data: { label: 'Injection Wells' },targetPosition: 'left', style: {border:'2px solid #0000ff'}},
    { id: '15', position: { x: 450, y: 310 }, data: { label: '3X Gun Barrels' },targetPosition: 'left',sourcePosition: 'right', style: {border:'2px solid #fc0000'}},
    { id: '16', position: { x: 650, y: 310 }, data: { label: 'Degassing Boot' },targetPosition: 'left',sourcePosition: 'right', style: {border:'2px solid #fc0000'} },
    { id: '17', position: { x: 850, y: 310 }, data: { label: 'Surge Vessel' },targetPosition: 'left',sourcePosition: 'right', style: {border:'2px solid #fc0000'} },
    { id: '18', position: { x: 1050, y: 310 }, data: { label: '4X Storage Tanks' },targetPosition: 'left',sourcePosition: 'right', style: {border:'2px solid #fc0000'} },
    { id: '19', position: { x: 1250, y: 310 }, data: { label: '8X Shipping Pumps' },targetPosition: 'left', style: {border:'2px solid #fc0000'}},
    { id: '20', position: { x: 450, y: 215 }, data: { label: 'GL Compressor' },targetPosition: 'left',sourcePosition: 'right', style: {border:'2px solid #00a900'} },
    { id: '21', position: { x: 650, y: 215 }, data: { label: '2X Dehydrator' },targetPosition: 'left',sourcePosition: 'right', style: {border:'2px solid #00a900'} },
    { id: '22', position: { x: 850, y: 180 }, data: { label: 'Gas Lift Wells' },targetPosition: 'left', style: {border:'2px solid #00a900'}},
    { id: '23', position: { x: 850, y: 235 }, data: { label: '3X K.O. Drums' },targetPosition: 'bottom',sourcePosition: 'right', style: {border:'2px solid #00a900'} },
    { id: '24', position: { x: 1150, y: 205 }, data: { label: 'HP Flare' },targetPosition: 'left', style: {border:'2px solid #00a900'}},
    { id: '25', position: { x: 1150, y: 245 }, data: { label: 'LP Flare' },targetPosition: 'left', style: {border:'2px solid #00a900'}},
];
export const edges = [
    { id: 'e1-2', source: '1', target: '2',markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#00a900',}, type: 'straight',style: {stroke: '#00a900',strokeWidth: 1}},
    { id: 'e3-1', source: '3', target: '1', markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#00a900',}, type: 'step',style: { stroke: '#00a900',strokeWidth: 1}  },
    { id: 'e6-15', source: '6', target: '15', markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#00a900',}, type: 'step',style: { stroke: '#00a900',strokeWidth: 1}},
    { id: 'e8-20', source: '8', target: '20', markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#00a900',}, type: 'step',style: { stroke: '#00a900',strokeWidth: 1}  },
    { id: 'e8-9', source: '8', target: '9', markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#0000ff',}, type: 'step',style: { stroke: '#0000ff',strokeWidth: 1}  },
    { id: 'e9-10', source: '9', target: '10' , markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#0000ff',}, type: 'step',style: { stroke: '#0000ff',strokeWidth: 1} },
    { id: 'e10-13', source: '10', target: '13', markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#0000ff',}, type: 'step',style: { stroke: '#0000ff',strokeWidth: 1}  },
    { id: 'e11-12', source: '11', target: '12' , markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#000000',}, type: 'step',style: { stroke: '#000000',strokeWidth: 1}},
    { id: 'e12-3', source: '12', target: '3', markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#000000',}, type: 'step',style: { stroke: '#000000',strokeWidth: 1}  },
    { id: 'e12-4', source: '12', target: '4', markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#000000',}, type: 'step',style: { stroke: '#000000',strokeWidth: 1}  },
    { id: 'e12-5', source: '12', target: '5', markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#000000',}, type: 'step',style: { stroke: '#000000',strokeWidth: 1}  },
    { id: 'e12-6', source: '12', target: '6', markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#000000',}, type: 'step',style: { stroke: '#000000',strokeWidth: 1}  },
    { id: 'e12-7', source: '12', target: '7', markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#000000',}, type: 'step',style: { stroke: '#000000',strokeWidth: 1}  },
    { id: 'e12-8', source: '12', target: '8', markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#000000',}, type: 'step',style: { stroke: '#000000',strokeWidth: 1}  },
    { id: 'e13-14', source: '13', target: '14', markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#0000ff',}, type: 'step',style: { stroke: '#0000ff',strokeWidth: 1} },
    { id: 'e15-16', source: '15', target: '16', markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#fc0000',}, type: 'step',style: { stroke: '#fc0000',strokeWidth: 1}  },
    { id: 'e15-23', source: '15', target: '23', markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#00a900',}, type: 'step',style: { stroke: '#00a900',strokeWidth: 1}  },
    { id: 'e16-17', source: '16', target: '17' , markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#fc0000',}, type: 'step',style: { stroke: '#fc0000',strokeWidth: 1} },
    { id: 'e16-23', source: '16', target: '23' , markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#00a900',}, type: 'step',style: { stroke: '#00a900',strokeWidth: 1} },
    { id: 'e17-18', source: '17', target: '18' , markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#fc0000',}, type: 'step',style: { stroke: '#fc0000',strokeWidth: 1} },
    { id: 'e17-23', source: '17', target: '23' , markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#00a900',}, type: 'step',style: { stroke: '#00a900',strokeWidth: 1} },
    { id: 'e18-19', source: '18', target: '19' , markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#fc0000',}, type: 'step',style: { stroke: '#fc0000',strokeWidth: 1} },
    { id: 'e20-21', source: '20', target: '21' , markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#00a900',}, type: 'step',style: { stroke: '#00a900',strokeWidth: 1} },
    { id: 'e21-22', source: '21', target: '22' , markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#00a900',}, type: 'step',style: { stroke: '#00a900',strokeWidth: 1} },
    { id: 'e21-23', source: '21', target: '23' , markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#00a900',}, type: 'step' ,style: { stroke: '#00a900',strokeWidth: 1}},
    { id: 'e23-24', source: '23', target: '24' , markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#00a900',}, type: 'step',style: { stroke: '#00a900',strokeWidth: 1} },
    { id: 'e23-25', source: '23', target: '25' , markerEnd: {type: MarkerType.ArrowClosed,width: 20,height: 20,color: '#00a900',}, type: 'step',style: { stroke: '#00a900',strokeWidth: 1} },
];
export default function page1() {
  return (
    <div style={{ width: '1420px', height: '750px',position: 'relative' }}>
            <h1 style={{  fontSize: '24px', lineHeight: '50px', margin: 0, textAlign: 'center' }}><a href="/">DEMO COMPANY</a></h1>
            <div style={{ top: '70px', width: '100%', height: 'calc(100% - 70px)' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          elementsSelectable={false}
          panOnDrag={false}
          preventScrolling
          zoomOnScroll={false}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}