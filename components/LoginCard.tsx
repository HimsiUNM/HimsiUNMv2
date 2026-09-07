"use client";

export default function LoginCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 5,
        width: "100%",
        maxWidth: 420,
        borderRadius: 18,
        padding: "32px 28px",
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(10px) saturate(140%)",
        WebkitBackdropFilter: "blur(10px) saturate(140%)",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      }}
    >
      {children}
    </div>
  );
}
