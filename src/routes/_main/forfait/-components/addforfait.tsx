
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
import { addforfait } from "@/api/forfaitAPI";

const formSchema = z.object({
    lib: z.string().min(1, { message: "Name must be at least 6 characters." }),
    ref: z
    .string()
    .min(6, { message: "ref must be at least 6 characters." }),
    desc: z.string().min(1, { message: "Name must be at least 6 characters." }),
    unit_price: z.string().min(1, { message: "Unit price is required" }),
    quantite: z.string().min(1, { message: "Name must be at least 6 characters." }),
    tva: z.enum(["0", "5.5", "10"], {
      errorMap: () => ({ message: "Le type doit être sélectionné." }),
    }),
    type_unite: z.enum(["m2", "m3", "ml"], {
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
        lib: "",
        ref: "",
        desc: "",
        type_unite: "m2",
        quantite: "",
        tva: "0", 
        unit_price:"",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const { ref, lib, desc, type_unite, quantite, tva ,unit_price} = values;
    try {
        const response = await addforfait({
          lib,
          ref,
          desc,
          type_unite,
          quantite,
          tva,
          unit_price,
        });
      
        if (response.status_code === 201) {
          setIsOpen(false);
          toast.success("Sous-traitant ajouté avec succès.");
        } else if (response.status_code === 400) {
          toast.error(response.message || "Erreur de validation des données.");
        } else {
          toast.error("Erreur lors de l'ajout.");
        }
      } catch (error) {
        toast.error("Une erreur s'est produite sur le serveur.");
        console.error("Erreur :", error);
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
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="tva"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>tva</FormLabel>
                  <FormControl>
                    <select {...field} className="border p-2 rounded w-full">
                      <option value="">Sélectionnez un tva</option>
                      <option value="0">0%</option>
                      <option value="5.5">5.5%</option>
                      <option value="10">10</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="type_unite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>type_unite</FormLabel>
                  <FormControl>
                    <select {...field} className="border p-2 rounded w-full">
                      <option value="">Sélectionnez un type_unite</option>
                      <option value="m2">m2</option>
                      <option value="m3">m3</option>
                      <option value="ml">ml</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lib"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>lib</FormLabel>
                  <FormControl>
                    <Input placeholder="lib" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ref"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ref</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="ref" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>quantite</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="quantite" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="unit_price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>unit_price</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="unit_price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="desc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>desc</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="desc" {...field} />
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