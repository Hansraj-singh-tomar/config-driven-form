function Textfield({
    className = "",
    id = "",
    name = "",
    disabled = false,
    readOnly = false,
    onChange = () => { },
    placeholder = "",
    type = "text",
    index = -1,
    value = "",
    error
}) {
    function handleInput(e) {
        onChange({ value: e.target.value, name, id, index });
    }

    return (
        <div className={`own-class ${className}`}>
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                name={name}
                disabled={disabled}
                readOnly={readOnly}
                onInput={handleInput}
                value={value}
                required={true}
            />
            {error && <h2>{error}</h2>}
        </div>
    );
}

export default Textfield;