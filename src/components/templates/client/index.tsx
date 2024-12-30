"use client";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const ClientTemplate = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    router.replace(`/player/${params.id}`);
  }, [params, router]);

  return null;
};

export default ClientTemplate;
