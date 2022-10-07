import users from "@/assets/data/mock.json";

export const usersService = {
  getUsers: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 1000);
    });
  },
};
