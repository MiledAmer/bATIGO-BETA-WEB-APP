import { createLazyFileRoute } from '@tanstack/react-router'
import * as React from 'react'
import { ChevronDown, CirclePlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { fetchcertificat_rge } from '@/api/rgeAPI'
import { useQuery } from '@tanstack/react-query'
import MainLayout from '@/routes/-layout/mainLayout'
import { DialogDemo } from './-components/addrge'
import { useState } from 'react'
export const Route = createLazyFileRoute('/(main)/rge/')({
  component: RouteComponent,
})


export function RouteComponent() {
    const [search, setSearch] = React.useState<string>('')
    const [currentPage, setCurrentPage] = React.useState<number>(1)
    const per_page = 10
    const [isOpen, setIsOpen] = useState(false);
    const {
      data: certificat_rge,
      error,
      isLoading,
    } = useQuery({
      queryKey: ['certificat_rge', currentPage, search],
      queryFn: () => fetchcertificat_rge(currentPage, per_page, search),
    })
  
    if (isLoading) {
      return <div>Loading...</div>
    }
  
    if (error instanceof Error) {
      return <div>Error: {error.message}</div>
    }
  
  
    return (
      <MainLayout>
        <div className="w-full">
          <div className="flex flex-row items-center justify-between">
            <div className="rounded-lg h-10 w-[82%] border bg-card text-card-foreground shadow flex items-center justify-between px-4 ">
              <h1>certificat rge</h1>
            </div>
  
            <div>
        <Button onClick={() => setIsOpen(true)}><CirclePlus />
                      Nouveau certificat rge</Button>
        <DialogDemo isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">num</TableHead>
                  <TableHead>date_attribution</TableHead>
                  <TableHead>date_expiration</TableHead>
                  <TableHead>Raison social</TableHead>
                  <TableHead>state</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certificat_rge && certificat_rge.data ? (
                  certificat_rge.data.map((row: any) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.num}</TableCell>
                      <TableCell>{row.date_attribution}</TableCell>
                      <TableCell>{row.date_expiration}</TableCell>
                      <TableCell>{row.sous_traitant?.name}</TableCell>
                      <TableCell>{row.entreprise?.lib}</TableCell>
                      <TableCell>{row.state}</TableCell>
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
              {certificat_rge?.current_page * certificat_rge?.per_page} of {certificat_rge?.total} row(s)
              selected.
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
                disabled={certificat_rge?.length === 0}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }
  