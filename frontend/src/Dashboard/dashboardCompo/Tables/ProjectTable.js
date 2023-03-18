import { useTable } from "react-table";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const ProjectTable = ({ columns, data, handleDelete, handleEdit }) => {
  const tableInstances = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstances;

  return (
    <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
      <thead lassName="bg-gray-50">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody
        {...getTableBodyProps()}
        className="bg-white divide-y divide-gray-200"
      >
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    className="px-6 py-4 whitespace-nowrap"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
              <td className="flex mx-4 py-4 items-center justify-center mt-1 gap-3">
                <span className="text-red-400  cursor-pointer">
                  <RiDeleteBin5Line
                    onClick={() => handleDelete(row.values._id)}
                  />
                </span>{" "}
                <span
                  className="text-blue-400 cursor-pointer"
                  onClick={() => handleEdit(row.values._id)}
                >
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
