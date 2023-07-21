import Image from "next/image"
import { FC } from "react"

interface ServiceProps {
    src: string,
    alt: string,
    title: string,
    paragraph: string,
}

export const Service: FC<ServiceProps> = ({ src, alt, title, paragraph }) => {
    return(
        <div className="w-full max-w-sm bg-slate-200 shadow-md">
            <div className=" h-52 overflow-hidden">
                <Image 
                    className=" w-full h-full object-cover object-center"
                    src={ src } 
                    alt={ alt } 
                    width={500} 
                    height={100}
                />
            </div>
            <div className="p-6 text-center flex flex-col gap-1">
                <h3 className=" text-xl font-black">{ title }</h3>
                <p className=" text-base">{ paragraph }</p>
            </div>
        </div>
    )
}