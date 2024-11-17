import QRCode from "react-qr-code";

export default function QrCode({ url }: { url: string }) {
  return (
    <div>
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
