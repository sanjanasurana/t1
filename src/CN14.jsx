import React from 'react';
// import { Handle } from 'react-flow-renderer';
import { Handle, Position} from 'reactflow';

function CN14() {
    return (
      <div>
        <div className='dummybox'></div>
        <>
            <Handle
            type="target"
            position={Position.Bottom}
            id="e16t"
            style={{ background: '#000000', width: '1px', height: '1px', borderRadius: '50%', boxSizing:'border-box',border:'none',opacity:'0',zIndex:'-1'}}
            // isConnectable={isConnectable}
            />
        </>
      </div>
  );
}
export default CN14;
