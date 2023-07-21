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
        <div className="">
            <Image src={ src } alt={ alt } width={500} height={100}/>
            <div>
                <h3>{ title }</h3>
                <p>{ paragraph }</p>
            </div>
        </div>
    )
}