import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
      <div>
        <p className='f3'>
          {'This App will detect faces from your pictures.'}
        </p>
        <div className='center'>
          <div className='form center pa4 br3 shadow-5 w-50'>
            <input className='f4 pa2 w-100  center' type='tex' onChange={onInputChange}/>
            <button
              className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
              onClick={onButtonSubmit}
            >Detect</button>
          </div>
        </div>
      </div>
    );
  }
  

export default ImageLinkForm;