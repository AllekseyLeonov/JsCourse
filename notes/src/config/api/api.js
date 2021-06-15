import { useQuery } from "react-query";
import axios from "axios";

const userApi = "https://mocki.io/v1/cb356f5f-32cc-48f8-8f05-297ecc66ca90";

export const useGetUser = () => {
  const response = useQuery("users", () => axios(userApi));
  return response;
};

const notesApi = "https://mocki.io/v1/7f0b81a8-b19d-4301-b353-3c7773d55df9";

export const useGetNotes = (onResponseSuccess) => {
  const response = useQuery("notes", () => axios(notesApi), {
    onSuccess: () => onResponseSuccess(response.data),
  });
  return response;
};
