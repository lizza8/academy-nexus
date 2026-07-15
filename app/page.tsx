import { TbcHeader } from "@/components/tbc/header"
import { TbcBanner, TbcCourses, TbcInformation } from "@/components/tbc/sections"
import { TbcPartnersSlider } from "@/components/tbc/partners-slider"
import { TbcFaq } from "@/components/tbc/faq"
import { TbcFooter } from "@/components/tbc/footer"
import "./tbc.css"

export default function Page() {
  return (
    <div className="tbc-page">
      <TbcHeader />
      <main className="main-container">
        <TbcBanner />
        <TbcInformation />
        <TbcCourses />
        <TbcPartnersSlider />
        <TbcFaq />
      </main>
      <TbcFooter />
    </div>
  )
}
