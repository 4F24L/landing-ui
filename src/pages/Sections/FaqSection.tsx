import type { HeaderProps } from "../../components/SectionHeader"
import SectionHeader from "../../components/SectionHeader"

const FaqHeader : HeaderProps= {
    btnText: 'Faq',
    title: 'You asked, We Answered',
    subtitle: 'Still got questions? Feel free to reach out to our incredible support team, 7 days a week.'

}
const FaqSection = () => {
  return (
    <div className=" h-full">
        <SectionHeader {...FaqHeader} />
    </div>
  )
}

export default FaqSection