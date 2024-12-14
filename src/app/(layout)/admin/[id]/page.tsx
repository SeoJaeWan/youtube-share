"use client";

import AdminTemplate from "@/components/templates/admin";
import YoutubeProvider from "@/hooks/useYoutube";

export default function Admin() {
  return (
    <YoutubeProvider>
      <AdminTemplate />
    </YoutubeProvider>
  );
}
