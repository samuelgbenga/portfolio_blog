import { useTable } from "react-table";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const ProjectTable = ({ columns, data, handleDelete }) => {
  const tableInstances = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstances;

  return (
    <table {...getTableProps()} border="1">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
              <td className="flex mx-4 items-center justify-center mt-1 gap-3">
                <span className="text-red-400  cursor-pointer">
                  <RiDeleteBin5Line
                    onClick={() => handleDelete(row.values._id)}
                  />
                </span>{" "}
                <span className="text-blue-400 cursor-pointer">
                  <FiEdit />
                </span>{" "}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProjectTable;
