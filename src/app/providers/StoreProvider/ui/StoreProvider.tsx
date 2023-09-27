import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '@/app/providers/StoreProvider/config/store';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> | undefined }
  : T;

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const navigate = useNavigate();
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate
  );

  return <Provider store={store}>{children}</Provider>;
};
