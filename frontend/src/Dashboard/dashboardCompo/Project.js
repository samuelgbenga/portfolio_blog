import React, { useMemo, useState } from "react";
import ProjectTable from "./Tables/ProjectTable";
import { GoPlus } from "react-icons/go";
import AddNew from "./AddNew/AddNew";
import { projectFields } from "./AddNew/constants/FormFields";

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
}) => {
  const [toggleAdd, setToggleAdd] = useState(false);

  const [editState, setEditState] = useState(false);
  const [editId, setEditId] = useState("");
  const projectCat = projects.filter(
    (project) => project.category === "project"
  );

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
      return (fieldsState2[field.id] = editObject[field.id]);
    });
  };

  // Gen Addition
  const handleGenSubmit = async (object) => {
    try {
      await handleAddNew({
        proj_language: object.projectLanguage,
        proj_name: object.projectName,
        proj_tools: object.projectTools,
        proj_ratings: object.projectRatings,
        proj_link: object.projectLink,
        category: "project",
      });
    } catch (error) {
      console.log(error);
    }
  };
  // gen Update
  // constant headers
  const handleGenUpdate = async (object, id) => {
    try {
      await handleUpdate(
        {
          proj_language: object.projectLanguage,
          proj_name: object.projectName,
          proj_tools: object.projectTools,
          proj_ratings: object.projectRatings,
          proj_link: object.projectLink,
          category: "project",
        },
        id
      );
    } catch (error) {
      console.log(error);
    }
  };
  const columns = useMemo(
    () => [
      {
        Header: "Project_id",
        accessor: "_id",
      },
      {
        Header: "Project",
        accessor: "proj_name",
      },
      {
        Header: "Language",
        accessor: "proj_language",
      },
      {
        Header: "Tools",
        accessor: "proj_tools",
      },
      {
        Header: "Url",
        accessor: "Proj_link",
      },
      {
        Header: "Ratings",
        accessor: "proj_ratings",
      },
      // extra
    ],
    []
  );

  const data = useMemo(() => projectCat, [projectCat]);

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
    <div className="min-h-screen overflow-auto bg-gray-100 text-gray-900">
      <span
        className="text-3xl text-green-300 uppercase flex items-center mb-2 cursor-pointer "
        onClick={() => setToggleAdd(true)}
      >
        <GoPlus /> Add New
      </span>

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
