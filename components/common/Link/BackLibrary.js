import Link from "next/link";

import { BackSVG } from "@/public/svgs/router.js";

export default function BackLibraryButton() {
  return (
    <Link href={`/library`}>
      <BackSVG></BackSVG>
    </Link>
  );
}
