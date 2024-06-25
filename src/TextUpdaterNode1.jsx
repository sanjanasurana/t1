import React, { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import redsyringe from './redsyringe.png';
import limesyringe from './limesyringe.png';

function TextUpdaterNode({ data, isConnectable }) {
  const [numberValue1, setNumberValue1] = useState('');

  useEffect(() => {
    const savedNumberValue1 = localStorage.getItem('savedNumberValue1');
    if (savedNumberValue1) {
      setNumberValue1(savedNumberValue1);
    }
  }, []);

  const handleInputChange1 = (e) => {
    const value = e.target.value;
    setNumberValue1(value);
    localStorage.setItem('savedNumberValue1', value);
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
          value={numberValue1}
          onChange={handleInputChange1}
        />
      </div>
      <>
      <Handle
          type="target"
          position={Position.Right}
          id="e3t"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'12px',boxSizing:'border-box',opacity:'0'}}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="e3s"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'12px',boxSizing:'border-box',opacity:'0'}}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="e4s"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'30px',boxSizing:'border-box',opacity:'0' }}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Right}
          id="e4t"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'30px',boxSizing:'border-box',opacity:'0' }}
          isConnectable={isConnectable}
        />
    </>
    <img src={limesyringe} className='syringe2'></img>
    <img src={redsyringe} className='syringe1'></img>
    </div>
  );
}

export default TextUpdaterNode;
