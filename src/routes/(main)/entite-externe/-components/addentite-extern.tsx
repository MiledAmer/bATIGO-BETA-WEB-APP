
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

import { toast } from "sonner";
import { addEntitesExternes } from "@/api/entite-externAPI";

const formSchema = z.object({
  nom: z.string().min(1, { message: "Name must be at least 6 characters." }),
  siret: z
    .string()
    .min(6, { message: "Num Siret must be at least 6 characters." }),
    prixParCumac: z.string().min(1, { message: "Name must be at least 6 characters." }),
    paragraphCEE: z.string().min(1, { message: "Name must be at least 6 characters." }),
    paragraphMaPrimeRenov: z.string().min(1, { message: "Name must be at least 6 characters." }),
    type: z.enum(["delegataire", "mandataire", "type"], {
      errorMap: () => ({ message: "Le type doit être sélectionné." }),
    }),
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
      nom: "",
      siret: "",
      prixParCumac: "",
      paragraphCEE: "",
      paragraphMaPrimeRenov: "",
      type: "delegataire", 
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const { siret, nom, prixParCumac, paragraphCEE, paragraphMaPrimeRenov, type } = values;
    try {
      const response = await addEntitesExternes({
        nom,
        siret,
        prixParCumac,
        paragraphCEE,
        paragraphMaPrimeRenov,
        type,
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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajouter un Sous-Traitant</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          {/* Formulaire */}
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <select {...field} className="border p-2 rounded w-full">
                      <option value="">Sélectionnez un type</option>
                      <option value="delegataire">Déléguataire</option>
                      <option value="mandataire">Mandataire</option>
                      <option value="oblige">Oblige</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Nom du sous-traitant" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="siret"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Num Siret</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Numéro Siret" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="paragraphMaPrimeRenov"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Paragraphe MaPrimeRenov</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Détails du paragraphe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="paragraphCEE"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Paragraphe CEE</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Détails du paragraphe CEE" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="prixParCumac"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prix par Cumac</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Prix par Cumac" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit">Enregistrer</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}