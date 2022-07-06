import React from "react";
import Image from "next/image";

function footer() {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t bg-black">
      <div className="flex items-center justify-center gap-2">
        Powered by{" "}
        <Image
          src="/white-jwmc.png"
          alt="jw music co logo white"
          layout="intrinsic"
          width={150}
          height={50}
        />
      </div>
    </footer>
  );
}

export default footer;
