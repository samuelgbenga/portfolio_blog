import { GrUserAdmin } from "react-icons/gr";
import { Link } from "react-router-dom";

const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

// head component
export const Header = ({ heading }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <GrUserAdmin className="h-14 w-14" />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
    </div>
  );
};

// input component
export const Input = ({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
}) => {
  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
      />
    </div>
  );
};

// footer component
export const Footer = ({ paragraph, linkName, linkUrl }) => {
  return (
    <div className="">
      <p className="text-center text-sm text-gray-600 mt-5">
        {paragraph}
        {"   "}
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
};
