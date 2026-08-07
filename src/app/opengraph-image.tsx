import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { AUTHOR, SITE_URL } from "./site";

export const alt = `${AUTHOR.name} — ${AUTHOR.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const font = await readFile(
    join(process.cwd(), "public/fonts/NeueMontreal-Bold.otf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0B0C0E",
          fontFamily: "NeueMontreal",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: "#C7D0D9" }}>
          Hi, I&apos;m
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            color: "#F4F7FA",
            marginTop: 8,
          }}
        >
          {AUTHOR.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#C7D0D9",
            marginTop: 24,
            maxWidth: 1000,
          }}
        >
          Full-Stack Developer &amp; Digital Transformation Consultant
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#5A646E",
            marginTop: 56,
          }}
        >
          {SITE_URL.replace("https://", "")}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "NeueMontreal", data: font, weight: 700, style: "normal" }],
    }
  );
}
