import { useForm } from "react-hook-form";

const useMusicForm = () => {
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      link: "",
    },
  });

  const titleRegister = form.register("title", {
    required: { value: true, message: "제목을 입력해주세요." },
  });

  const linkRegister = form.register("link", {
    required: { value: true, message: "링크를 입력해주세요." },
    pattern: {
      value: /^https:\/\/www\.youtube\.com\/watch\?v=[a-zA-Z0-9_-]+$/,
      message: "유효한 링크를 입력해주세요.",
    },
  });

  const error = form.formState.errors;

  const titleError = error.title;
  const linkError = error.link;

  const handleSubmitForm = (
    submit: ({ title, link }: { title: string; link: string }) => void
  ) =>
    form.handleSubmit((data) => {
      const title = data.title;
      const link = data.link.split("v=")[1];

      submit({ title, link });
    });

  return {
    titleRegister,
    linkRegister,
    titleError,
    linkError,
    //
    handleSubmitForm,
  };
};

export default useMusicForm;
