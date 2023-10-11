import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

// мой вариант
const emptyProfile = {
  first: '',
  lastname: '',
  age: 22,
  currency: Currency.RUB,
  country: Country.Armenia,
  city: '',
  username: '',
  avatar: '',
};

export const getProfileData = (state: StateSchema) =>
  state.profile?.data || emptyProfile;
