import FaqCard from "../../components/FaqCard"
import type { HeaderProps } from "../../components/SectionHeader"
import SectionHeader from "../../components/SectionHeader"
import { faqs } from "../../lib/Constant"
import type { faqType } from "../../lib/types"

const FaqHeader : HeaderProps= {
    btnText: 'Faq',
    title: 'You asked, We Answered',
    subtitle: 'Still got questions? Feel free to reach out to our incredible support team, 7 days a week.'

}


const FaqSection = () => {
  return (
    <div className=" h-full">
        <SectionHeader {...FaqHeader} />

        <div className=" flex flex-col max-w-3xl mx-auto mt-12 gap-4">
        {faqs.map((faq:faqType, index) => (
          <div key={index}>
            <FaqCard {...faq} />
            </div>
        ))}
        </div>
    </div>
  )
}

export default FaqSection