import React from "react";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

function footer() {
  return (
    <div className=" w-screen  items-center justify-center absolute bottom-0 bg-black h-32">
      <div className=" bg-black">
        <div className="flex items-center justify-between px-10 ">
     
            <Image
              src="/white-jwmc.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
   
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
