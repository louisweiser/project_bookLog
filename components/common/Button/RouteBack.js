import { useRouter } from "next/router";

import { BackSVG } from "@/public/svgs/router.js";

export default function RouteBackButton() {
  const router = useRouter();

  const handleOnClick = () => {
    router.back();
  };

  return (
    <button onClick={handleOnClick}>
      <BackSVG></BackSVG>
    </button>
  );
}
