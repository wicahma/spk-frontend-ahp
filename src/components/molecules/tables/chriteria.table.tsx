import { IGetListKriteriaResponse } from "@/interfaces/api/kriteria/query.interface";
import { IChriteriaParams } from "@/interfaces/components/tables/chriteria.interface";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";

export const ChriteriaTable: React.FC<IChriteriaParams> = ({
  data,
  onDeleteData,
  onEditData,
  disableAll = false,
}) => {
  const columnHelper = createColumnHelper<IGetListKriteriaResponse>();

  const initialColumns = useMemo(() => {
    const baseColumn = [
      columnHelper.accessor("kriteria_id", {
        cell: (info) => info.getValue(),
        header: "ID Kriteria",
      }),
      columnHelper.accessor("nama_kriteria", {
        cell: (info) => info.getValue() ?? "-",
        header: "Nama",
      }),
      columnHelper.display({
        id: "action",
        header: "Action",
        cell: ({ row }) => {
          return (
            <div className="flex items-center justify-center gap-3">
              <IconButton
                disabled={disableAll}
                color="primary"
                onClick={() => onEditData?.(row.original)}
              >
                <FontAwesomeIcon size="sm" icon={faEdit} />
              </IconButton>
              <IconButton
                disabled={disableAll}
                color="error"
                onClick={() => onDeleteData?.(row.original)}
              >
                <FontAwesomeIcon size="sm" icon={faTrash} />
              </IconButton>
            </div>
          );
        },
      }),
    ];

    return baseColumn;
  }, [data]);

  const table = useReactTable({
    data: data,
    columns: initialColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell align="justify" key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} align="justify">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
