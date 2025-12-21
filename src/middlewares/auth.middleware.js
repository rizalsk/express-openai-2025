export const isAuthenticated = (req, res, next) => {
  // TODO: check if user is authenticated
  const loggedIn = true; // dummy
  if (loggedIn) return next();
  res.redirect("/auth/login");
};
