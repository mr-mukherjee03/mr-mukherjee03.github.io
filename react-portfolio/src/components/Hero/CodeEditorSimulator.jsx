import React, { useState, useEffect } from 'react';
import styles from "./CodeEditorSimulator.module.css"; 

const CodeEditorSimulator = () => {
  const rawCode = [
    { text: 'print', className: 'function' },
    { text: '(', className: 'default' },
    { text: '" Hello World ! I\'m mr-mukherjee03 ."', className: 'string' },
    { text: ')', className: 'default' },
  ];

  const fullText = rawCode.map(token => token.text).join('');
  const [charIndex, setCharIndex] = useState(0);

  // Reconstruct highlighted JSX while typing
  const getHighlightedCode = () => {
    let typed = fullText.slice(0, charIndex);
    let output = [];
    let typedSoFar = 0;

    for (let i = 0; i < rawCode.length; i++) {
      const { text, className } = rawCode[i];
      const remaining = typed.length - typedSoFar;

      if (remaining <= 0) break;

      const visibleText = text.slice(0, Math.min(text.length, remaining));
      output.push(
        <span key={i} className={styles[className]}>
          {visibleText}
        </span>
      );
      typedSoFar += visibleText.length;
    }

    return output;
  };

  useEffect(() => {
    if (charIndex < fullText.length) {
      const typingInterval = setTimeout(() => {
        setCharIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(typingInterval);
    }
  }, [charIndex, fullText]);

  return (
    <div className={styles.c}>
      <code>
        {getHighlightedCode()}
        {charIndex < fullText.length && <span className={styles.blinkingcursor}>|</span>}
      </code>
    </div>
  );
};

export default CodeEditorSimulator;



/*const styleSheet = `
.blinking-cursor {
  font-weight: 100;
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: white; /* Or whatever your text color is 
  }
}
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = styleSheet;
document.head.appendChild(styleElement);

*/
