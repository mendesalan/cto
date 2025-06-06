import { ImageResponse } from "next/og";

export const runtime = "edge";
export const dynamic = "force-static";

export const alt = "meuCTOdigital.com | Seu Tech de Confiança";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#059669",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              CT
            </div>
          </div>
          <div
            style={{
              color: "white",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            meuCTOdigital.com
          </div>
        </div>

        {/* Main Title */}
        <div
          style={{
            color: "white",
            fontSize: "56px",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: "1.2",
            marginBottom: "30px",
            maxWidth: "900px",
          }}
        >
          Construa seu negócio digital com segurança
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#9CA3AF",
            fontSize: "24px",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: "1.4",
          }}
        >
          CTO on demand • Arquitetura de Software • Consultoria Técnica
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: "50px",
            right: "50px",
            width: "150px",
            height: "150px",
            background: "#059669",
            borderRadius: "50%",
            opacity: "0.1",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            left: "50px",
            width: "200px",
            height: "200px",
            background: "#0EA5E9",
            borderRadius: "50%",
            opacity: "0.1",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
