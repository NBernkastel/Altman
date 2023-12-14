import React, { MouseEventHandler, useRef } from "react";

interface ModePickerProps {
  mode: String;
  setMode: (mode: string) => void;
}

function ModePickerComponent(props: ModePickerProps) {
  let modes = ["Full", "Short"];

  // Initialize refs using the useRef hook
    // eslint-disable-next-line react-hooks/rules-of-hooks
  let refs: React.RefObject<HTMLInputElement>[] = modes.map(() => useRef(null));

  let action: MouseEventHandler = (event) => {
    // @ts-ignore
      const selectedMode = event.currentTarget.value; // Use 'value' instead of 'nodeValue'
    if (selectedMode !== props.mode) {
      props.setMode(selectedMode);
    }
  };

  return (
    <>
      <h3>Output Mode</h3>
      {modes.map((mode, index) => (
        <span key={index}>
          <input
            type="radio"
            value={mode}
            ref={refs[index]}
            onClick={action}
            name="outputMode"
            defaultChecked={props.mode === mode}
          />
          {mode}
        </span>
      ))}
    </>
  );
}

export default ModePickerComponent;
