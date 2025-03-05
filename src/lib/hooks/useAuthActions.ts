import { useAuth } from "@/context/AuthContext";
import { toast } from "@/lib/hooks/use-toast";

export const useAuthActions = () => {
  const { login, logout } = useAuth();

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await fetch(
        "https://backend-production-1467.up.railway.app/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        login(data);
        toast({ title: "Logged in successfully" });
      } else {
        toast({
          title: "Login failed",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({ title: "Something went wrong", variant: "destructive" });
    }
  };

  return { loginUser, logout };
};
