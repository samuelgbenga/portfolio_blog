import React, { useMemo } from "react";
import ProjectTable from "./Tables/ProjectTable";

const Project = ({ projects }) => {
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

  const data = useMemo(() => projects, [projects]);

  return (
    <div>
      <ProjectTable data={data} columns={columns} />
    </div>
  );
};

export default Project;
