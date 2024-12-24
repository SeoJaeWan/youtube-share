"use client";

import { useState } from "react";
import HelpStyle from "./help.style";
import Image from "next/image";

const Help = () => {
  const [isModal, setIsModal] = useState(false);

  const handleOpen = () => {
    setIsModal(true);
  };

  const handleClose = () => {
    setIsModal(false);
  };

  return (
    <>
      {isModal && (
        <HelpStyle.Modal>
          <Image
            src={"/assets/common/help.png"}
            alt={"도움말"}
            width={400}
            height={400}
          />

          <HelpStyle.Close type={"button"} onClick={handleClose}>
            닫기
          </HelpStyle.Close>
        </HelpStyle.Modal>
      )}
      <HelpStyle.Button type={"button"} onClick={handleOpen}>
        ?
      </HelpStyle.Button>
    </>
  );
};

export default Help;
