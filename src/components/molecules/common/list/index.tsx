import ListStyle from "./list.style";
import { useEffect, useRef } from "react";
import useTrackManager from "@/store/trackManager";
import Item from "@/components/atoms/common/item";

const list = [
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
  {
    title: "이건 노래",
    link: "dqwd",
  },
  {
    title: "untitle",
    link: "dqwd",
  },
];

export type ListType = "client" | "admin";

interface ListProps {
  type: ListType;
}

const List = (props: ListProps) => {
  const { type } = props;
  const listRef = useRef<HTMLUListElement>(null);

  const { isList, delay, opacityDelay } = useTrackManager();

  const listClass = isList ? "show" : "hide";

  useEffect(() => {
    listRef.current!.scrollTop = 0;
  }, [isList]);

  return (
    <ListStyle.Container
      ref={listRef}
      $opacityDelay={opacityDelay}
      className={listClass}
    >
      {list.map((item, idx) => (
        <Item
          key={idx}
          title={item.title}
          link={item.link}
          index={idx}
          type={type}
          delay={delay * idx}
        />
      ))}
    </ListStyle.Container>
  );
};

export default List;
