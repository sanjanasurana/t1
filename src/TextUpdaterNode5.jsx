import React, { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import redsyringeinv from './redsyringeinv.png';
import limesyringe from './limesyringe.png';

function TextUpdaterNode({ data, isConnectable }) {
  const [numberValue5, setNumberValue5] = useState('');

  useEffect(() => {
    const savedNumberValue5 = localStorage.getItem('savedNumberValue5');
    if (savedNumberValue5) {
      setNumberValue5(savedNumberValue5);
    }
  }, []);

  const handleInputChange5 = (e) => {
    const value = e.target.value;
    setNumberValue5(value);
    localStorage.setItem('savedNumberValue5', value);
  };

  return (
    <div className="text-updater-node">
      <div className='text1'>
        DISCHARGE
      </div>
      <div className="input-container">
        <input
          type="text"
          className="custom-input"
          value={numberValue5}
          onChange={handleInputChange5}
        />
      </div>
      <>
      <Handle
          type="source"
          position={Position.Right}
          id="e11s"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'10px',boxSizing:'border-box',opacity:'0'}}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Right}
          id="e11t"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'10px',boxSizing:'border-box',opacity:'0'}}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="e12s"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'30px',boxSizing:'border-box',opacity:'0'}}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Right}
          id="e12t"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'30px',boxSizing:'border-box',opacity:'0'}}
          isConnectable={isConnectable}
        />
    </>
    <img src={limesyringe} className='syringe2inv'></img>
    <img src={redsyringeinv} className='syringe1inv'></img>
    </div>
  );
}

export default TextUpdaterNode;
