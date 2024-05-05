function TextArea({
  className = "",
  id = "",
  name = "",
  disabled = false,
  readOnly = false,
  onChange = () => {},
  placeholder = "",
  rows = 1,
  index = -1,
  value = "",
}) {
  function handleInput(e) {
    onChange({ value: e.target.value, name, id, index });
  }

  return (
    <div className={`own-class ${className}`}>
      <textarea
        rows={rows}
        placeholder={placeholder}
        id={id}
        name={name}
        disabled={disabled}
        readOnly={readOnly}
        onInput={handleInput}
        value={value}
      ></textarea>
    </div>
  );
}

export default TextArea;
