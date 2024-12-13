"use client";
import List from "@/components/molecules/common/list";
import ClientStyle from "./client.style";
import AddMusic from "@/components/organisms/common/addMusic";
import Controller from "@/components/molecules/client/controller";

const ClientTemplate = () => {
  return (
    <ClientStyle.Container>
      <ClientStyle.Controller>
        <Controller />
      </ClientStyle.Controller>
      <ClientStyle.List>
        <List type={"client"} />
        <AddMusic />
      </ClientStyle.List>
    </ClientStyle.Container>
  );
};

export default ClientTemplate;
