import Button from "@/components/atoms/common/button";
import MusicFormStyle from "./musicForm.style";
import useMusicForm from "@/hooks/useMusicForm";

const MusicForm = () => {
  const {
    titleRegister,
    linkRegister,
    titleError,
    linkError,
    //
    handleSubmitForm,
  } = useMusicForm();

  const handleSubmit = (data: { title: string; link: string }) => {
    const { title, link } = data;

    console.log(title, link);
  };

  return (
    <MusicFormStyle.Container onSubmit={handleSubmitForm(handleSubmit)}>
      <MusicFormStyle.Label>
        <p>제목</p>
        <MusicFormStyle.Input
          $error={!!titleError}
          placeholder="ex) Home Sweet Home"
          {...titleRegister}
        />
        <MusicFormStyle.Error>{titleError?.message}</MusicFormStyle.Error>
      </MusicFormStyle.Label>

      <MusicFormStyle.Label>
        <p>링크</p>
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
