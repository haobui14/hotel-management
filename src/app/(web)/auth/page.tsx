"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {
  MdEmail,
  MdLock,
  MdPerson,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

const defaultFormData = {
  email: "",
  name: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Redirect if already authenticated
  useEffect(() => {
    if (session) {
      const callbackUrl = searchParams.get("callbackUrl") || "/";
      router.push(callbackUrl);
    }
  }, [session, router, searchParams]);

  // Handle authentication errors from URL
  useEffect(() => {
    const error = searchParams.get("error");

    if (error) {
      let errorMessage = "Authentication failed. Please try again.";

      switch (error) {
        case "OAuthAccountNotLinked":
          errorMessage =
            "This account is already linked with a different provider. Please try signing in with the original method.";
          break;
        case "AccessDenied":
          errorMessage = "Access denied. Please check your credentials.";
          break;
        case "Verification":
          errorMessage = "Verification failed. Please try again.";
          break;
        case "Configuration":
          errorMessage = "Server configuration error. Please contact support.";
          break;
        case "CredentialsSignin":
          errorMessage =
            "Invalid credentials. Please check your email and password.";
          break;
        default:
          errorMessage = `Authentication error: ${error}`;
      }

      toast.error(errorMessage);
    }
  }, [searchParams]);

  const inputStyles =
    "border border-gray-300 dark:border-gray-600 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-400 text-gray-900 dark:text-white transition-all duration-200";

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginHandler = async () => {
    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Invalid credentials. Please try again.");
        return;
      }

      if (result?.ok) {
        toast.success("Login successful!");
        const callbackUrl = searchParams.get("callbackUrl") || "/";
        router.push(callbackUrl);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const signUpHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Account created successfully!");
        setIsLogin(true);
        setFormData(defaultFormData);
      } else {
        toast.error(data.error || "Sign up failed. Please try again.");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      toast.error("Sign up failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!isLogin && !formData.name) {
      toast.error("Please enter your name.");
      return;
    }

    if (isLogin) {
      await loginHandler();
    } else {
      await signUpHandler();
    }
  };

  const socialSignIn = async (provider: "github" | "google") => {
    setIsLoading(true);
    try {
      await signIn(provider, {
        callbackUrl: searchParams.get("callbackUrl") || "/",
      });
    } catch (error) {
      console.error(`${provider} sign in error:`, error);
      toast.error(`${provider} sign in failed. Please try again.`);
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
            <span className="text-2xl font-bold text-white">LH</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
            {isLogin ? "Welcome Back" : "Join Us"}
          </h1>
          <p className="text-gray-600 text-lg">
            {isLogin
              ? "Sign in to your hotel management account"
              : "Create your luxury hotel experience account"}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/20 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600"></div>
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full opacity-20"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {!isLogin && (
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <div className="relative group">
                  <MdPerson
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 group-focus-within:text-amber-600 transition-colors"
                    size={20}
                  />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required={!isLogin}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 hover:bg-gray-50"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative group">
                <MdEmail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 group-focus-within:text-amber-600 transition-colors"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 hover:bg-gray-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative group">
                <MdLock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 group-focus-within:text-amber-600 transition-colors"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-12 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 hover:bg-gray-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-600 transition-colors"
                >
                  {showPassword ? (
                    <MdVisibilityOff size={20} />
                  ) : (
                    <MdVisibility size={20} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                  {isLogin ? "Signing In..." : "Creating Account..."}
                </div>
              ) : (
                <span className="text-lg">
                  {isLogin ? "Sign In" : "Create Account"}
                </span>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 mb-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300/50" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 text-gray-500 font-medium">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => socialSignIn("github")}
              disabled={isLoading}
              className="group w-full flex justify-center items-center py-4 px-4 border border-gray-200 rounded-2xl shadow-md bg-white/80 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <AiFillGithub
                size={24}
                className="text-gray-700 group-hover:text-black transition-colors"
              />
              <span className="ml-3 text-sm font-semibold text-gray-700 group-hover:text-black">
                GitHub
              </span>
            </button>

            <button
              onClick={() => socialSignIn("google")}
              disabled={isLoading}
              className="group w-full flex justify-center items-center py-4 px-4 border border-gray-200 rounded-2xl shadow-md bg-white/80 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <FcGoogle size={24} />
              <span className="ml-3 text-sm font-semibold text-gray-700 group-hover:text-black">
                Google
              </span>
            </button>
          </div>

          {/* Toggle Login/Signup */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setFormData(defaultFormData);
              }}
              className="text-amber-600 hover:text-amber-700 font-semibold transition-colors text-sm hover:underline decoration-2 underline-offset-4"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center text-sm text-gray-500">
          <p>
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Auth;
