"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function LoginForm() {
  const router = useRouter(); // <-- WAJIB DI SINI

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.message || "Login gagal");
        setLoading(false);
        return;
      }

      // SUCCESS
      setSuccess(data.message);

      setTimeout(() => {
        router.push("/admin/backoffice");
      }, 3000);

      setLoading(false);
    } catch (err) {
      setError("Terjadi kesalahan saat login");
      setLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      {/* Logo */}
      <img
        src="/logohimsi2.webp"
        alt="Logo"
        style={{
          width: 55,
          margin: "0 auto 12px auto",
          display: "block",
        }}
      />

      <h2
        style={{
          textAlign: "center",
          marginBottom: 20,
          fontSize: 22,
          fontWeight: 600,
        }}
      >
        Login Admin HIMSI
      </h2>

      {/* USERNAME */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontWeight: 500 }}>Username</label>
        <input
          type="text"
          placeholder="Masukkan username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px",
            marginTop: 6,
            borderRadius: 10,
            border: "1px solid #ccc",
            fontSize: 15,
          }}
        />
      </div>

      {/* PASSWORD */}
      <div style={{ marginBottom: 22 }}>
        <label style={{ fontWeight: 500 }}>Password</label>
        <input
          type="password"
          placeholder="Masukkan password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px",
            marginTop: 6,
            borderRadius: 10,
            border: "1px solid #ccc",
            fontSize: 15,
          }}
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px 0",
          borderRadius: 10,
          background: "#800000",
          border: "none",
          color: "white",
          fontWeight: 600,
          fontSize: 16,
          cursor: loading ? "not-allowed" : "pointer",
          transition: "transform 0.15s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.04)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        {loading ? "Loading..." : "Masuk"}
      </button>

      {/* STATUS MESSAGE */}
      <div style={{ minHeight: 36, marginTop: 14 }}>
        {error && (
          <div
            style={{
              padding: "10px 12px",
              borderRadius: 10,
              background: "rgba(200,0,0,0.1)",
              color: "#8b0000",
              fontSize: 13,
            }}
          >
            {error}
          </div>
        )}

        {success && (
          <div
            style={{
              padding: "10px 12px",
              borderRadius: 10,
              background: "rgba(0,140,40,0.1)",
              color: "#0b5127",
              fontSize: 13,
            }}
          >
            {success}
          </div>
        )}
      </div>
    </form>
  );
}
