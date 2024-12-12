import Controller from "@/components/molecules/admin/controller";
import AdminStyle from "./admin.style";
import List from "@/components/molecules/admin/list";
import AddMusic from "@/components/organisms/admin/AddMusic";

const AdminTemplate = () => {
  return (
    <AdminStyle.Container>
      <AdminStyle.Controller>
        <Controller />
      </AdminStyle.Controller>
      <AdminStyle.List>
        <List />
      </AdminStyle.List>

      <AddMusic />
    </AdminStyle.Container>
  );
};

export default AdminTemplate;
