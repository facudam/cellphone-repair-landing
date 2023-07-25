import Head from "next/head"

import { FC } from "react"
import { NavBar } from "../ui"

interface LayoutProps {
    title: string,
    description: string,
    children: JSX.Element
}

export const Layout: FC<LayoutProps> = ({ title, description, children }) => {
    return(
        <>
            <Head>
                <title>{ title }</title>
                <meta name="author" content="Facundo Cáceres" />
                <meta name="description" content={ description } />
            </Head>
            <NavBar />
            
            {children}
            
        </> 
    )
    
}