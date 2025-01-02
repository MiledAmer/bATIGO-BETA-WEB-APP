import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useState } from "react";
import { useAuth } from "@/hooks/useAxios";
import apiClient from "@/api/apiClient";
export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const { setToken, setUser } = useAuth(); 
  const [email_u, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/login", { email_u, password });

      setToken(response.data.data.token); 
      setUser(response.data.data.user); 
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };
  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSubmit} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email"   value={email_u}
        onChange={(e) => setEmail(e.target.value)} placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password"     value={password}
        onChange={(e) => setPassword(e.target.value)} type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  )
}
// import React, { useState } from "react";
// import { useAuth } from "@/hooks/useAxios";
// import apiClient from "@/api/apiClient";
// export const LoginForm: React.FC = () => {
//   const { setToken, setUser } = useAuth(); 
//   const [email_u, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await apiClient.post("/login", { email_u, password });

//       setToken(response.data.data.token); 
//       setUser(response.data.data.user); 
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//       {error && <p className="text-red-500">{error}</p>}
//       <input
//         type="email"
//         placeholder="Email"
//         value={email_u}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="p-2 border rounded"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         className="p-2 border rounded"
//       />
//       <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//         Login
//       </button>
//     </form>
//   );
// };
