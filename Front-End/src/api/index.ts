import axios from "axios";
import { type PersonData } from "../types";

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchUserData = (userId: string) => {
  return axios.post<{ data: { user: PersonData } }>(
    `${apiUrl}/graphql`,
    {
      query: `query { 
        user(userId: ${userId}) { 
          firstName 
          fatherName 
          grandfatherName 
          familyName 
          dependants 
          maritalStatus { name } 
          nationalId { idNumber expiryDate } 
          nationalities { countryId } 
          localizedName { firstName fatherName grandfatherName familyName }
        } 
      }`,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const updateUserData = (userId: string, data: unknown) => {
  return axios.post<{ data: { user: PersonData } }>(
    `${apiUrl}/graphql`,
    {
      query: `mutation UpdateUser($userId: Float!, $input: UserInput!) { 
                  updateUser(userId: $userId, input: $input) { 
                    firstName 
                    fatherName 
                    maritalStatus { id name } 
                  } 
                }`,
      variables: {
        userId: parseFloat(userId),
        input: data,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
