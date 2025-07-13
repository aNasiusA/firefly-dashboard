import axios from "axios";
const baseEndPoint = process.env.NEXT_PUBLIC_API_BASE;
import { getCookie } from "@/services/helperFunction";

const getInstructorData = async () => {
  try {
    const id = getCookie("id");
    if (!id) {
      console.log("No ID found in cookies.");
      return;
    }
    const response = await axios.get(`${baseEndPoint}/api/instructors/${id}`, {
      withCredentials: true,
    });
    console.log(response);
  } catch (error) {
    console.log(`Error fetching instructor data`, error);
  }
};

export { getInstructorData };
