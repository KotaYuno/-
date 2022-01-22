import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { pushMessage } from '../firebase';

const MessageField = ({ inputEl, name, setText, text }) => {
    const [isComposed, setIsComposed] = useState(false);


    return (<TextField 
    onChange={(e) => {setText(e.target.value);}}
    fullWidth={true}
    autoFocus    
    inputRef={inputEl}            

    onKeyDown={(e) => {
                if(isComposed) return;

                const text = e.target.value;
                if (text === '') return;

                if (e.key === 'Enter') {
                    pushMessage({ name, text });
                    setText('');
                    e.preventDefault();
                }
            }}
            onCompositionStart={() => {setIsComposed(true);}}
            onCompositionEnd={() => {setIsComposed(false);}}
            value={text}
    />
    );
};


export default MessageField;