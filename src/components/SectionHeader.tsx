
export interface HeaderProps {
    btnText : string
    title: string
    subtitle?: string
}
const SectionHeader = (props: HeaderProps) => {
  return (
    <div className=" flex flex-col items-center justify-center max-w-3xl mx-auto space-y-3">
        <button className="bg-white text-black text-sm px-3 py-1 rounded-3xl shadow">{props.btnText}</button>
        <p className="text-5xl text-center  leading-tight ">{props.title}</p>
        {props.subtitle && (<p className=" text-center text-lg text-neutral-500">{props.subtitle}</p>)}
    </div>
  )
}

export default SectionHeader