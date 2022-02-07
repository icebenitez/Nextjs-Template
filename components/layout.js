import Head from "next/head";

export default function Layout({children}){
    return(
        <>
            <Head>
                <title>NextJs Template</title>
            </Head>
            {children}
        </>
    )
}