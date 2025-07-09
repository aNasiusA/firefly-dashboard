export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split(";").map((c) => c.trim());
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }

  return null;
}
