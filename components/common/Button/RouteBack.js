import { useRouter } from "next/router";

import { BackSVG } from "@/public/svgs/router.js";

export default function RouteBackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button onClick={handleBackClick}>
      <BackSVG></BackSVG>
    </button>
  );
}
