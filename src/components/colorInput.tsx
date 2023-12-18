interface ColorInputProps {
    value: Color[]
    setValue: (mark: number, color: Color) => void
}

export type Color = string

function ColorInputComponent(props: ColorInputProps) {
    return (
        <>
            \\  Переделать компонент цвета оставить для альтмана коммент что типо вот мой, но я придумал лучше а то 4 инпута конечно кринж
            <input type="color" value={props.value[4]} onChange={e =>
                props.setValue(4, e.target.value)
            }/>
            <input type="color" value={props.value[3]} onChange={e =>
                props.setValue(3, e.target.value)
            }/>
            <input type="color" value={props.value[2]} onChange={e =>
                props.setValue(2, e.target.value)
            }/>
            <input type="color" value={props.value[1]} onChange={e =>
                props.setValue(1, e.target.value)
            }/>
        </>
    )
}

export default ColorInputComponent