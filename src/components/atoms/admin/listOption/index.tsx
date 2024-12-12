import Image from "next/image";
import ListOptionStyle from "./listOption.style";
import { HTMLAttributes } from "react";

const Img = {
  loop: { src: "/assets/controller/loop.svg", alt: "반복 재생" },
  shuffle: { src: "/assets/controller/shuffle.svg", alt: "셔플 재생" },
};

interface ListOptionProps extends HTMLAttributes<HTMLButtonElement> {
  type: "loop" | "shuffle";
  active?: boolean;
}

const ListOption = (props: ListOptionProps) => {
  const { type, active, ...rest } = props;

  const img = Img[type];
  const alt = img.alt + `${active ? " 종료" : ""}`;

  return (
    <ListOptionStyle.Container {...rest} $active={active}>
      <Image src={img.src} alt={alt} width={25} height={25} />
    </ListOptionStyle.Container>
  );
};

export default ListOption;
