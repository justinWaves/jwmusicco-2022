import React from "react";
import Image from "next/image";

function footer() {
  return (
    <footer className=" w-full items-center justify-center absolute bottom-0">
      {/* <Image src="/mobile-footer.png" width="100%" height="100%" /> */}

      <div className=" bg-black">
        <div className="flex items-center justify-center gap-2">
          <div className=" w-100 h-full">
            <Image
              src="/white-jwmc.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
