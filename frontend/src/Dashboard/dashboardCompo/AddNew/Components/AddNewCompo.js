export const Input = ({
  handleChange,
  labelFor,
  labelText,
  isRequired,
  placeholder,
  type,
  id,
  value,
}) => {
  return (
    <div>
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        value={value}
        type={type}
        onChange={handleChange}
        id={id}
        required={isRequired}
        placeholder={placeholder}
      />
    </div>
  );
};
