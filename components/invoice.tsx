import Link from "next/link";
import Image from "next/image";

const Invoice = () => {
  return (
    <>
      <div className="flex justify-between px-[100px] py-10">
        <div className="flex flex-col worksans-font text-base font-normal">
          <h2 className="font-semibold ">ShapeCo</h2>
          <h3>ShapeCo@gmail.com</h3>
          <h3>Shape.Co</h3>
        </div>

        <div className="flex flex-col worksans-font text-[#000] font-semibold text-[28px]">
          <h2>Invoice</h2>
          <h2>#17A5B473</h2>
        </div>
      </div>
      {/* bottom border */}
      <div className="h-[1px] bg-[#C6C6C6] mx-[100px]"></div>

      {/* customore info container */}
      <div className="flex justify-between  px-[100px] py-10">
        <div className="flex flex-col worksans-font text-base font-normal leading-normal">
          <h2 className="font-semibold ">Customer Contact Info:</h2>
          <h3>Chef Jeff</h3>
          <h3>Chef@Jeff.com</h3>
        </div>

        <div className="flex flex-col worksans-font text-base font-normal leading-normal">
          <h2 className="font-semibold ">Bill To:</h2>
          <h3>Chef Jeff</h3>
          <h3>Chef@Jeff.com</h3>
          <h3>Wallet ID: 0x223...a469</h3>
        </div>

        <div className="grid grid-cols-2 gap-x-40 ">
          <div className="flex flex-col worksans-font text-base text-[#626262] font-normal gap-y-4">
            <h2>Customer Name</h2>
            <h2>Issue Date</h2>
            <h2>Due Date</h2>
            <h2>Amount Due</h2>
          </div>
          <div className="flex flex-col worksans-font text-base text-[#000] font-normal gap-y-4">
            <h2>Cheff Jeff</h2>
            <h2>Dec 10, 2023</h2>
            <h2>Jan 10, 2023</h2>
            <h2>$10,000</h2>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#C6C6C6] mx-[100px]"></div>
    </>
  );
};

export default Invoice;
