// import axios from "axios"

const baseUrl = "https://asia-south1-pric-bd032.cloudfunctions.net";

export const addUser = () => {
  return `${baseUrl}/userApi-addUser`;
};

export const getUsers = () => {
  return ` ${baseUrl}/userApi-getUsers `;
};

export const updateUser = () => {
  return ` ${baseUrl}/userApi-updateUser `;
};

export const deleteUser = (userId: string) => {
  return ` ${baseUrl}/userApi-deleteUser?userId=${userId} `;
};
