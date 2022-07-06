export type AddressType = {
  city: string;
};

export type CompanyType = {
  name: string;
};

export type UserType = {
  id: string;
  name: string;
  username: string;
  address: AddressType;
  email: string;
  phone: string;
  website: string;
  company: CompanyType;
};
