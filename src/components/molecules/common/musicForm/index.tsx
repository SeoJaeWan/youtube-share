import Button from "@/components/atoms/common/button";
import MusicFormStyle from "./musicForm.style";
import useMusicForm from "@/hooks/useMusicForm";
import { addList } from "@/socket";
import { useAlert } from "@/hooks/useAlert";

const MusicForm = () => {
  const {
    linkRegister,
    linkError,
    //
    handleSubmitForm,
    reset,
  } = useMusicForm();
  const { addMessage } = useAlert();

  const handleSubmit = (data: {
    link: string;
    title: string;
    time: string;
  }) => {
    const { title, link, time } = data;
    addList({ title, link, time });
    addMessage({
      message: "음악이 추가되었습니다.",
      type: "notification",
    });
    reset();
  };

  return (
    <MusicFormStyle.Container onSubmit={handleSubmitForm(handleSubmit)}>
      <MusicFormStyle.Label>
        <MusicFormStyle.Input
          $error={!!linkError}
          placeholder="ex) https://www.youtube.com/watch?v=fLi0EJfi_vg"
          {...linkRegister}
        />
        <MusicFormStyle.Error>{linkError?.message}</MusicFormStyle.Error>
      </MusicFormStyle.Label>

      <Button>등록</Button>
    </MusicFormStyle.Container>
  );
};

export default MusicForm;
