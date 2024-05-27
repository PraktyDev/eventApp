import BottomNav from "@/components/BottomNav";

export const revalidate = 0

export default function RootLayout({ children }) {

  return (
    <main>
        {children}
        <BottomNav />
    </main>
  );
}
