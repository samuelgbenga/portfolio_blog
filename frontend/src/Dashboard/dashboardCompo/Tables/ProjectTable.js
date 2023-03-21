import { useTable } from "react-table";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const ProjectTable = ({ columns, data, handleDelete, handleEdit }) => {
  const tableInstances = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstances;

  return (
    <table
      {...getTableProps()}
      className="min-w-full divide-y divide-gray-200 table-fixed"
    >
      <thead className="bg-gray-50">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
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
            <tr {...row.getRowProps()} className=" ">
              {row.cells.map((cell, i) => {
                if (i === row.cells.length - 2) {
                  return (
                    <td className="px-3 py-4 " {...cell.getCellProps()}>
                      <div className=" max-h-[150px] min-w-[200px] overflow-y-auto">
                        {cell.render("Cell")}
                      </div>
                      <div></div>
                    </td>
                  );
                }
                return (
                  <td className="px-3 py-4 " {...cell.getCellProps()}>
                    <div className=" max-h-[150px]  overflow-y-auto">
                      {cell.render("Cell")}
                    </div>
                  </td>
                );
              })}
              <td className="mx-3 py-4  ">
                <div className=" flex w-[100px] justify-center gap-2">
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
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProjectTable;
