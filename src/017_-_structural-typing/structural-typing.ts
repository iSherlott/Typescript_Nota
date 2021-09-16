type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const VerifyUser: VerifyUserFn = (user, setValue) => {
  return (
    user.username == setValue.username && user.password == setValue.password
  );
};

const dbUser = {
  username: "Sherlott",
  password: "123456",
};

const sentUser = {
  username: "Sherlott",
  password: "123456",
  permissions: 1,
};

const loggedIn = VerifyUser(dbUser, sentUser);

console.log(loggedIn);
