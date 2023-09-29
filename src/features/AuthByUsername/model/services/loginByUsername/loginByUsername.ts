import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

const LoginActions = {
  LOGIN_BY_USERNAME: 'login/loginByUsername',
};

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(LoginActions.LOGIN_BY_USERNAME, async (authData, thunkAPI) => {
  const { extra, rejectWithValue, dispatch } = thunkAPI;

  try {
    const response = await extra.api.post<User>('/login', authData);
    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));

    if (extra.navigate) extra.navigate('/library');
    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
