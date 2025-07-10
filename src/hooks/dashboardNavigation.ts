import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-hot-toast";
import { useState } from "react";

interface NavigationOptions {
  href: string;
  loadingMessage?: string;
  successMessage?: string;
  errorMessage?: string;
  delayMs?: number;
}

export const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  const navigate = async ({
    href,
    loadingMessage = "Loading page...",
    successMessage = "Page loaded successfully",
    errorMessage = "Failed to load page",
    delayMs = 3000,
  }: NavigationOptions) => {
    // Don't navigate if already on the same route
    if (pathname === href || isNavigating) return;

    setIsNavigating(true);
    const loadingToast = toast.loading(loadingMessage);

    try {
      if (delayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
      router.push(href);
      toast.success(successMessage, {
        id: loadingToast,
        duration: 3000,
      });
    } catch (error) {
      console.log(error);
      toast.error(errorMessage, {
        id: loadingToast,
        duration: 3000,
      });
    } finally {
      setIsNavigating(false);
    }
  };

  return { navigate, isNavigating, currentPath: pathname, setIsNavigating };
};
