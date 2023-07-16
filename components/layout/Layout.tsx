import Head from "next/head"

import { FC } from "react"
import { NavBar } from "../ui"

interface LayoutProps {
    title: string,
    metaTitle: string,
    description: string,
    children: JSX.Element
}

export const Layout: FC<LayoutProps> = ({ title, metaTitle, description, children }) => {
    return(
        <>
            <Head>
                <title>{ title }</title>
                <meta name="title" content={ metaTitle } />
                <meta name="author" content="Facundo Cáceres" />
                <meta name="description" content={ description } />
            </Head>
            <NavBar />
            <main>
                {children}
            </main>
        </> 
    )
    
}