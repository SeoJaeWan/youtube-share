import { IoIosPlay } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import ItemStyle from "./item.style";
import SlideText from "../../common/slideText";
import { color } from "@/style/theme";
import useTrackManager from "@/store/trackManager";
import { HopeMusic, Type } from "@/types/global";
import { useYoutube } from "@/hooks/useYoutube";

interface ItemProps extends HopeMusic {
  index: number;
  delay: number;
  type: Type;
}

const Item = (props: ItemProps) => {
  const { title, delay, type, time, index } = props;
  const { current, update, remove } = useYoutube();

  const { isList, duration } = useTrackManager();

  const itemClass = isList ? "show" : "hide";
  const active = current?.time === time;

  const handleUpdate = () => {
    update(index);
  };

  const handleRemove = () => {
    remove(time);
  };

  return (
    <ItemStyle.Container
      $delay={delay + (isList ? duration : 0)}
      $duration={duration}
      className={itemClass}
    >
      <ItemStyle.Title>
        <SlideText>{title}</SlideText>
      </ItemStyle.Title>
      {type === "admin" && (
        <ItemStyle.Button disabled={active} onClick={handleRemove}>
          <RiDeleteBin6Line size={18} color={color.gray} />
        </ItemStyle.Button>
      )}
      <ItemStyle.Button
        $active={active}
        disabled={active}
        onClick={handleUpdate}
      >
        <IoIosPlay size={22} color={active ? color.white : color.primary} />
      </ItemStyle.Button>
    </ItemStyle.Container>
  );
};

export default Item;
