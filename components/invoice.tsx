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
      <div className="flex justify-between px-[100px] py-10">
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
      <div className="flex justify-between px-[100px] py-5 mt-10">
        <h1 className="font-semibold w-32">Charges</h1>
        <h1 className="font-semibold w-32 text-center">QTY</h1>
        <h1 className="font-semibold w-32 text-right">Amount</h1>
      </div>
      <div className="h-[2px] bg-[#000] mx-[100px]"></div>

      {/* Details */}
      <div className="flex justify-between px-[100px] py-5 font-normal">
        <h2 className="w-32 text-[#626262]">App Design</h2>
        <h2 className="w-32 text-center text-[#626262]">1</h2>
        <h2 className="w-32 text-right">$6,000.00</h2>
      </div>
      <div className="h-[1px] bg-[#C6C6C6] mx-[100px] font-normal"></div>
      <div className="flex justify-between px-[100px] py-5">
        <h2 className="w-32 text-[#626262]">Website</h2>
        <h2 className="w-32 text-[#626262] text-center">1</h2>
        <h2 className="w-32 text-right">$6,000.00</h2>
      </div>
      <div className="h-[1px] bg-[#C6C6C6] mx-[100px]"></div>

      {/* Subtotal, Tax, and Discount */}
      <div className="flex justify-end px-[100px] py-3">
        <h2 className="w-1/6">Subtotal</h2>
        <h2 className="w-1/6 text-right">$12,000.00</h2>
      </div>
      <div className="h-[1px] bg-[#C6C6C6] mx-[100px] w-[30%] ml-auto"></div>

      <div className="flex justify-end px-[100px] py-3">
        <h2 className="w-1/6">Tax</h2>
        <h2 className="w-1/6 text-right">$0</h2>
      </div>
      <div className="h-[1px] bg-[#C6C6C6] mx-[100px] w-[30%] ml-auto"></div>

      <div className="flex justify-end px-[100px] py-3">
        <h2 className="w-1/6">Discount</h2>
        <h2 className="w-1/6 text-right">-$200.00</h2>
      </div>
      <div className="h-[1px] bg-[#C6C6C6] mx-[100px] w-[30%]  ml-auto"></div>

      {/* payment info */}
      <div className="flex justify-end px-[100px]">
        <div className="grid grid-cols-2 ml-auto py-10 w-1/3">

          <div className="flex flex-col worksans-font text-base font-normal gap-y-4 ">
            <h2 className="font-semibold text-xl text-[#000]">Amount Due</h2>
            <h2 className="font-normal">Due Date</h2>
          </div>
          <div className="flex flex-col worksans-font text-base text-[#000] font-normal gap-y-4 justify-self-end">
            <h2 className="font-semibold text-xl">$10,000.00</h2>
            <h2 className="font-semibold">Jan 10, 2023</h2>
          </div>

        </div>
      </div>
    </>
  );
};

export default Invoice;
