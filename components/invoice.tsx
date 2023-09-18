import Link from "next/link";
import Image from "next/image";

const Invoice = () => {
  return (
    <>
      <div className="flex justify-between items-center px-[100px] py-10">
        <div className="flex flex-col worksans-font text-base">
          <h2 className="font-semibold ">ShapeCo</h2>
          <h3 className="font-normal">ShapeCo@gmail.com</h3>
          <h3 className="font-normal">Shape.Co</h3>
        </div>
        <div className="flex flex-col worksans-font text-[#000] font-semibold text-[28px]">
          <h2>Invoice</h2>
          <h2>#17A5B473</h2>
        </div>
      </div>
      {/* bottom border */}
      <div className="h-[1px] bg-[#C6C6C6] mx-[100px]"></div>
    </>
  );
};

export default Invoice;
