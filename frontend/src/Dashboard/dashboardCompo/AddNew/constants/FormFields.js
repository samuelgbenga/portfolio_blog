const projectFields = [
  {
    labelText: "Project Language",
    labelFor: "projectLanguage",
    id: "projectLanguage",
    type: "text",
    isRequired: true,
    placeholder: "Language used",
  },
  {
    labelText: "Project Name",
    labelFor: "projectName",
    id: "projectName",
    type: "text",
    isRequired: true,
    placeholder: "Name of Project",
  },
  {
    labelText: "Project tools",
    labelFor: "projectTools",
    id: "projectTools",
    type: "text",
    isRequired: true,
    placeholder: "Tools used",
  },
  {
    labelText: "Project Ratings",
    labelFor: "projectRatings",
    id: "projectRatings",
    type: "number",
    isRequired: true,
    placeholder: "Projecting Ratings",
  },
  {
    labelText: "Project Link",
    labelFor: "projectLink",
    id: "projectLink",
    type: "text",
    isRequired: true,
    placeholder: "Link to Projeject",
  },
];

const certFields = [
  {
    labelText: "Certification Title",
    labelFor: "certTitle",
    id: "certTitle",
    type: "text",
    isRequired: true,
    placeholder: "Title",
  },
  {
    labelText: "Certification Description",
    labelFor: "certDescription",
    id: "certDescription",
    type: "text",
    isRequired: true,
    placeholder: "Description of Certification",
  },
  {
    labelText: "Issued Date",
    labelFor: "certDate",
    id: "certDate",
    type: "text",
    isRequired: true,
    placeholder: "Date Issued",
  },
];

// thisisisisisis
const blogFields = [
  {
    labelText: "Blog Title",
    labelFor: "blogTitle",
    id: "blogTitle",
    type: "text",
    isRequired: true,
    placeholder: "Title",
  },
  {
    labelText: "Blog Summary",
    labelFor: "blogDescription",
    id: "blogDescription",
    type: "textarea",
    isRequired: true,
    placeholder: "summary...",
  },
  {
    labelText: "Content",
    labelFor: "blogContent",
    id: "blogContent",
    type: "textarea",
    isRequired: true,
    placeholder: "content....",
  },
  {
    labelText: "Published Date",
    labelFor: "blogDate",
    id: "blogDate",
    type: "text",
    isRequired: true,
    placeholder: "Published Date",
  },
];

export { projectFields, certFields, blogFields };
