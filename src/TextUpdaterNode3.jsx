import React, { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import redsyringeinv from './redsyringeinv.png';
import limesyringe from './limesyringe.png';
function TextUpdaterNode({ data, isConnectable }) {
  const [numberValue3, setNumberValue3] = useState('');

  useEffect(() => {
    const savedNumberValue3 = localStorage.getItem('savedNumberValue3');
    if (savedNumberValue3) {
      setNumberValue3(savedNumberValue3);
    }
  }, []);

  const handleInputChange3 = (e) => {
    const value = e.target.value;
    setNumberValue3(value);
    localStorage.setItem('savedNumberValue3', value);
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
          value={numberValue3}
          onChange={handleInputChange3}
        />
      </div>
      <>
      <Handle
          type="source"
          position={Position.Right}
          id="e7s"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'10px',boxSizing:'border-box',opacity:'0',right:'9px'}}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Right}
          id="e7t"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'10px',boxSizing:'border-box',opacity:'0',right:'9px'}}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="e8s"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'30px',boxSizing:'border-box',opacity:'0',right:'9px' }}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Right}
          id="e8t"
          style={{ background: '#555', width: '1px', height: '1px', borderRadius: '50%', top:'30px',boxSizing:'border-box',opacity:'0',right:'9px' }}
          isConnectable={isConnectable}
        />
    </>
    <img src={limesyringe} className='syringe2inv'></img>
    <img src={redsyringeinv} className='syringe1inv'></img>
    </div>
  );
}

export default TextUpdaterNode;
