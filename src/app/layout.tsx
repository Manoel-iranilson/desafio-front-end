import NavBar from "./components/navbar";
import SideBar from "./components/sideBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex w-full h-full ">
          <SideBar />

          <div className="w-full bg-gray">
            <NavBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
