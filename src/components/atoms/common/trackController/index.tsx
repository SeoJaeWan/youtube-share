import { FaListUl } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";
import useTrackManager from "@/store/trackManager";
import TrackControllerStyle from "./trackController.style";
import { color } from "@/style/theme";
import { useYoutube } from "@/hooks/useYoutube";

const TrackController = () => {
  const { isList, updateList } = useTrackManager();
  const { list } = useYoutube();

  const handleUpdateList = () => {
    updateList(list.length);
  };

  return (
    <TrackControllerStyle.Container onClick={handleUpdateList}>
      {isList ? (
        <FaListUl color={color.white} />
      ) : (
        <IoAddOutline color={color.white} size={20} />
      )}
    </TrackControllerStyle.Container>
  );
};

export default TrackController;
