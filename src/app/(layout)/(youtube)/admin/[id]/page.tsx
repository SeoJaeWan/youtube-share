import AdminTemplate from "@/components/templates/admin";
import createMeta from "@/utils/createMeta";

export const metadata = createMeta({
  title: ` - 운영자`,
  description:
    "혼자 관리하는 노동요는 그만! 함께 즐거운 노동요를 만들어보세요.",
});

const Admin = () => {
  return <AdminTemplate />;
};

export default Admin;
