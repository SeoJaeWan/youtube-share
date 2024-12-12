import Button from "@/components/atoms/common/button";
import MusicFormStyle from "./musicForm.style";

const MusicForm = () => {
  return (
    <MusicFormStyle.Container>
      <MusicFormStyle.Label>
        <p>제목</p>
        <MusicFormStyle.Input />
      </MusicFormStyle.Label>

      <MusicFormStyle.Label>
        <p>링크</p>
        <MusicFormStyle.Input />
      </MusicFormStyle.Label>

      <Button>등록</Button>
    </MusicFormStyle.Container>
  );
};

export default MusicForm;
