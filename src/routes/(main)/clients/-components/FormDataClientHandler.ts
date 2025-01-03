
export const handlePhoneNumberChange = (
  phoneNumber: string,
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>,
  setFormData: React.Dispatch<React.SetStateAction<any>>,
  formData: any
) => {
  const phoneNumberNumeric = phoneNumber.replace(/\D/g, "");
  setPhoneNumber(phoneNumber);

  setFormData({
    ...formData,
    phone_number: phoneNumberNumeric ? Number(phoneNumberNumeric) : "",
    tel: {
      ...formData.tel,
      phone_number: phoneNumberNumeric,
    },
  });
};

export const handlePhoneNumberChangeE = (
  phoneNumber: string,
  setPhoneNumberE: React.Dispatch<React.SetStateAction<string>>,
  setFormData: React.Dispatch<React.SetStateAction<any>>,
  formData: any
) => {
  const phoneNumberNumeric = phoneNumber.replace(/\D/g, "");
  setPhoneNumberE(phoneNumber);

  setFormData({
    ...formData,
    company_phone_number: phoneNumberNumeric ? Number(phoneNumberNumeric) : "",
    company_tel: {
      ...formData.company_tel,
      phone_number: phoneNumberNumeric,
    },
  });
};
export const handleCountryChange = (
  e: React.ChangeEvent<HTMLSelectElement>,
  pays: any[],
  setSelectedCountry: React.Dispatch<React.SetStateAction<any>>,
  setFormData: React.Dispatch<React.SetStateAction<any>>,
  formData: any
) => {
  const alpha2Code = e.target.value;
  const country = pays.find((country) => country.alpha2Code === alpha2Code) || {
    callingCodes: [""],
    name: "Unknown",
    alpha2Code: "",
  };

  setSelectedCountry(country);

  setFormData({
    ...formData,
    phone_iso_code: alpha2Code,
    tel: {
      ...formData.tel,
      phone_iso_code: alpha2Code,
    },
  });
};
export const handleCountryChangeE = (
  e: React.ChangeEvent<HTMLSelectElement>,
  pays: any[],
  setSelectedCountryE: React.Dispatch<React.SetStateAction<any>>,
  setFormData: React.Dispatch<React.SetStateAction<any>>,
  formData: any
) => {
  const alpha2Code = e.target.value;
  const country = pays.find((country) => country.alpha2Code === alpha2Code) || {
    callingCodes: [""],
    name: "Unknown",
    alpha2Code: "",
  };

  setSelectedCountryE(country);

  setFormData({
    ...formData,
    company_phone_iso_code: alpha2Code,
    company_tel: {
      ...formData.company_tel,
      phone_iso_code: alpha2Code,
    },
  });
};

export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  setFormData: React.Dispatch<React.SetStateAction<any>>,
  formData: any
) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};
