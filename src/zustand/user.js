import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

const initial_state = {
  user: {
    access_token: null,
    refresh_token: null,
    username: null,
    email: null,
    id: null,
    role: null,
    isLoggedIn: false,
    firstName: null,
  },
};

const user_zustand = create(
  persist(
    set => ({
      ...initial_state,

      set_user: updates =>
        set(state => ({
          user: {
            ...state.user,
            ...updates,
          },
        })),

      logout: () => set(initial_state),
    }),
    {
      name: 'user_zustand_persist',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default user_zustand;