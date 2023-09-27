import { StateSchema } from '@/app/providers/StoreProvider';
export const getUserMounted = (state: StateSchema) => state.user._mounted;
export const getUserAuthData = (state: StateSchema) => state.user.authData;
