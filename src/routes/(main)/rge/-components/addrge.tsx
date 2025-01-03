import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup } from "@/components/ui/radio-group"; 
import { useQuery } from '@tanstack/react-query'

import { RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { addcertificat_rge } from "@/api/rgeAPI";
import { fetchSousTraitants } from '@/api/sous-traitantAPI'
import { useState } from "react";
const formSchema = z.object({
  num: z
    .string()
    .min(6, { message: "Le numéro SIRET doit comporter au moins 6 caractères." }),
  date_attribution: z
    .string()
    .refine(
      (value) => !isNaN(new Date(value).getTime()),
      { message: "La date d'attribution est invalide." }
    ),
  date_expiration: z
    .string()
    .refine(
      (value) => !isNaN(new Date(value).getTime()),
      { message: "La date d'expiration est invalide." }
    ),
    type_sous_traitant: z
    .string()
    .min(6, { message: "Le numéro SIRET doit comporter au moins 6 caractères." }),

    sous_traitant_id: z
    .number()
    .min(1, { message: "L'ID du sous-traitant doit être un nombre valide." }), // Validation minimale
});

export function DialogDemo({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
   
      num: "",
      date_attribution: "",
      date_expiration: "",
      type_sous_traitant: "sous_traitant", 
    },
  });
    const [search, setSearch] = useState<string>('')
 const [currentPage, setCurrentPage] = useState<number>(1)
  const per_page = 10;
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const { num,  date_attribution, date_expiration,sous_traitant_id } = values;

    try {
      const response = await addcertificat_rge({
        sous_traitant_id,
        num,
        date_attribution,
        date_expiration,
       
      });
      if (response.status_code === 201) {
        setIsOpen(false);
        toast.success("Sous-traitant ajouté avec succès.");
      } else {
        toast.error("Erreur lors de l'ajout.");
      }
    } catch (error) {
      toast.error("Une erreur s'est produite.");
      console.error("Error creating sous-traitant:", error);
    }
  };
 const {
    data: sousTraitant,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['sousTraitant', currentPage, search],
    queryFn: () => fetchSousTraitants(currentPage, per_page, search),
  })
  
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajouter un Sous-Traitant</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="num"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro SIRET</FormLabel>
                  <FormControl>
                    <Input placeholder="Numéro SIRET" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date_attribution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date d'attribution</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date_expiration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date d'expiration</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type_sous_traitant"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type de Sous-Traitant</FormLabel>
                  <FormControl>
                    <RadioGroup {...field}>
                      <RadioGroupItem value="entreprise">Sous-traitant par Entreprise</RadioGroupItem>
                      <RadioGroupItem value="sous_traitant">Sous-traitant</RadioGroupItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch("type_sous_traitant") === "sous_traitant" && (
              <FormField
                control={form.control}
                name="sous_traitant_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom du Sous-Traitant</FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisissez un sous-traitant" />
                        </SelectTrigger>
                        <SelectContent>
  {sousTraitant.data.map((sousTraitant: any, index: number) => (
    <SelectItem key={index} value={sousTraitant.id || ""}>
      {sousTraitant.name}
    </SelectItem>
  ))}
</SelectContent>

                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <DialogFooter>
              <Button type="submit">Enregistrer</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
