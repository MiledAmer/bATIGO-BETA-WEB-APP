import { createLazyFileRoute } from "@tanstack/react-router";
import * as React from "react";

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
import { fetchDevis } from "@/api/devisAPI"; 

export const Route = createLazyFileRoute('/devis/')({
  component: RouteComponent,
})

export function RouteComponent() {

    const [devis, setDevis] = useState<any[]>([]); 
    const [error, setError] = useState<string>("");
    const [search, setSearch] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1); 
    const per_page = 10;
    useEffect(() => {
      const getdevis = async () => {
      
          try {
            const data = await fetchDevis(currentPage, per_page);
            setDevis(data); 
          } catch (err: any) {
            setError(err.message);  
        } 
      };
      getdevis(); 
    }, [currentPage,search]);
    return (
      <div className="w-full">
        <div className="flex flex-row items-center justify-between">
          <div className="rounded-lg h-10 w-[82%] border bg-card text-card-foreground shadow flex items-center justify-between px-4 ">
            <h1>devis</h1>
          </div>
  
          <a href="/devis/new">
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
            onChange={(event) =>
              setSearch(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            {/* <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent> */}
          </DropdownMenu>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {/* {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))} */}
            </TableHeader>
            <TableBody>
    {devis.data ? (
      devis.data.map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.devis.numerodevis}</TableCell>
          <TableCell>{row.email}</TableCell>
        </TableRow>
      ))
    ) : (
      <TableRow>
        <TableCell colSpan={5}>Aucun client trouvé</TableCell>
      </TableRow>
    )}
  </TableBody>
  
   
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {devis.current_page*devis.per_page} of{" "}
            {devis.total} row(s) selected.
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
              disabled={devis.length === 0}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
