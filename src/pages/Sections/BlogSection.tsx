import SectionHeader, { type HeaderProps } from "../../components/SectionHeader"

const BlogHeader : HeaderProps= {
    btnText: 'Blog',
    title: 'Discover insights, trends, & Inspirations',
}
const BlogSection = () => {
  return (
    <div className=" h-full">
        <SectionHeader {...BlogHeader}/>
    </div>
  )
}

export default BlogSection