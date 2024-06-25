import React, { useState } from "react";
import ReactFlow, { MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

import './s1.css';

export default function HpSeparator() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleNodeClick = (event, node) => {
        if (node.id === '7') {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setSuccess(true);
                setTimeout(() => {
                    // setSuccess(false);
                }, 3000);
            }, 3000);
        }
    };

    const nodes = [
        { id: '1', position: { x: 100, y: 230 }, data: { label: 'Manifolds' }, targetPosition: 'right', sourcePosition: 'right', style: { border: '2px solid #00a900', backgroundColor: '#C2FABC' } },
        { id: '2', position: { x: 450, y: 175 }, data: { label: '' }, targetPosition: 'left', sourcePosition: 'right', style: { border: '15px solid #000000', height: '150px', width: '350px',backgroundColor: '#000000' } },
        { id: '3', position: { x: 500, y: 326 }, data: { label: 'Water Supply' }, targetPosition: 'bottom', sourcePosition: 'bottom', style: { border: '2px solid #0000ff', backgroundColor: '#b4ffff' } },
        { id: '4', position: { x: 630, y: 135 }, data: { label: '' }, targetPosition: 'top', sourcePosition: 'top', style: { height: '41.63px', width: '150px', border: '2px solid #000000' } },
        { id: '5', position: { x: 1200, y: 231 }, data: { label: '' }, targetPosition: 'left', sourcePosition: 'left', style: { border: '2px solid #000000', height: '41.63px', width: '150px' } },
        { id: '6', position: { x: 850, y: 50 }, data: { label: `gas - reading HIGH HIGH` }, targetPosition: 'right', sourcePosition: 'left', style: { border: '2px solid #ff0000',color:'#ff0000' } },
        { id: '7', position: { x: 1050, y: 46 }, data: { label: 'Analyze problem' }, targetPosition: 'right', sourcePosition: 'left', style: { border: '2px solid #000000', height: '40px', width: '125px', backgroundColor: '#f7f7f7' } },
        { id: '8', position: { x: 455, y: 180 }, data: { label: '' }, targetPosition: 'left', sourcePosition: 'left', style: { border: '2px solid #C2FABC', height: '140px', width: '95px', backgroundColor: '#C2FABC' } },
        { id: '9', position: { x: 550, y: 250 }, data: { label: '' }, targetPosition: 'bottom', sourcePosition: 'bottom', style: { border: '2px solid #05ffff', height: '70px', width: '175px', backgroundColor: '#05ffff' } },
        { id: '10', position: { x: 550, y: 180 }, data: { label: '' }, targetPosition: 'top', sourcePosition: 'top', style: {height: '75px', width: '245px', backgroundColor: '#c042fd',border: '1px solid #c042fd' } },
        { id: '11', position: { x: 725, y: 250 }, data: { label: '' }, targetPosition: 'bottom', sourcePosition: 'bottom', style: {height: '70px', width: '70px', backgroundColor: '#c042fd',border: '1px solid #c042fd' } },
        { id: '12', position: { x: 550, y: 180 }, data: { label: '' }, targetPosition: 'top', sourcePosition: 'top', style: {height: '29px', width: '245px', backgroundColor: '#de4c46',border: '1px solid #de4c46' } },


    ];

    const edges = [
        { id: 'e1-2', source: '1', target: '2', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#00a900' }, type: 'straight', style: { stroke: '#00a900', strokeWidth: 1 }, label: 'From manifolds' },
        { id: 'e2-5', source: '2', target: '5', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#00a900' }, type: 'step', style: { stroke: '#00a900', strokeWidth: 1 }, label: 'Oil Supply' },
        { id: 'e6-4', source: '6', target: '4', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#00a900' }, type: 'step', style: { stroke: '#00a900', strokeWidth: 1 }, label: 'Gas Supply' },
        { id: 'e7-6', source: '7', target: '6', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#00a900' }, type: 'step', style: { stroke: '#00a900', strokeWidth: 1 } },
    ];

    return (
        <div style={{ width: '1420px', height: '750px', position: 'relative' }}>
            <h1 style={{  fontSize: '24px', lineHeight: '50px', margin: 0, textAlign: 'center' }}><a href="/">DEMO COMPANY</a></h1>
            <div style={{ width: '100%', height: '600px' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    elementsSelectable={false}
                    panOnDrag={false}
                    preventScrolling
                    zoomOnScroll={false}
                    style={{ width: '100%', height: '100%' }}
                    onNodeClick={handleNodeClick}
                />
                {loading && (
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '5px' }}>
                        <h2>Analyzing...</h2>
                    </div>
                )}
                {success&&(
                <div style={{ backgroundColor: '#C2FABC', padding: '20px', borderRadius: '5px', textAlign:'center',border:'2px solid black' }}>
                        <h2>Liquid Coming in Gas Tank #123</h2>
                </div>
            )}        
            </div>
        </div>
    );
}
