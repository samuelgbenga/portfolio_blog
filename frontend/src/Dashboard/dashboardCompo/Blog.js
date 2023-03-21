import React, { useMemo, useState } from "react";
import { blogHead } from "./Tables/TableCompo/TableCompo";
import ProjectTable from "./Tables/ProjectTable";
import { AddButton } from "./AddNew/Components/AddNewCompo";
import AddNew from "./AddNew/AddNew";
import { blogFields } from "./AddNew/constants/FormFields";

const fields = blogFields;
let fieldsState = {};
let fieldsState2 = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Blog = ({
  projects,
  handleDelete,
  handleAddNew,
  handleUpdate,
  handleConnect,
  toggleAdd,
  setToggleAdd,
}) => {
  // instantiatie
  //useStates
  const [editState, setEditState] = useState(false);
  const [editId, setEditId] = useState("");
  // useMemo and normal variables
  const blogCat = projects.filter((project) => project.category === "blogpost");
  const columns = useMemo(blogHead, []);
  const data = useMemo(() => blogCat, [blogCat]);

  // handlers
  const handleEdit = (id) => {
    setEditId(id);
    setToggleAdd(true);
    setEditState(true);
    let theObject = projects.filter((elem) => elem._id === id);
    let editObject = theObject[0];
    console.log(editObject);
    // delete not needed properties
    delete editObject["_id"];
    delete editObject["category"];
    delete editObject["__v"];
    delete editObject["date"];

    // // replacing key names
    editObject.blogTitle = editObject.blog_title;
    delete editObject.blog_title;
    editObject.blogDescription = editObject.blog_desc;
    delete editObject.blog_desc;
    editObject.blogContent = editObject.blog_content;
    delete editObject.blog_content;
    editObject.blogDate = editObject.blog_date;
    delete editObject.blog_date;
    // editObject.projectLink = editObject.proj_link;
    // delete editObject.proj_link;

    //

    fields.forEach((field) => {
      //console.log(editObject[field.id]);
      fieldsState2[field.id] = editObject[field.id];
    });
  };

  // convert to object
  const mainObject = (object) => {
    return {
      blog_title: object.blogTitle,
      blog_desc: object.blogDescription,
      blog_content: object.blogContent,
      blog_date: object.blogDate,
      category: "blogpost",
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
          fields={blogFields}
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
    <div>
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

export default Blog;
