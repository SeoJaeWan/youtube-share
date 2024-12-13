import Button from "@/components/atoms/common/button";
import MusicFormStyle from "./musicForm.style";

const MusicForm = () => {
  return (
    <MusicFormStyle.Container>
      <MusicFormStyle.Label>
        <p>제목</p>
        <MusicFormStyle.Input placeholder="ex) Home Sweet Home" />
      </MusicFormStyle.Label>

      <MusicFormStyle.Label>
        <p>링크</p>
        <MusicFormStyle.Input placeholder="ex) https://youtu.be/fLi0EJfi_vg?si=RmcsQKOinXqW3d70" />
      </MusicFormStyle.Label>

      <Button>등록</Button>
    </MusicFormStyle.Container>
  );
};

export default MusicForm;
