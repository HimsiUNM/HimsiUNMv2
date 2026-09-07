"use client";

import BackgroundLogo from "@/components/backgroundLogo";
import LoginCard from "@/components/LoginCard";
import LoginForm from "@/components/loginForm";

export default function AdminLoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f7",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <BackgroundLogo />
      <LoginCard>
        <LoginForm />
      </LoginCard>
    </div>
  );
}