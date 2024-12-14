"use client";
import Image from "next/image";
import ListOptionStyle from "./listOption.style";
import { useEffect, useState } from "react";

const Img = {
  loop: { src: "/assets/controller/loop.svg", alt: "반복 재생" },
  shuffle: { src: "/assets/controller/shuffle.svg", alt: "셔플 재생" },
};

interface ListOptionProps {
  type: "loop" | "shuffle";
  onClick: (value: boolean) => void;
}

const ListOption = (props: ListOptionProps) => {
  const { type, onClick } = props;
  const [active, setActive] = useState(false);

  const img = Img[type];
  const alt = img.alt + `${active ? " 종료" : ""}`;

  const handleClick = () => {
    const update = !active;
    setActive(update);
    onClick(update);
  };

  useEffect(() => {
    setActive(localStorage.getItem(type) === "true");
  }, [type]);

  return (
    <ListOptionStyle.Container $active={active} onClick={handleClick}>
      <Image src={img.src} alt={alt} width={25} height={25} />
    </ListOptionStyle.Container>
  );
};

export default ListOption;
