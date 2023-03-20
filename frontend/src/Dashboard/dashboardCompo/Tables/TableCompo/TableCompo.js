export const projectHead = () => {
  return [
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
      accessor: "proj_link",
    },
    {
      Header: "Ratings",
      accessor: "proj_ratings",
    },
  ];
};

export const certHead = () => {
  return [
    {
      Header: "Id",
      accessor: "_id",
    },
    {
      Header: "Title",
      accessor: "cert_title",
    },
    {
      Header: "Description",
      accessor: "cert_desc",
    },
    {
      Header: "Date Issued",
      accessor: "cert_date",
    },
  ];
};

export const blogHead = () => {
  return [
    {
      Header: "Blog_Id",
      accessor: "_id",
    },
    {
      Header: "Title",
      accessor: "blog_title",
    },
    {
      Header: "Description",
      accessor: "blog_desc",
    },
    {
      Header: "Content",
      accessor: "blog_content",
    },
    {
      Header: "Published Date",
      accessor: "blog_date",
    },
  ];
};
