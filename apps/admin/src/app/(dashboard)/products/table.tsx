"use client";

import { getProducts } from "@/app/services/product";
import {
  Avatar,
  AvatarImage,
  Button,
  ButtonIcon,
  Checkbox,
  cn,
  Input,
  InputIcon,
  InputRoot,
  InputWrapper,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
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
  RiLayoutGridLine,
  RiListUnordered,
  RiMore2Line,
  RiSearchLine,
} from "@remixicon/react";
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import { DateTime } from "luxon";
import Image from "next/image";
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
    id: "basePrice",
    accessorKey: "basePrice",
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
  {
    id: "createdAt",
    accessorKey: "createdAt",
    filterFn: (row, id, filterValue) => {
      if (filterValue.length === 0) return true;
      const { from, to } = filterValue as { from: string; to: string };
      const date = new Date(row.original.createdAt);
      return date >= new Date(from) && date <= new Date(to);
    },
  },
];

const sortingOptions: Record<Order, { state: SortingState; label: string }> = {
  cheapest: {
    state: [{ id: "basePrice", desc: false }],
    label: "Prix croissant",
  },
  mostExpensive: {
    state: [{ id: "basePrice", desc: true }],
    label: "Prix décroissant",
  },
  newest: {
    state: [{ id: "createdAt", desc: false }],
    label: "Le plus ancien",
  },
  oldest: {
    state: [{ id: "createdAt", desc: true }],
    label: "Le plus récent",
  },
};

const periodOptions: Record<
  Period,
  { state: ColumnFiltersState; label: string }
> = {
  all: {
    state: [],
    label: "Tous",
  },
  today: {
    state: [
      {
        id: "createdAt",
        value: {
          from: DateTime.now().startOf("day").toISO(),
          to: DateTime.now().endOf("day").toISO(),
        },
      },
    ],
    label: "Aujourd'hui",
  },
  thisWeek: {
    state: [
      {
        id: "createdAt",
        value: {
          from: DateTime.now().startOf("week").toISO(),
          to: DateTime.now().endOf("week").toISO(),
        },
      },
    ],
    label: "Cette semaine",
  },
  thisMonth: {
    state: [
      {
        id: "createdAt",
        value: {
          from: DateTime.now().startOf("month").toISO(),
          to: DateTime.now().endOf("month").toISO(),
        },
      },
    ],
    label: "Ce mois",
  },
  thisYear: {
    state: [
      {
        id: "createdAt",
        value: {
          from: DateTime.now().startOf("year").toISO(),
          to: DateTime.now().endOf("year").toISO(),
        },
      },
    ],
    label: "Cette année",
  },
};
type DisplayMode = "list" | "grid";
type Period = "all" | "today" | "thisWeek" | "thisMonth" | "thisYear";
type Order = "cheapest" | "mostExpensive" | "newest" | "oldest";

export function DataTableDemo({
  products,
}: {
  products: Awaited<ReturnType<typeof getProducts>>;
}) {
  const [displayMode, setDisplayMode] = React.useState<DisplayMode>("grid");
  const [sorting, setSorting] = React.useState<SortingState>([
    {
      id: "createdAt",
      desc: true,
    },
  ]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
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
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      pagination,
      columnFilters,
    },
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    initialState: {
      columnVisibility: {
        createdAt: false,
      },
    },
  });

  const handleSortingChange = (order: Order) => {
    switch (order) {
      case "cheapest":
        setSorting([{ id: "basePrice", desc: false }]);
        break;
      case "mostExpensive":
        setSorting([{ id: "basePrice", desc: true }]);
        break;
      case "newest":
        setSorting([{ id: "createdAt", desc: false }]);
        break;
      case "oldest":
        setSorting([{ id: "createdAt", desc: true }]);
    }
  };

  const handlePeriodChange = (period: Period) => {
    setColumnFilters(periodOptions[period].state);
  };

  const sortingValue = React.useMemo(() => {
    return (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(sortingOptions).find(([_, { state }]) =>
        sorting.every(
          (s) => s.id === state?.[0]?.id && s.desc === state?.[0]?.desc,
        ),
      )?.[0] || "newest"
    );
  }, [sorting]);

  const periodValue = React.useMemo(() => {
    return (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(periodOptions).find(([_, { state }]) =>
        columnFilters.every(
          (f) =>
            f.id === state?.[0]?.id &&
            (f.value as { from: string; to: string }).from ===
              (state?.[0]?.value as { from: string; to: string }).from &&
            (f.value as { from: string; to: string }).to ===
              (state?.[0]?.value as { from: string; to: string }).to,
        ),
      )?.[0] || "all"
    );
  }, [columnFilters]);
  return (
    <div className="w-full overflow-x-hidden">
      <div className="p-6 flex gap-3">
        <InputRoot>
          <InputWrapper>
            <InputIcon as={RiSearchLine} />
            <Input placeholder="Rechercher un produit..." autoFocus />
          </InputWrapper>
        </InputRoot>
        <div className="rounded-10 border border-stroke-soft-200 py-1 px-0.5 flex items-center">
          <div
            className="py-1 px-2 flex gap-1.5 items-center"
            onClick={() => setDisplayMode("grid")}
          >
            <RiLayoutGridLine
              className={cn("size-5 text-text-sub-600 hover:text-primary", {
                "text-primary": displayMode === "grid",
              })}
            />
          </div>
          <figure className="w-px h-4 bg-stroke-soft-200" />
          <div
            className="py-1 px-2 flex gap-1.5 items-center "
            onClick={() => setDisplayMode("list")}
          >
            <RiListUnordered
              className={cn("size-5 text-text-sub-600 hover:text-primary", {
                "text-primary": displayMode === "list",
              })}
            />
          </div>
        </div>
        <Select value={periodValue} onValueChange={handlePeriodChange}>
          <SelectTrigger className="w-auto">
            {periodOptions[periodValue as Period].label}
          </SelectTrigger>
          <SelectContent className="max-w-sm w-full">
            <SelectItem value="all">Tous</SelectItem>
            <SelectItem value="today">Aujourd&apos;hui</SelectItem>
            <SelectItem value="thisWeek">Cette semaine</SelectItem>
            <SelectItem value="thisMonth">Ce mois</SelectItem>
            <SelectItem value="thisYear">Cette année</SelectItem>
          </SelectContent>
        </Select>
        <Select value={sortingValue} onValueChange={handleSortingChange}>
          <SelectTrigger className="w-auto">
            {sortingOptions[sortingValue as Order].label}
          </SelectTrigger>
          <SelectContent className="max-w-sm w-full">
            {Object.entries(sortingOptions).map(([key, { label }]) => (
              <SelectItem key={key} value={key}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {displayMode === "list" && (
        <div className="px-6">
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
      )}
      {displayMode === "grid" && (
        <div className="grid grid-cols-5 gap-4 px-6">
          {table.getRowModel().rows.map(({ original: product }) => (
            <div
              className="p-4 bg-bg-weak-50 rounded-2xl flex flex-col items-center gap-6"
              key={product.id}
            >
              <Image
                src={product.image || ""}
                alt={product.name}
                width={146}
                height={146}
                className="rounded-10 w-full aspect-square object-cover"
              />
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className="text-label-sm text-text-strong-950 line-clamp-1">
                    {product.name}
                  </span>
                  <ChevronDown className="size-4 text-text-soft-400" />
                </div>
                <p className="text-paragraph-xs text-text-sub-600 line-clamp-1">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
