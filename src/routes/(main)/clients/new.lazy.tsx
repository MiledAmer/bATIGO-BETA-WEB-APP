import { createLazyFileRoute } from "@tanstack/react-router";
import {
  useState,
  useEffect,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { addClient } from "@/api/clientAPI";
import { fetchPays } from "@/api/paysAPI";
import {
  handlePhoneNumberChange,
  handlePhoneNumberChangeE,
  handleCountryChange,
  handleCountryChangeE,
  handleChange,
} from "./-components/FormDataClientHandler";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "@/routes/-layout/mainLayout";

export const Route = createLazyFileRoute("/(main)/clients/new")({
  component: RouteComponent,
});

export default function RouteComponent() {
  const [clientType, setClientType] = useState<
    "type.particulier" | "type.professionnel"
  >("type.particulier");
  const [formData, setFormData] = useState<any>({
    type: clientType,
    nom: null,
    prenom: null,
    email: null,
    rue: null,
    cp: null,
    ville: null,
    tel: {
      phone_number: null,
      phone_iso_code: null,
    },
    pays: null,
    entreprise: null,
    company: null,
    company_email: null,
    company_tel: {
      phone_number: null,
      phone_iso_code: null,
    },
    forme_juridique: "",
    ape: "",
    naf: "",
    SWIFT_BIC: null,
    revenu_avis_imposition: null,
    IBAN: null,
    titulaire_compte: null,
    poste: null,
    commentaire: null,
    zone: null,
    phone_number: null,
    precarite: null,
    phone_iso_code: null,
    company_phone_iso_code: null,
    company_phone_number: null,
  });

  const { data: countries } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchPays,
  });

  const [selectedCountry, setSelectedCountry] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryE, setSelectedCountryE] = useState({});
  const [phoneNumberE, setPhoneNumberE] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await addClient(formData);
      console.log("Client created:", response);
    } catch (error) {
      console.error("Error creating client:", error);
    }
  };
  useEffect(() => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      type: clientType,
    }));
  }, [clientType]);
  return (
    <MainLayout>
      <div className="container mx-auto py-10">
        <div className="flex flex-row items-center justify-between">
          <div className="rounded-lg h-10 w-full border bg-card text-card-foreground shadow flex items-center justify-between px-4 mb-4">
            <h1>Création d&apos;un nouveau client</h1>
          </div>
        </div>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Type de client */}

              <div className="space-y-4">
                <Label>Type de client</Label>
                <RadioGroup
                  value={clientType}
                  onValueChange={(value) =>
                    setClientType(
                      value as "type.particulier" | "type.professionnel"
                    )
                  }
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="type.particulier"
                      id="type.particulier"
                    />
                    <Label htmlFor="type.particulier">Particulier</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="type.professionnel"
                      id="type.professionnel"
                    />
                    <Label htmlFor="type.professionnel">Professionnel</Label>
                  </div>
                </RadioGroup>
              </div>
              <Separator />

              {clientType === "type.particulier" ? (
                /* Formulaire Particulier */
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom</Label>
                      <Input
                        id="nom"
                        required
                        name="nom"
                        value={formData.nom}
                        onChange={(e) => handleChange(e, setFormData, formData)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prenom">Prénom</Label>
                      <Input
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={(e) => handleChange(e, setFormData, formData)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleChange(e, setFormData, formData)}
                        required
                      />
                    </div>
                    <div className="space-y-4">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Numéro de téléphone
                      </label>
                      <div className="flex items-center space-x-2">
                        <select
                          id="country"
                          name="country"
                          value={selectedCountry?.alpha2Code || ""}
                          onChange={(e) =>
                            handleCountryChange(
                              e,
                              countries,
                              setSelectedCountry,
                              setFormData,
                              formData
                            )
                          }
                          className="border border-gray-300 rounded p-2"
                        >
                          {Array.isArray(countries) &&
                            countries.map((pay: any) => (
                              <option
                                key={pay.alpha2Code}
                                value={pay.alpha2Code}
                              >
                                {pay.name || pay.nom} (
                                {pay.callingCodes?.[0] || "N/A"})
                              </option>
                            ))}
                        </select>

                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={`${phoneNumber}`}
                          onChange={(e) =>
                            handlePhoneNumberChange(
                              e.target.value,
                              setPhoneNumber,
                              setFormData,
                              formData
                            )
                          }
                          placeholder="Saisir votre numéro de téléphone"
                          className="border border-gray-300 rounded p-2 flex-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Adresse</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="rue">Rue</Label>
                        <Input
                          id="rue"
                          name="rue"
                          value={formData.rue}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="code-postal">Code postal</Label>
                        <Input
                          id="code-postal"
                          type="number"
                          name="cp"
                          value={formData.cp}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ville">Ville</Label>
                        <Input
                          id="ville"
                          name="ville"
                          value={formData.ville}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="pays">Pays</Label>
                        <Select
                          name="pays"
                          required
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              pays: value,
                            })
                          }
                        >
                          <SelectTrigger id="pays">
                            <SelectValue placeholder="Sélectionner un pays" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.isArray(countries) &&
                              countries.map((pay: any) => (
                                <SelectItem
                                  key={pay.alpha2Code}
                                  value={pay.alpha2Code}
                                >
                                  {pay.nom || pay.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
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
                        <Select
                          name="zone"
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              zone: value,
                            })
                          }
                        >
                          <SelectTrigger id="zone">
                            <SelectValue placeholder="Sélectionner une zone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="H1">H1</SelectItem>
                            <SelectItem value="H2">H2</SelectItem>
                            <SelectItem value="H3">H3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bareme-cee">Barème CEE</Label>
                        <Input
                          id="bareme-cee"
                          required
                          name="precarite"
                          value={formData.precarite}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="avis-imposition">
                          Avis d&apos;imposition
                        </Label>
                        <Input
                          id="avis-imposition"
                          type="number"
                          name="revenu_avis_imposition"
                          value={formData.revenu_avis_imposition}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
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
                        <Input
                          id="raison-sociale"
                          name="company"
                          value={formData.company}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zone-pro">Zone</Label>
                        <Select
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              zone: value,
                            })
                          }
                        >
                          <SelectTrigger id="zone-pro">
                            <SelectValue placeholder="Sélectionner une zone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="H1">H1</SelectItem>
                            <SelectItem value="H2">H2</SelectItem>
                            <SelectItem value="H3">H3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rue-pro">Rue</Label>
                        <Input
                          id="rue-pro"
                          required
                          name="rue"
                          value={formData.rue}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="code-postal-pro">Code postal</Label>
                        <Input
                          id="code-postal-pro"
                          required
                          type="number"
                          name="cp"
                          value={formData.cp}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ville-pro">Ville</Label>
                        <Input
                          id="ville-pro"
                          required
                          name="ville"
                          value={formData.ville}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pays">Pays</Label>
                        <Select
                          name="pays"
                          required
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              pays: value,
                            })
                          }
                        >
                          <SelectTrigger id="pays">
                            <SelectValue placeholder="Sélectionner un pays" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.isArray(countries) &&
                              countries.map((pay: any) => (
                                <SelectItem
                                  key={pay.alpha2Code}
                                  value={pay.alpha2Code}
                                >
                                  {pay.nom || pay.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-4">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Numéro de téléphone
                        </label>
                        <div className="flex items-center space-x-2">
                          <select
                            id="country"
                            name="country"
                            value={selectedCountryE?.alpha2Code || ""}
                            onChange={(e) =>
                              handleCountryChangeE(
                                e,
                                countries,
                                setSelectedCountryE,
                                setFormData,
                                formData
                              )
                            }
                            className="border border-gray-300 rounded p-2"
                          >
                            {countries.map(
                              (
                                country: {
                                  alpha2Code: any;
                                  name:
                                    | string
                                    | number
                                    | boolean
                                    | ReactElement<
                                        any,
                                        string | JSXElementConstructor<any>
                                      >
                                    | Iterable<ReactNode>
                                    | ReactPortal
                                    | null
                                    | undefined;
                                  callingCodes: any[];
                                },
                                index: Key | null | undefined
                              ) => (
                                <option
                                  key={index}
                                  value={country.alpha2Code || ""}
                                >
                                  {country.name} (
                                  {country.callingCodes?.[0] || "N/A"})
                                </option>
                              )
                            )}
                          </select>

                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={`${phoneNumberE}`}
                            onChange={(e) =>
                              handlePhoneNumberChangeE(
                                e.target.value,
                                setPhoneNumberE,
                                setFormData,
                                formData
                              )
                            }
                            placeholder="Saisir votre numéro de téléphone"
                            className="border border-gray-300 rounded p-2 flex-1"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email-entreprise">
                          Email entreprise
                        </Label>
                        <Input
                          id="email-entreprise"
                          type="email"
                          required
                          name="company_email"
                          value={formData.company_email}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Interlocuteur société */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Interlocuteur société
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nom-contact">Nom</Label>
                        <Input
                          id="nom-contact"
                          required
                          name="nom"
                          value={formData.nom}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="prenom-contact">Prénom</Label>
                        <Input
                          id="prenom-contact"
                          required
                          name="prenom"
                          value={formData.prenom}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="poste">Poste</Label>
                        <Input
                          id="poste"
                          required
                          name="poste"
                          value={formData.poste}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>

                      <div className="space-y-4">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Numéro de téléphone
                        </label>
                        <div className="flex items-center space-x-2">
                          <select
                            id="country"
                            name="country"
                            value={selectedCountryE?.alpha2Code || ""}
                            onChange={(e) =>
                              handleCountryChangeE(
                                e,
                                countries,
                                setSelectedCountryE,
                                setFormData,
                                formData
                              )
                            }
                            className="border border-gray-300 rounded p-2"
                          >
                            {countries.map(
                              (
                                country: {
                                  alpha2Code: any;
                                  name:
                                    | string
                                    | number
                                    | boolean
                                    | ReactElement<
                                        any,
                                        string | JSXElementConstructor<any>
                                      >
                                    | Iterable<ReactNode>
                                    | ReactPortal
                                    | null
                                    | undefined;
                                  callingCodes: any[];
                                },
                                index: Key | null | undefined
                              ) => (
                                <option
                                  key={index}
                                  value={country.alpha2Code || ""}
                                >
                                  {country.name} (
                                  {country.callingCodes?.[0] || "N/A"})
                                </option>
                              )
                            )}
                          </select>

                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={`${phoneNumber}`}
                            onChange={(e) =>
                              handlePhoneNumberChange(
                                e.target.value,
                                setPhoneNumber,
                                setFormData,
                                formData
                              )
                            }
                            placeholder="Saisir votre numéro de téléphone"
                            className="border border-gray-300 rounded p-2 flex-1"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-contact">Email</Label>
                        <Input
                          id="email-contact"
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Coordonnées bancaires */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Coordonnées bancaires
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="swift">SWIFT</Label>
                        <Input
                          id="swift"
                          required
                          name="SWIFT_BIC"
                          value={formData.SWIFT_BIC}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="iban">IBAN</Label>
                        <Input
                          id="iban"
                          required
                          name="IBAN"
                          value={formData.IBAN}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="titulaire">Titulaire du compte</Label>
                        <Input
                          id="titulaire"
                          required
                          name="titulaire_compte"
                          value={formData.titulaire_compte}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="forme_juridique">forme_juridique</Label>
                        <Input
                          id="forme_juridique"
                          required
                          name="forme_juridique"
                          value={formData.forme_juridique}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="code-ape">Code APE</Label>
                        <Input
                          id="code-ape"
                          required
                          name="ape"
                          value={formData.ape}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="code-naf">Code NAF</Label>
                        <Input
                          id="code-naf"
                          required
                          name="naf"
                          value={formData.naf}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="avis-imposition-pro">
                          Avis d&apos;imposition
                        </Label>
                        <Input
                          name="revenu_avis_imposition"
                          value={formData.revenu_avis_imposition}
                          onChange={(e) =>
                            handleChange(e, setFormData, formData)
                          }
                          id="avis-imposition-pro"
                          type="number"
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
    </MainLayout>
  );
}
