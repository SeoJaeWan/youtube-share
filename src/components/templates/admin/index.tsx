import Controller from "@/components/atoms/admin/controller";
import AdminStyle from "./admin.style";

const AdminTemplate = () => {
  return (
    <AdminStyle.Container>
      <AdminStyle.Controller>
        <Controller />
      </AdminStyle.Controller>
      <AdminStyle.List></AdminStyle.List>
    </AdminStyle.Container>
  );
};

export default AdminTemplate;
