import { GoPlus } from "react-icons/go";

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
  if (type === "textarea") {
    return (
      <div>
        <label htmlFor={labelFor}>{labelText}</label>
        <textarea
          cols="30"
          rows="10"
          onChange={handleChange}
          id={id}
          name={id}
          required={isRequired}
          placeholder={placeholder}
          value={value}
        >
          {value}
        </textarea>
      </div>
    );
  }

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

// the add button
export const AddButton = ({ setToggleAdd }) => {
  return (
    <div>
      <span
        className="text-3xl text-green-300 uppercase flex items-center mb-2 cursor-pointer "
        onClick={() => setToggleAdd(true)}
      >
        <GoPlus /> Add New
      </span>
    </div>
  );
};
