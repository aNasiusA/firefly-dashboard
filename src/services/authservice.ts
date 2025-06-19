import axios from "axios";

const baseEndPoint = process.env.NEXT_PUBLIC_API_BASE;

export const login = async (
  email: string,
  password: string,
  remember_me: boolean
) => {
  try {
    const response = await axios.post(
      `${baseEndPoint}/api/login/`,
      { email, password, remember_me },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const user = response?.data?.user;
    return user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Login failed:",
        error.response?.data?.message || error.message
      );
      throw error.response?.data || new Error("Login failed");
    }
    console.error("Unexpected error:", error);
    throw new Error("An unexpected error occurred");
  }
};

export const getUser = async (id: number) => {
  try {
    const response = await axios.get(`${baseEndPoint}/api/users/${id}/`);
    const user = response?.data?.user;
    return user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Could not get user:",
        error.response?.data?.message || error.message
      );
      throw error.response?.data || new Error("Could not get user");
    }
    console.error("Unexpected error:", error);
    throw new Error("An unexpected error occurred");
  }
};
