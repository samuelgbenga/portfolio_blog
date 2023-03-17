import React, { useMemo } from "react";
import ProjectTable from "./Tables/ProjectTable";

const Project = ({ projects, handleDelete }) => {
  const projectCat = projects.filter(
    (project) => project.category === "project"
  );

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

  return (
    <div>
      <ProjectTable data={data} columns={columns} handleDelete={handleDelete} />
    </div>
  );
};

export default Project;
