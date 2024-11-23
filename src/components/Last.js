import { Image } from "@nextui-org/react";
import end from "../assets/end.webp";

function Last() {
  return (
    <section className="py-10 px-4">
      <Image src={end} className="" />

      {/* <div
        className="text-[100px] font-[calvera] flex text-transparent"
        style={{
          background: "linear-gradient(to top, #bba9c4, #836491)",
          backgroundClip: "text",
        }}
      >
        <p>D</p>
        <p className="mt-6">D</p>
      </div> */}
    </section>
  );
}

export default Last;
