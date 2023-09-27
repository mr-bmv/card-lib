export {
  getUserAuthData,
  getUserMounted,
} from './model/selectors/userSelectors';

export { userReducer, userActions } from './model/slice/userSlice';

export type { UserSchema, User } from './model/types/user';
