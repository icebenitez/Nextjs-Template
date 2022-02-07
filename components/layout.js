import Head from "next/head";

export default function Layout({children}){
    return(
        <div>
            <Head>
                <title>NextJs Template</title>
            </Head>
            {children}
        </div>
    )
}