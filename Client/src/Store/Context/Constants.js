export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080/api"
    : "somedeployUrl";
// export const apiUrl = "http://localhost:8080/api";

export const LOCAL_STORAGE_TOKEN_NAME = "token_doan";
