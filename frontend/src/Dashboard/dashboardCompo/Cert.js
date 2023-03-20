import React, { useMemo, useState } from "react";
import ProjectTable from "./Tables/ProjectTable";
import { certHead } from "./Tables/TableCompo/TableCompo";
import { AddButton } from "./AddNew/Components/AddNewCompo";
import { certFields } from "./AddNew/constants/FormFields";
import AddNew from "./AddNew/AddNew";

const fields = certFields;
let fieldsState = {};
let fieldsState2 = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Cert = ({
  projects,
  setToggleAdd,
  toggleAdd,
  handleDelete,
  handleConnect,
  handleAddNew,
  handleUpdate,
}) => {
  const [editState, setEditState] = useState(false);
  const [editId, setEditId] = useState("");

  // set memo datas and column
  const certCat = projects.filter((cert) => cert.category === "certification");
  const columns = useMemo(certHead, []);

  const data = useMemo(() => certCat, [certCat]);

  // handlers
  // handle edit
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
    //console.log(editObject);

    // // replacing key names
    editObject.certTitle = editObject.cert_title;
    delete editObject.cert_title;
    editObject.certDescription = editObject.cert_desc;
    delete editObject.cert_desc;
    editObject.certDate = editObject.cert_date;
    delete editObject.cert_date;
    //console.log(editObject);
    //

    fields.forEach((field) => {
      //console.log(editObject[field.id]);
      fieldsState2[field.id] = editObject[field.id];
    });
  };

  //  convert objects
  const mainObject = (object) => {
    return {
      cert_title: object.certTitle,
      cert_desc: object.certDescription,
      cert_date: object.certDate,
      category: "certification",
    };
  };
  // handlers function
  // Gen Addition
  const handleGenSubmit = async (object) => {
    const theObject = mainObject(object);
    try {
      await handleAddNew(theObject);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGenUpdate = async (object, id) => {
    const theObject = mainObject(object);
    try {
      await handleUpdate(theObject, id);
    } catch (error) {
      console.log(error);
    }
  };

  // returns
  if (toggleAdd) {
    return (
      <>
        <AddNew
          setToggleAdd={setToggleAdd}
          fields={certFields}
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

export default Cert;
