// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { ReactNode } from "react";
// import { useAuth } from "@/hooks/Authcontext";

// interface RequireRoleProps {
//   role: "admin" | "instructor" | "director";
//   children: ReactNode;
// }

// const RequireRole = ({ role, children }: RequireRoleProps) => {
//   const { userRole } = useAuth();
//   const router = useRouter();
//   const [checked, setChecked] = useState(false);

//   useEffect(() => {
//     if (!userRole) return; // wait until role is set (prevents flash)

//     if (userRole !== role) {
//       router.replace("/unauthorized");
//     } else {
//       setChecked(true);
//     }
//   }, [userRole, role, router]);

//   // Show nothing while checking role
//   if (!checked) return null;

//   return <>{children}</>;
// };

// export default RequireRole;
