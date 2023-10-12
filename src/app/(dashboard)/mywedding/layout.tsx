"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [navColor, setNavColor] = useState(pathname);
  useEffect(() => {
    setNavColor(pathname);
  }, [pathname]);
  return (
    <div className="">
      <div className="flex">
        <div className="flex-1"></div>
        <ul className="flex gap-x-4 flex-2 flex-wrap justify-center">
          <Link
            href={"/mywedding"}
            className={`${
              navColor === "/mywedding" ? "border-b-2 border-b-[#FF44CB]" : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            href={"/mywedding/myProfile"}
            className={`${
              navColor === "/mywedding/myProfile"
                ? "border-b-2 border-b-[#FF44CB]"
                : ""
            }`}
          >
            My Profile
          </Link>
          <Link
            href={"/mywedding/myphotos"}
            className={`${
              navColor === "/mywedding/myphotos"
                ? "border-b-2 border-b-[#FF44CB]"
                : ""
            }`}
          >
            My Photos
          </Link>
          <Link
            href={"/mywedding/partnerPrefarence"}
            className={`${
              navColor === "/mywedding/partnerPrefarence"
                ? "border-b-2 border-b-[#FF44CB]"
                : ""
            }`}
          >
            Partner-Prefarence
          </Link>
          <Link
            href={"/mywedding/setting"}
            className={`${
              navColor === "/mywedding/setting"
                ? "border-b-2 border-b-[#FF44CB]"
                : ""
            }`}
          >
            Setting
          </Link>
        </ul>
        <div className="flex-1"></div>
      </div>

      {children}
    </div>
  );
};

export default Layout;
