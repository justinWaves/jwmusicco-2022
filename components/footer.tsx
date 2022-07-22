import React from "react";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

function footer() {
  return (
    <div className=" w-full items-center justify-center relative bottom-0 bg-slate-100 ">
      {/* <Image src="/mobile-footer.png" width="100%" height="100%" /> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="000"
          fill-opacity="1"
          d="M0,160L30,170.7C60,181,120,203,180,186.7C240,171,300,117,360,133.3C420,149,480,235,540,261.3C600,288,660,256,720,256C780,256,840,288,900,304C960,320,1020,320,1080,277.3C1140,235,1200,149,1260,112C1320,75,1380,85,1410,90.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="000"
          fill-opacity="1"
          d="M0,160L120,170.7C240,181,480,203,720,208C960,213,1200,203,1320,197.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg> */}

      <div className=" bg-black">
        <div className="flex items-center justify-between px-10 ">
          <div className=" ">
            <Image
              src="/white-jwmc.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
          <div className="flex text-white text-4xl gap-3">
            <InstagramIcon fontSize="inherit" />
            <FacebookIcon fontSize="inherit" />
            <EmailIcon fontSize="inherit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
