import React from 'react'

const Input = props => {
    const {
        id,
        label,
        onChange,
        name,
        value,
        type,
    } = props

    const handleChanged = ({ target }) => onChange({ name: target.name, value: target.value })

    return (
        <div>
            <label id={`label-${id}`} htmlFor={`input-${id}`}>
                {label}
                {' '}
                <input
                    id={`input-${id}`}
                    type={type}
                    onChange={handleChanged}
                    name={name}
                    value={value} />
            </label>
        </div>
    )
}

Input.defaultProps = {
    label: "No label passed",
    onChange: () => console.log('You did not pass a function'),
    type: "text",
}

export default React.memo(Input)