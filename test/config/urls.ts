export default {
  base: {
    docker: "host.docker.internal:3000",
    local: "http://localhost:3000"
  },
  endpoints: {
    registerUser: "/users/register",
    token: "/users/getToken"
  },
};
