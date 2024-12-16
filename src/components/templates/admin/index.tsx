import Controller from "@/components/molecules/admin/controller";
import AdminStyle from "./admin.style";
import List from "@/components/molecules/common/list";
import AddMusic from "@/components/organisms/common/addMusic";
import { useEffect } from "react";
import { addedList, check } from "@/socket";
import useWave from "@/hooks/useWave";
import { useYoutube } from "@/hooks/useYoutube";

const AdminTemplate = () => {
  const { onWave } = useWave();
  const { addMusic } = useYoutube();

  useEffect(() => {
    check((check) => {
      if (!check) {
        alert("잘못된 접근입니다.");
      } else {
        onWave();
      }
    });
  }, [onWave]);

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
