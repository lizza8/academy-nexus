import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "TBC x USAID",
  description:
    "TBC x USAID - ტექნოლოგიური განათლებისთვის. სრულად დაფინანსებული ონლაინ საგანმანათლებლო პრაქტიკული კურსები ICT მიმართულებით.",
  icons: {
    icon: "https://static.wixstatic.com/media/93e8a3_03d83d668a5f417ca646a5e511f8c02a%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/93e8a3_03d83d668a5f417ca646a5e511f8c02a%7Emv2.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ka">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
