import { createLazyFileRoute, ReactNode } from "@tanstack/react-router";
import * as React from "react";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, CirclePlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { columns } from "./-components/Cols";
import { useEffect, useState } from "react";
import { fetchClients } from "@/api/clientAPI"; 
import { useQuery } from '@tanstack/react-query';

export const Route = createLazyFileRoute("/clients/")({
  component: RouteComponent,
});


export function RouteComponent() {
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const per_page = 10;


  const { data: clients, error, isLoading } = useQuery({
    queryKey: ['clients', currentPage, search], 
    queryFn: () => fetchClients(currentPage, per_page, search), 
    // keepPreviousData: true,
  });

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nom',
        accessor: 'nom',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
    ],
    []
  );
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between">
        <div className="rounded-lg h-10 w-[82%] border bg-card text-card-foreground shadow flex items-center justify-between px-4 ">
          <h1>Clients</h1>
        </div>

        <a href="/clients/new">
          <Button>
            <CirclePlus />
            Nouveau client
          </Button>
        </a>
      </div>

      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <Table>
            <TableHeader>
              {columns.map((column) => (
                <TableCell key={column.Header}>{column.Header}</TableCell>
              ))}
            </TableHeader>

            <TableBody>
              {clients?.data?.length ? (
                clients.data.map((row: {
                  [x: string]: ReactNode; id: React.Key | null 
}) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.nom}</TableCell>
                    <TableCell>{row.email}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={2}>Aucun client trouvé</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {clients?.current_page * clients?.per_page} of {clients?.total} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={clients?.data?.length === 0}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

