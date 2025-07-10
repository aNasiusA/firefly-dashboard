export function getCookie(name: string): string {
  if (typeof document === "undefined") return "";

  const cookies = document.cookie.split(";").map((c) => c.trim());
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }

  return "";
}
