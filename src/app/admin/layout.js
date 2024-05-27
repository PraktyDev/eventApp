import AdminNav from "@/components/AdminNav";

export const dynamic = 'force-dynamic'
export default function RootLayout({ children }) {
  return (
    <main>
        <AdminNav />
        {children}
    </main>
  );
}
