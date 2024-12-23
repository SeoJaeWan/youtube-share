import { useForm } from "react-hook-form";
import { useAlert } from "../useAlert";

const useMusicForm = () => {
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      link: "",
    },
  });
  const { addMessage } = useAlert();

  const linkRegister = form.register("link", {
    required: { value: true, message: "링크를 입력해주세요." },
    pattern: {
      value:
        /^(https:\/\/(www\.)?youtube\.com\/watch\?v=[a-zA-Z0-9_-]+(&[a-zA-Z0-9_-]+=[^&]*)*|https:\/\/youtu\.be\/[a-zA-Z0-9_-]+)(\?[^ ]*)?$/,
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
      const match =
        data.link.match(/v=([^&]+)/) ||
        data.link.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
      const time = Date.now().toString();

      const link = match![1];

      const formEl = document.createElement("div");
      formEl.id = "form";

      document.body.appendChild(formEl);

      new window.YT.Player("form", {
        height: "360",
        width: "640",
        videoId: link,
        events: {
          onReady: (event) => {
            if (event.target.videoTitle) {
              submit({ title: event.target.videoTitle, link, time });
            } else {
              addMessage({
                message: "노래를 찾을 수 없습니다.",
                type: "notification",
              });
            }
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
