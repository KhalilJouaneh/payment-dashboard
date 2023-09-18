import Link from "next/link";
import Image from "next/image";

interface Charge {
  description: string;
  qty: number;
  amount: string;
}

interface QuestionsContact {
  name: string;
  email: string;
  phone: string;
}

interface InvoiceProps {
  companyName: string;
  companyEmail: string;
  companyWebsite: string;
  invoiceNumber: string;
  customerName: string;
  customerEmail: string;
  walletID: string;
  issueDate: string;
  dueDate: string;
  amountDue: string;
  charges: Charge[];
  subtotal: string;
  tax: string;
  discount: string;
  questionsContact: QuestionsContact;
}

const Invoice: React.FC<InvoiceProps> = ({
  companyName,
  companyEmail,
  companyWebsite,
  invoiceNumber,
  customerName,
  customerEmail,
  walletID,
  issueDate,
  dueDate,
  amountDue,
  charges,
  subtotal,
  tax,
  discount,
  questionsContact,
}) => {
  return (
    <>
      <div className="flex justify-between px-[100px] py-10">
        <div className="flex flex-col worksans-font text-base font-normal">
          <h2 className="font-semibold ">{companyName}</h2>
          <h3>{companyEmail}</h3>
          <h3>{companyWebsite}</h3>
        </div>

        <div className="flex flex-col worksans-font text-[#000] font-semibold text-[28px]">
          <h2>Invoice</h2>
          <h2>{invoiceNumber}</h2>
        </div>
      </div>
      {/* bottom border */}
      <div className="h-[1px] bg-[#C6C6C6] mx-[100px]"></div>

      {/* customore info container */}
      <div className="flex justify-between px-[100px] py-10">
        <div className="flex flex-col worksans-font text-base font-normal leading-normal">
          <h2 className="font-semibold ">Customer Contact Info:</h2>
          <h3>{customerName}</h3>
          <h3>{customerEmail}</h3>
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
            <h2>{customerName}</h2>
            <h2>{issueDate}</h2>
            <h2>{dueDate}</h2>
            <h2>{amountDue}</h2>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#C6C6C6] mx-[100px]"></div>
      <div className="flex justify-between px-[100px] py-5 mt-10 worksans-font">
        <h1 className="font-semibold w-32">Charges</h1>
        <h1 className="font-semibold w-32 text-center">QTY</h1>
        <h1 className="font-semibold w-32 text-right">Amount</h1>
      </div>
      <div className="h-[2px] bg-[#000] mx-[100px]"></div>

      {/* Charges */}
      {charges.map((charge, index) => (
        <>
          <div
            key={index}
            className="flex justify-between px-[100px] py-5 font-normal worksans-font"
          >
            <h2 className="w-32 text-[#626262]">{charge.description}</h2>
            <h2 className="w-32 text-center text-[#626262]">{charge.qty}</h2>
            <h2 className="w-32 text-right">{charge.amount}</h2>
          </div>
          <div className="h-[1px] bg-[#C6C6C6] mx-[100px]"></div>
        </>
      ))}

      {/* Subtotal, Tax, and Discount */}
      <div className="flex justify-end px-[100px] py-3 worksans-font">
        <h2 className="w-1/6">Subtotal</h2>
        <h2 className="w-1/6 text-right">$12,000.00</h2>
      </div>
      <div className="h-[1px] bg-[#C6C6C6] mx-[100px] w-[30%] ml-auto"></div>

      <div className="flex justify-end px-[100px] py-3 worksans-font">
        <h2 className="w-1/6">Tax</h2>
        <h2 className="w-1/6 text-right">$0</h2>
      </div>

      <div className="h-[0.5px] bg-[#C6C6C6] mx-[100px] w-[30%] ml-auto "></div>

      <div className="flex justify-end px-[100px] py-3 worksans-font">
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
            <Link
              href="https://spherepay.co/pay/paymentLink_6623e2d4bb0c43239817e921defdcc88"
              target="_blank"
            >
              <button className="mt-8 w-full border rounded-lg border-[#626262] p-2 bg-[#C6C6C6] hover:bg-gray-200 transition-colors duration-300">
                Pay Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-[#C6C6C6] mx-[100px]"></div>

      {/* questions */}
      <div className="flex flex-col px-[100px] worksans-font py-10">
        <div className="ml-auto w-[33%]">
          <h1 className="font-semibold">Questions</h1>
          <h2>{questionsContact.name}</h2>
          <h2>{questionsContact.email}</h2>
          <h2>{questionsContact.phone}</h2>
        </div>
      </div>

      {/* footer */}
      <h1 className="text-center text-[#98A2B3] font-normal worksans-font mb-10 mt-[100px]">
        invoicing by <span className="font-semibold">sphere</span>{" "}
      </h1>
    </>
  );
};

export default Invoice;
