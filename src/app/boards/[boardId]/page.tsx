"use client";
import { useParams } from "next/navigation";

export default function BoardDetailPage() {
  const params = useParams();
  const boardId = params?.boardId as string;
  return (
    <>
      <div>BoardDetailPage {boardId} 페이지입니다.</div>
    </>
  );
}
