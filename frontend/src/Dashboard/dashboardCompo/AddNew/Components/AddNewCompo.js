import { GoPlus } from "react-icons/go";

// initiate or instatiations
const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";
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
      <div className="my-5">
        <label className="block" htmlFor={labelFor}>
          {labelText}
        </label>
        <textarea
          cols="30"
          rows="10"
          onChange={handleChange}
          id={id}
          name={id}
          required={isRequired}
          placeholder={placeholder}
          value={value}
          className={fixedInputClass}
        >
          {value}
        </textarea>
      </div>
    );
  }

  return (
    <div className="my-5">
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        value={value}
        type={type}
        onChange={handleChange}
        id={id}
        required={isRequired}
        placeholder={placeholder}
        className={fixedInputClass}
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
