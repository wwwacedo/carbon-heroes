"use client";
import { orbitron } from "@/app/fonts/fonts";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export default function QrCode() {
  
	const [url, setUrl] = useState("");

  useEffect(() => {
    const currentUrl = window.location.href;
    setUrl(currentUrl);
  }, []);

  return (
    <div>
			<h2 className={`${orbitron.className}`}>Carbon Hero</h2>
      <QRCode
        value={url}
        size={256}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
      />
    </div>
  );
}
