"use client";

export default function BackgroundLogo() {
  return (
    <img
      src="/logohimsi2.webp"
      alt="bg logo"
      style={{
        position: "absolute",
        width: "450px",
        opacity: 0.25,
        filter: "blur(4px)",
        zIndex: 1,
      }}
    />
  );
}
