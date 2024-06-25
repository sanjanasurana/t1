import React from 'react';
// import { Handle } from 'react-flow-renderer';
import { Handle, Position} from 'reactflow';

function CN12() {
    return (
      <div>
        <div className='thinstrip'></div>
        <>
            <Handle
            type="source"
            position={Position.Left}
            id="e14s"
            style={{ background: '#898a8c', width: '1px', height: '1px', borderRadius: '50%', top:'12px',boxSizing:'border-box',border:'1px solid black',opacity:'0'}}
            // isConnectable={isConnectable}
            />
        </>
      </div>
  );
}
export default CN12;
