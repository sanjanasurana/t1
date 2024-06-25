import React, { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import redsyringe from './redsyringe.png';
import limesyringe from './limesyringe.png';

function TextUpdaterNode({ data, isConnectable }) {
  const [numberValue2, setNumberValue2] = useState('');

  useEffect(() => {
    const savedNumberValue2 = localStorage.getItem('savedNumberValue2');
    if (savedNumberValue2) {
      setNumberValue2(savedNumberValue2);
    }
  }, []);

  const handleInputChange2 = (e) => {
    const value = e.target.value;
    setNumberValue2(value);
    localStorage.setItem('savedNumberValue2', value);
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
          value={numberValue2}
          onChange={handleInputChange2}
        />
      </div>
      <>
      <Handle
          type="source"
          position={Position.Right}
          id="e5s"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'12px',boxSizing:'border-box',opacity:'0'}}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Right}
          id="e5t"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'12px',boxSizing:'border-box',opacity:'0'}}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="e6s"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'30px' ,boxSizing:'border-box',opacity:'0'}}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Right}
          id="e6t"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'30px',boxSizing:'border-box',opacity:'0'}}
          isConnectable={isConnectable}
        />
    </>
    <img src={limesyringe} className='syringe2'></img>
    <img src={redsyringe} className='syringe1'></img>
    </div>
  );
}

export default TextUpdaterNode;
