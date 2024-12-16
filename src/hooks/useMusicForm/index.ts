import { useForm } from "react-hook-form";

const useMusicForm = () => {
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      link: "",
    },
  });

  const linkRegister = form.register("link", {
    required: { value: true, message: "링크를 입력해주세요." },
    pattern: {
      value: /^https:\/\/www\.youtube\.com\/watch\?v=[a-zA-Z0-9_-]/,
      message: "유효한 링크를 입력해주세요.",
    },
  });

  const error = form.formState.errors;

  const linkError = error.link;

  const handleSubmitForm = (
    submit: ({
      title,
      link,
    }: {
      title: string;
      link: string;
      time: string;
    }) => void
  ) =>
    form.handleSubmit((data) => {
      const link = data.link.match(/v=([^&]+)/)![1];
      const time = Date.now().toString();

      const formEl = document.createElement("div");
      formEl.id = "form";

      document.body.appendChild(formEl);

      new window.YT.Player("form", {
        height: "360",
        width: "640",
        videoId: link,
        events: {
          onReady: (event) => {
            submit({ title: event.target.videoTitle, link, time });

            event.target.destroy();
            document.body.removeChild(formEl);
            formEl.remove();
          },
        },
      });
    });

  return {
    linkRegister,
    linkError,
    //
    handleSubmitForm,
    reset: form.reset,
  };
};

export default useMusicForm;
