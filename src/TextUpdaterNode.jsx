import React, { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import redsyringe from './redsyringe.png';
import limesyringe from './limesyringe.png';
function TextUpdaterNode({ data, isConnectable }) {
  const [numberValue, setNumberValue] = useState('');

  useEffect(() => {
    const savedNumberValue = localStorage.getItem('savedNumberValue');
    if (savedNumberValue) {
      setNumberValue(savedNumberValue);
    }
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNumberValue(value);
    localStorage.setItem('savedNumberValue', value);
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
          value={numberValue}
          onChange={handleInputChange}
        />
      </div>
      <>
      <Handle
          type="target"
          position={Position.Right}
          id="e1t"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'12px',boxSizing:'border-box',opacity:'0',right:'9px'}}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Right}
          id="e2t"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'30px',boxSizing:'border-box',opacity:'0',right:'9px'}}
          isConnectable={isConnectable}
        />
    </>
    <img src={limesyringe} className='syringe2'></img>
    <img src={redsyringe} className='syringe1'></img>
    </div>
  );
}

export default TextUpdaterNode;
