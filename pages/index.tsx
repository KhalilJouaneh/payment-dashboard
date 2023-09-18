import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Invoice from "@/components/invoice";

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


export default function Home() {
  const invoiceProps: InvoiceProps = {
    companyName: "ShapeCo",
    companyEmail: "ShapeCo@gmail.com",
    companyWebsite: "Shape.Co",
    invoiceNumber: "#17A5B473",
    customerName: "Chef Jeff",
    customerEmail: "Chef@Jeff.com",
    walletID: "Wallet ID: 0x223...a469",
    issueDate: "Dec 10, 2023",
    dueDate: "Jan 10, 2023",
    amountDue: "$10,000",
    charges: [
      { description: "App Design", qty: 1, amount: "$6,000.00" },
      { description: "Website", qty: 1, amount: "$6,000.00" },
    ],
    subtotal: "$12,000.00",
    tax: "$0",
    discount: "-$200.00",
    questionsContact: {
      name: "ShapeCo",
      email: "Shapeco@gmail.com",
      phone: "123-456-7890",
    },
  };

  return (
    <>
      <Navbar />
      <Invoice {...invoiceProps} />
    </>
  );
}
