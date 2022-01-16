import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full flex justify-center items-center">
      <Image
        src="/assets/svg/chevron.svg"
        width="40"
        height="40"
        alt="next page"
      />
    </div>
  );
}
