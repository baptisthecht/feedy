"use client";

import { getProducts } from "@/app/services/product";
import {
  Avatar,
  AvatarImage,
  Button,
  ButtonIcon,
  Checkbox,
  StatusBadge,
  StatusBadgeIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowDivider,
} from "@feedy/shared";
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiCheckboxCircleFill,
  RiExpandUpDownFill,
  RiMore2Line,
} from "@remixicon/react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import * as React from "react";

const getSortingIcon = (state: "asc" | "desc" | false) => {
  if (state === "asc")
    return <RiArrowUpSFill className="text-text-sub-600 size-5" />;
  if (state === "desc")
    return <RiArrowDownSFill className="text-text-sub-600 size-5" />;
  return <RiExpandUpDownFill className="text-text-sub-600 size-5" />;
};

const columns: ColumnDef<Awaited<ReturnType<typeof getProducts>>[number]>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "article",
    accessorKey: "article.name",
    header: ({ column }) => (
      <div className="flex items-center gap-0.5">
        Article
        <button
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    enableSorting: true,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar size="40">
          <AvatarImage src={row.original.image || ""} />
        </Avatar>
        <div className="flex flex-col gap-0.5">
          <span className="text-label-sm text-text-strong-950">
            {row.original.name}
          </span>
          <span className="text-paragraph-xs text-text-sub-600">
            {row.original.description}
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "category",
    accessorKey: "category.name",
    header: ({ column }) => (
      <div className="flex items-center gap-0.5 whitespace-nowrap">
        Catégorie
        <button
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        {/* <FileFormatIcon.Root format="PDF" size="small" color="red" /> */}
        <div className="flex flex-col gap-0.5">
          <span className="text-label-sm text-text-strong-950">
            {row.original.category?.name || "Aucune catégorie"}
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "doc",
    accessorKey: "doc.name",
    header: ({ column }) => (
      <div className="flex items-center gap-0.5 whitespace-nowrap">
        Prix de base
        <button
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        {/* <FileFormatIcon.Root format="PDF" size="small" color="red" /> */}
        <div className="flex flex-col gap-0.5">
          <span className="text-label-sm text-text-strong-950">
            {row.original.basePrice.toFixed(2)} €
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "status",
    accessorKey: "status.label",
    header: ({ column }) => (
      <div className="flex items-center gap-0.5">
        Status
        <button
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <StatusBadge status={"completed"}>
        <StatusBadgeIcon as={RiCheckboxCircleFill} />
        {row.original.status}
      </StatusBadge>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => (
      <Button variant="neutral" mode="ghost" size="xsmall">
        <ButtonIcon as={RiMore2Line} />
      </Button>
    ),
  },
];

export function DataTableDemo({
  products,
}: {
  products: Awaited<ReturnType<typeof getProducts>>;
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: products,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      pagination,
    },
    onPaginationChange: setPagination,
    initialState: {
      sorting: [
        {
          id: "member",
          desc: true,
        },
      ],
    },
  });

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length > 0 &&
            table.getRowModel().rows.map((row, i, arr) => (
              <React.Fragment key={row.id}>
                <TableRow data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
                {i < arr.length - 1 && <TableRowDivider />}
              </React.Fragment>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
