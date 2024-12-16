"use client";
import Image from "next/image";
import ListOptionStyle from "./listOption.style";
import { useEffect, useState } from "react";

const Img = {
  link: { src: "/assets/controller/link.svg", alt: "링크 공유" },
  loop: { src: "/assets/controller/loop.svg", alt: "반복 재생" },
  shuffle: { src: "/assets/controller/shuffle.svg", alt: "셔플 재생" },
};

interface ListOptionProps {
  type: "loop" | "shuffle" | "link";
  isActive?: boolean;
  onClick: (value: boolean) => void;
}

const ListOption = (props: ListOptionProps) => {
  const { type, isActive, onClick } = props;
  const [active, setActive] = useState(false);

  const img = Img[type];
  const alt = img.alt + `${isActive && active ? " 종료" : ""}`;

  const handleClick = () => {
    const update = !active;
    setActive(update);
    onClick(update);
  };

  useEffect(() => {
    setActive(localStorage.getItem(type) === "true");
  }, [type]);

  return (
    <ListOptionStyle.Container
      $active={!isActive || active}
      onClick={handleClick}
    >
      <Image src={img.src} alt={alt} width={25} height={25} />
    </ListOptionStyle.Container>
  );
};

export default ListOption;
