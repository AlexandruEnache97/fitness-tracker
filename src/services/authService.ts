import { NODE_SERVER } from "../../config";
import { AUTH_ROUTES } from "../constants/apiRoutes";
import { SignInData, SignUpData } from "../utils/interfaces"
import { post } from "./axiosOperations";

export const signInUser = async (signInData: SignInData) => {
  const data = await post(`${NODE_SERVER}/${AUTH_ROUTES.SIGN_IN}`, signInData);
  return data;
}

export const signUpUser = async (signUpData: SignUpData) => {
  const data = await post(`${NODE_SERVER}/${AUTH_ROUTES.SIGN_UP}`, signUpData);
  return data;
}