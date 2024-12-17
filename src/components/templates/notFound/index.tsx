"use client";

import Image from "next/image";
import NotFoundStyle from "./notFound.style";
import Button from "@/components/atoms/common/button";
import Link from "next/link";

const NotFoundTemplate = () => {
  return (
    <NotFoundStyle.Container>
      <Image
        src={"/assets/common/not-found.png"}
        alt={""}
        width={400}
        height={173}
      />

      <NotFoundStyle.Content>페이지를 찾을 수 없습니다.</NotFoundStyle.Content>

      <Link href="/">
        <Button>홈으로</Button>
      </Link>
    </NotFoundStyle.Container>
  );
};

export default NotFoundTemplate;
