import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ margin: 0, padding: 0, background: "#f5f5f7" }}>
      {children}
    </div>
  );
}