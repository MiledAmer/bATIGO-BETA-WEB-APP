
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
import { addSousTraitants } from "@/api/sous-traitantAPI";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name must be at least 6 characters." }),
  num_siret: z
    .string()
    .min(6, { message: "Num Siret must be at least 6 characters." }),
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
      name: "",
      num_siret: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const { num_siret, name } = values;

    try {
      const response = await addSousTraitants({ name, num_siret });
      if (response.status_code === 200) {
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
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Nassim" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="num_siret"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Num Siret</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Bouton de soumission */}
            <DialogFooter>
              <Button type="submit">Enregistrer</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
