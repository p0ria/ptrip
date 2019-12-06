const baseUrl = "http://localhost:3000/";
const apiUrl = baseUrl + "api/";

export const environment = {
  production: true,
  tokenUrl: baseUrl + "token",
  tripsUrl: apiUrl+ "trips"
};
