type LocalizedName = {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
};

type NationalId = {
  idNumber: string;
  expiryDate: Date; // ISO date string
};

type Country = {
  id: string;
  name: string;
};

type Nationality = {
  country: Country;
  countryId: number;
};

type MaritalStatus = {
  id: string;
  name: string;
};

export type PersonData = {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
  localizedName: LocalizedName;
  nationalId: NationalId;
  nationalities: Nationality[];
  maritalStatus: MaritalStatus;
  dependants: number;
};
