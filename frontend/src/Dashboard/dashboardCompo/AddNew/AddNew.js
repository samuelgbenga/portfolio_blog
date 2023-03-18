import React, { useState } from "react";
import { Input } from "./Components/AddNewCompo";

const AddNew = ({
  setToggleAdd,
  fields,
  fieldsState,
  handleGenSubmit,
  setEditState,
  editState,
}) => {
  const [submitState, setSubmitState] = useState(fieldsState);

  //handles
  const handleChange = (e) => {
    setSubmitState({ ...submitState, [e.target.id]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setEditState(false);
    if (editState) {
      console.log("edit");
    } else {
      handleGenSubmit(submitState);
    }
  };
  const handleGoBack = () => {
    setEditState(false);
    setToggleAdd((prev) => !prev);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={submitState[field.id]}
            labelText={field.labelText}
            labelFor={field.lableFor}
            id={field.id}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            type={field.type}
          />
        ))}
        <div>
          {!editState ? (
            <button
              type="submit"
              disabled={false}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            >
              Submit
            </button>
          ) : (
            <button
              type="submit"
              disabled={false}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            >
              Update
            </button>
          )}
        </div>
      </form>
      <button onClick={handleGoBack}>go back</button>
    </div>
  );
};

export default AddNew;
