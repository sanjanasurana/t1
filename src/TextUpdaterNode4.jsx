import React, { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import redsyringeinv from './redsyringeinv.png';
import limesyringe from './limesyringe.png';

function TextUpdaterNode({ data, isConnectable }) {
  const [numberValue4, setNumberValue4] = useState('');

  useEffect(() => {
    const savedNumberValue4 = localStorage.getItem('savedNumberValue4');
    if (savedNumberValue4) {
      setNumberValue4(savedNumberValue4);
    }
  }, []);

  const handleInputChange4 = (e) => {
    const value = e.target.value;
    setNumberValue4(value);
    localStorage.setItem('savedNumberValue4', value);
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
          value={numberValue4}
          onChange={handleInputChange4}
        />
      </div>
      <>
      <Handle
          type="source"
          position={Position.Right}
          id="e9s"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'10px',boxSizing:'border-box',opacity:'0'}}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Right}
          id="e9t"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'10px',boxSizing:'border-box',opacity:'0'}}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="e10s"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'30px',boxSizing:'border-box',opacity:'0'}}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Right}
          id="e10t"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'30px',boxSizing:'border-box',opacity:'0' }}
          isConnectable={isConnectable}
        />
    </>
    <img src={limesyringe} className='syringe2inv'></img>
    <img src={redsyringeinv} className='syringe1inv'></img>
    </div>
  );
}

export default TextUpdaterNode;
