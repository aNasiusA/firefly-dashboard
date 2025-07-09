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

    return response.data;
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

export const logout = async () => {
  try {
    axios.post(`${baseEndPoint}/api/logout/`, {}, { withCredentials: true });
    document.cookie = "role=; path=/; max-age=0;";
    return { message: "Logout successful" };
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
