import Controller from "@/components/molecules/admin/controller";
import AdminStyle from "./admin.style";
import List from "@/components/molecules/common/list";
import AddMusic from "@/components/organisms/common/addMusic";

const AdminTemplate = () => {
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
