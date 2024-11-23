import { Button, Image, Tooltip } from "@nextui-org/react";
import end from "../assets/end.webp";
import mmm from "../assets/mmm.webp";

function Last() {
  return (
    <section className="py-10 px-4">
      <Tooltip
        content={<Image src={mmm} className="" />}
        shadow="md"
        className="p-0"
      >
        <Button className="h-fit p-0">
          <Image src={end} shadow="md" className="" />
        </Button>
      </Tooltip>
    </section>
  );
}

export default Last;
