import React from "react";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

function footer() {
  return (
    <div className=" w-screen  items-center justify-center absolute bottom-0 h-32">
      <div className=" ">
        <div className="flex items-center justify-between px-10 ">
          <Link href={"/"}>
            <Image
              className="cursor-pointer"
              src="/white-jwmc.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </Link>
          <div className="flex text-white text-4xl gap-3">
            <a
              href="https://www.instagram.com/jwmusicco/"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon fontSize="inherit" className="cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/jwmusicco"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon fontSize="inherit" className="cursor-pointer" />
            </a>
            <a href="mailto:jwmusicco@gmail.com">
              <EmailIcon fontSize="inherit" className="cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="text-xs flex text-slate-600 justify-center">
          <p>Design and build by &nbsp;</p>
          <a
            href="https://justinwaves.github.io/jw-portfolio-2021/"
            className="text-slate-500"
          >
            Justin Weisberg
          </a>
        </div>
      </div>
    </div>
  );
}

export default footer;
