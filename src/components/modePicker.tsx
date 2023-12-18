import React, {useRef} from "react";

interface ModePickerProps {
    mode: String;
    setMode: (mode: string) => void;
}

function ModePickerComponent(props: ModePickerProps) {
    let modes: string[] = ["Full", "Short"]; // TODO НАДО ВЫНЕСТИ В ENUM КУДА НИБУДЬ В ДАТУ

    //TODO ВОТ ЭТУ ТЕМУ НАДО ИСПРАВИТЬ НЕ ЗАБУДЬ

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let refs: React.RefObject<HTMLInputElement>[] = modes.map(() => useRef(null));

    return (
        <>
            <h3>Output Mode</h3>
            {modes.map((mode: string, index: number) => (
                <span key={index}>
          <input
              type="radio"
              value={mode}
              ref={refs[index]}
              onClick={e => {
                  if (e.currentTarget.value === props.mode) props.setMode(e.currentTarget.value)
              }}
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
