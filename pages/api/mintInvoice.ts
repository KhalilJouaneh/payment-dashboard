import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // security check
  if (process.env.SPHERE_WEBHOOK_SECRET) {
    const signature = crypto
      .createHmac("sha256", Buffer.from(process.env.SPHERE_WEBHOOK_SECRET!))
      .update(JSON.stringify(req.body), "utf8")
      .digest("hex");

    if (signature !== req.headers["signature"]) {
      return res.status(403).json({ message: "Invalid api key" });
    }
  }

  if (req.method === "POST") {
    const url = "https://api.underdogprotocol.com/v2/projects/2/nfts";

    const receiverAddress = req.body.data.payment.customer.solanaPubKey;
    const invoicePDF = "hi";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.UNDERDOG_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        upsert: false,
        delegated: true,
        name: "Sphere Invoice",
        image: "https://sphere-take-home-beta.vercel.app/invoiceNFT.png",
        externalUrl: "https://spherepay.co/",
        receiverAddress,
        attributes: {
          invoicePDF: invoicePDF,
        },
      }),
    });

    if (!response.ok) {
      return res.status(response.status).json({ message: response.statusText });
    }

    return res.status(200).json({ message: "OK" });
  }

  res.status(400).json({
    message: "Not OK",
    body: req.body,
  });
};

export default handler;
