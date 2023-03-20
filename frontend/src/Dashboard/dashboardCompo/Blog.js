import React, { useMemo } from "react";
import { blogHead } from "./Tables/TableCompo/TableCompo";
import ProjectTable from "./Tables/ProjectTable";

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
  const blogCat = projects.filter((project) => project.category === "blogpost");
  const columns = useMemo(blogHead, []);
  const data = useMemo(() => blogCat, [blogCat]);
  return (
    <div>
      <ProjectTable
        data={data}
        columns={columns}
        // handleDelete={handleDelete}
        // handleEdit={handleEdit}
      />
    </div>
  );
};

export default Blog;
