import Controller from "@/components/molecules/admin/controller";
import AdminStyle from "./admin.style";
import List from "@/components/molecules/common/list";
import AddMusic from "@/components/organisms/common/addMusic";
import { useEffect } from "react";
import { addedList, check } from "@/socket";
import useWave from "@/hooks/useWave";
import { useYoutube } from "@/hooks/useYoutube";
import { useAlert } from "@/hooks/useAlert";
import { useRouter } from "next/navigation";

const AdminTemplate = () => {
  const router = useRouter();
  const { onWave } = useWave();
  const { initList, addMusic } = useYoutube();
  const { addMessage } = useAlert();

  useEffect(() => {
    check((check) => {
      if (!check) {
        addMessage({
          message: "잘못된 접근입니다.",
          type: "single",
          onConfirm: () => {
            router.push("/");
          },
        });
      } else {
        onWave();
        initList();
      }
    });
  }, [router, onWave, addMessage]);

  useEffect(() => {
    addedList(addMusic);
  }, [addMusic]);

  return (
    <AdminStyle.Container>
      <AdminStyle.Controller>
        <Controller />
      </AdminStyle.Controller>
      <AdminStyle.List>
        <List type={"admin"} />
        <AddMusic />
      </AdminStyle.List>
    </AdminStyle.Container>
  );
};

export default AdminTemplate;
