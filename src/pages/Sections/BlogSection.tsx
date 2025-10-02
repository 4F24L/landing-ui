import BlogCard from "../../components/BlogCard"
import SectionHeader, { type HeaderProps } from "../../components/SectionHeader"
import { BlogCards } from "../../lib/Constant"
import type { BlogCardType } from "../../lib/types"

const BlogHeader : HeaderProps= {
    btnText: 'Blog',
    title: 'Discover insights, trends, & Inspirations',
}
const BlogSection = () => {
  return (
    <div className=" mb-28">
        <SectionHeader {...BlogHeader}/>

        <div className="flex max-w-7xl mx-auto mt-8">
          {BlogCards.map((card:BlogCardType, index) => (
            <div key={index} className=" w-1/3 p-2">
              <BlogCard {...card} />
            </div>
          ))}
        </div>

        <button className=" button-black flex mx-auto mt-10">See All</button>
    </div>
  )
}

export default BlogSection