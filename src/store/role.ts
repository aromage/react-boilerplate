import { MyProfile } from "types/profiles";
import create from "zustand";
import { persist } from "zustand/middleware";

export interface UserStore {
  users: MyProfile;
  getUserRole: () => string;
  update: (status: MyProfile) => void;
}

const useUserStore = create<any>(
  persist(
    (set, get) => ({
      users: {},
      getUserRole() {
        const userRole = get().users.role;

        return userRole;
      },
      update(status: MyProfile) {
        set((state: MyProfile) => ({
          ...state,
          ...status,
        }));
      },
    }),
    {
      name: "role-store",
      getStorage: () => localStorage,
    }
  )
);

export { useUserStore };
