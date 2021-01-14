import React from 'react'

export  function TextArea({children, onMouseUp}) {
    function selectableTextAreaMouseUp() {
        const selectedText = window.getSelection().toString().trim();
        const resoltado = selectedText.concat(" pessoa");
        console.log(resoltado);
        onMouseUp(resoltado);
      }
    return (
        <div onMouseUp={selectableTextAreaMouseUp}>
            <p>{children}</p>
            
        </div>
    )
}
