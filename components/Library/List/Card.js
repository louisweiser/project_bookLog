import Image from "next/image";

export default function CardForList() {
  return (
    <>
      <Image
        src={"/lib/cover/DieUnendlicheGeschichte.jpg"}
        alt="book cover"
        width={50}
        height={50}
      ></Image>
    </>
  );
}
