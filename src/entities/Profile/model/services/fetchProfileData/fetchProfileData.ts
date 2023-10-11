import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '../../types/profile';

const ProfileActions = {
  FETCH_PROFILE: 'profile/fetchProfileData',
};

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(ProfileActions.FETCH_PROFILE, async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<Profile>('/profile');

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
