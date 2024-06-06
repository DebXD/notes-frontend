import axios from "axios";
import {
  getMeResponseType,
  loginResponseType,
  registerResponseType,
} from "../@types/types";

const notemyApi = axios.create({
  baseURL: "https://notemy-api.dustbin.me/api/auth",
  headers: { "Content-Type": "application/json" },
});
// LOGIN
export const loginFn = async (
  userCreds: object,
): Promise<loginResponseType> => {
  const response = await notemyApi.post("/login", userCreds);
  return response.data;
};
//REGISTER
export const RegisterFn = async (
  userCreds: object,
): Promise<registerResponseType> => {
  const response = await notemyApi.post("/register", userCreds);
  return response.data;
};

// GET ME(USER DETAILS)
export const getMeFn = async (token: string): Promise<getMeResponseType> => {
  const response = await notemyApi.get("/me", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};


// GET ALL NOTES
export const getAllNotes = async (
  token: string,
)  => {
  const response = await notemyApi.get("/notes", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};

//ADD NOTE
export const addNoteFn = async (token: string, title: string, desc: string) => {
  const response = await notemyApi.post(
    "/notes",
    {
      title: title,
      desc: desc,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  );
  console.log(response);
};
// Update Note
export const updateNoteFn = async (
  token: string,
  title: string,
  desc: string,
  id: number,
) => {
  const response = await notemyApi.patch(
    `/notes/${id}`,
    {
      title: title,
      desc: desc,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  );
  console.log(response);
};
// Delete Note
export const DeleteNoteFn = async (token: string, id: number) => {
  const response = await notemyApi.delete(`/notes/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  console.log(response);
};
