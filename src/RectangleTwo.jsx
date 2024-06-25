import React from 'react';
import { Handle } from 'react-flow-renderer';

function Rectangle2() {
  const buttonStyle = {
    width: 28,
    height: 28,
    borderRadius: '50%',
    display: 'inline-flex',
    margin: '4px',
    textAlign: 'center',
    color: 'black',
    fontSize: '16px',
    backgroundColor: 'rgb(232 232 232)',
    position: 'relative',
    gap: '1px',
    lineHeight: '1',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 287,
    height: 124,
    backgroundColor: '#fff',
    position: 'relative',
    border: '0.5px solid #ddd',
    borderRadius: '8px',
  };

  const numberStyleTop = {
    position: 'absolute',
    top: '-30px',
    width: 'calc(100% + 8px)',
    left: -4,
    fontSize: '8px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '0.5px solid #ddd',
    borderBottom: '0.5px solid #ddd',
  };

  const numberStyleBottom = {
    position: 'absolute',
    bottom: '-30px', 
    width: 'calc(100% + 8px)',
    left: -4,
    fontSize: '8px', 
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '0.5px solid #ddd',
    borderTop: '0.5px solid #ddd',
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', position: 'relative' }}>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{16}</div>
          <div className='text6'>8B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>124</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{14}</div>
          <div className='text6'>7B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>127</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{12}</div>
          <div className='text6'>6B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>127</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{10}</div>
          <div className='text6'>5B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>127</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{8}</div>
          <div className='text6'>4B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{6}</div>
          <div className='text6'>3B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>129</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{4}</div>
          <div className='text6'>2B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>124</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={{...numberStyleTop, borderRight: "none"}}>{2}</div>
          <div className='text6'>1B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
      </div>
      <div style={{ display: 'flex', position: 'relative' }}>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{15}</div>
          <div className='text6'>8A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{13}</div>
          <div className='text6'>7A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{11}</div>
          <div className='text6'>6A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{9}</div>
          <div className='text6'>5A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{7}</div>
          <div className='text6'>4A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{5}</div>
          <div className='text6'>3A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{3}</div>
          <div className='text6'>2A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={{...numberStyleBottom, borderRight: "none"}}>{1}</div>
          <div className='text6'>1A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
      </div>
    </div>
  );
}

export default Rectangle2;
