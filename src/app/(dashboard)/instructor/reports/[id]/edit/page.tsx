"use client";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  return <div className="">Edit Report with ID: {params.id}</div>;
};

export default Page;
