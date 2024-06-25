import React from 'react';
// import { Handle } from 'react-flow-renderer';
import { Handle, Position} from 'reactflow';

function CN15() {
    return (
      <div>
        <div className='dummybox'></div>
        <>
            <Handle
            type="source"
            position={Position.Top}
            id="e17s"
            style={{ background: '#898a8c', width: '1px', height: '1px', borderRadius: '50%', boxSizing:'border-box',border:'none',opacity:'0'}}
            // isConnectable={isConnectable}
            />
        </>
      </div>
  );
}
export default CN15;
