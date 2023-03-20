import React, { useMemo, useState } from "react";
import ProjectTable from "./Tables/ProjectTable";
import { projectHead } from "./Tables/TableCompo/TableCompo";
import AddNew from "./AddNew/AddNew";
import { projectFields } from "./AddNew/constants/FormFields";
import { AddButton } from "./AddNew/Components/AddNewCompo";

const fields = projectFields;
let fieldsState = {};
let fieldsState2 = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Project = ({
  projects,
  handleDelete,
  handleAddNew,
  handleUpdate,
  handleConnect,
  toggleAdd,
  setToggleAdd,
}) => {
  //const [toggleAdd, setToggleAdd] = useState(false);

  const [editState, setEditState] = useState(false);
  const [editId, setEditId] = useState("");
  const projectCat = projects.filter(
    (project) => project.category === "project"
  );
  const columns = useMemo(projectHead, []);
  const data = useMemo(() => projectCat, [projectCat]);

  // handlers
  const handleEdit = (id) => {
    setEditId(id);
    setToggleAdd(true);
    setEditState(true);
    let theObject = projects.filter((elem) => elem._id === id);
    let editObject = theObject[0];
    // delete not needed properties
    delete editObject["_id"];
    delete editObject["category"];
    delete editObject["__v"];
    delete editObject["date"];

    // replacing key names
    editObject.projectLanguage = editObject.proj_language;
    delete editObject.proj_language;
    editObject.projectTools = editObject.proj_tools;
    delete editObject.proj_tools;
    editObject.projectName = editObject.proj_name;
    delete editObject.proj_name;
    editObject.projectRatings = editObject.proj_ratings;
    delete editObject.proj_ratings;
    editObject.projectLink = editObject.proj_link;
    delete editObject.proj_link;
    //console.log(editObject);
    //

    fields.forEach((field) => {
      //console.log(editObject[field.id]);
      fieldsState2[field.id] = editObject[field.id];
    });
  };

  // convert to object
  const mainObject = (object) => {
    return {
      proj_language: object.projectLanguage,
      proj_name: object.projectName,
      proj_tools: object.projectTools,
      proj_ratings: object.projectRatings,
      proj_link: object.projectLink,
      category: "project",
    };
  };

  // Gen Addition
  const handleGenSubmit = async (object) => {
    const theObject = mainObject(object);
    try {
      await handleAddNew(theObject);
    } catch (error) {
      console.log(error);
    }
  };
  // gen Update
  // constant headers
  const handleGenUpdate = async (object, id) => {
    const theObject = mainObject(object);
    try {
      await handleUpdate(theObject, id);
    } catch (error) {
      console.log(error);
    }
  };

  if (toggleAdd) {
    return (
      <>
        <AddNew
          setToggleAdd={setToggleAdd}
          fields={projectFields}
          setEditState={setEditState}
          editState={editState}
          fieldsState={!editState ? fieldsState : fieldsState2}
          handleGenSubmit={handleGenSubmit}
          handleGenUpdate={handleGenUpdate}
          handleConnect={handleConnect}
          editId={editId}
        />
      </>
    );
  }

  return (
    <div className="">
      <AddButton setToggleAdd={setToggleAdd} />

      <ProjectTable
        data={data}
        columns={columns}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Project;
