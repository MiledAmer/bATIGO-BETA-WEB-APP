import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export const Route = createLazyFileRoute("/clients/new")({
  component: RouteComponent,
});

export default function RouteComponent() {
  const [clientType, setClientType] = useState<"particulier" | "professionnel">(
    "particulier"
  );

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-row items-center justify-between">
        <div className="rounded-lg h-10 w-full border bg-card text-card-foreground shadow flex items-center justify-between px-4 mb-4">
          <h1>Création d&apos;un nouveau client</h1>
        </div>
      </div>
      <Card>
        <CardContent>
          <form className="space-y-8">
            {/* Type de client */}
            <div className="space-y-4">
              <Label>Type de client</Label>
              <RadioGroup
                defaultValue="particulier"
                onValueChange={(value) =>
                  setClientType(value as "particulier" | "professionnel")
                }
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="particulier" id="particulier" />
                  <Label htmlFor="particulier">Particulier</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="professionnel" id="professionnel" />
                  <Label htmlFor="professionnel">Professionnel</Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            {clientType === "particulier" ? (
              /* Formulaire Particulier */
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom</Label>
                    <Input id="nom" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prenom">Prénom</Label>
                    <Input id="prenom" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input id="telephone" type="tel" required />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Adresse</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="rue">Rue</Label>
                      <Input id="rue" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="code-postal">Code postal</Label>
                      <Input id="code-postal" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ville">Ville</Label>
                      <Input id="ville" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pays">Pays</Label>
                      <Input id="pays" defaultValue="France" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    Informations complémentaires
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="zone">Zone</Label>
                      <Select>
                        <SelectTrigger id="zone">
                          <SelectValue placeholder="Sélectionner une zone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="zone1">Zone 1</SelectItem>
                          <SelectItem value="zone2">Zone 2</SelectItem>
                          <SelectItem value="zone3">Zone 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bareme-cee">Barème CEE</Label>
                      <Input id="bareme-cee" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="avis-imposition">
                        Avis d&apos;imposition
                      </Label>
                      <Input
                        id="avis-imposition"
                        type="file"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Formulaire Professionnel */
              <div className="space-y-8">
                {/* Coordonnées société */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Coordonnées société</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="raison-sociale">Raison sociale</Label>
                      <Input id="raison-sociale" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zone-pro">Zone</Label>
                      <Select>
                        <SelectTrigger id="zone-pro">
                          <SelectValue placeholder="Sélectionner une zone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="zone1">Zone 1</SelectItem>
                          <SelectItem value="zone2">Zone 2</SelectItem>
                          <SelectItem value="zone3">Zone 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rue-pro">Rue</Label>
                      <Input id="rue-pro" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="code-postal-pro">Code postal</Label>
                      <Input id="code-postal-pro" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ville-pro">Ville</Label>
                      <Input id="ville-pro" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pays-pro">Pays</Label>
                      <Input id="pays-pro" defaultValue="France" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone-entreprise">
                        Téléphone entreprise
                      </Label>
                      <Input id="telephone-entreprise" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-entreprise">Email entreprise</Label>
                      <Input id="email-entreprise" type="email" required />
                    </div>
                  </div>
                </div>

                {/* Interlocuteur société */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Interlocuteur société</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nom-contact">Nom</Label>
                      <Input id="nom-contact" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prenom-contact">Prénom</Label>
                      <Input id="prenom-contact" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="poste">Poste</Label>
                      <Input id="poste" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone-contact">Téléphone</Label>
                      <Input id="telephone-contact" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-contact">Email</Label>
                      <Input id="email-contact" type="email" required />
                    </div>
                  </div>
                </div>

                {/* Coordonnées bancaires */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Coordonnées bancaires</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="swift">SWIFT</Label>
                      <Input id="swift" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="iban">IBAN</Label>
                      <Input id="iban" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="titulaire">Titulaire du compte</Label>
                      <Input id="titulaire" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="forme-juridique">Forme juridique</Label>
                      <Select>
                        <SelectTrigger id="forme-juridique">
                          <SelectValue placeholder="Sélectionner une forme juridique" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sarl">SARL</SelectItem>
                          <SelectItem value="sas">SAS</SelectItem>
                          <SelectItem value="sa">SA</SelectItem>
                          <SelectItem value="eurl">EURL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="code-ape">Code APE</Label>
                      <Input id="code-ape" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="code-naf">Code NAF</Label>
                      <Input id="code-naf" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="avis-imposition-pro">
                        Avis d&apos;imposition
                      </Label>
                      <Input
                        id="avis-imposition-pro"
                        type="file"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end space-x-4">
              <Button variant="outline" type="button">
                Annuler
              </Button>
              <Button type="submit">Créer le client</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
