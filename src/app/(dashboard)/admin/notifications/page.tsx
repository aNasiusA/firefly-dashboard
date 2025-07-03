import RequireRole from "@/components/auth/RequireRole";

const Page = () => {
  return (
    <RequireRole role="admin">
      <div className="">Page</div>
    </RequireRole>
  );
};

export default Page;
