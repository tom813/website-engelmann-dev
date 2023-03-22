/* import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.ENV_HOST}/api/seoposts/urls`,
                            {
                                method: "GET",
                                headers: {
                                    "User-Agent":
                                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", 
                                    Accept: "application/json; charset=UTF-8",
                                }
                            }

    );
    console.log(res)
    const data = await res.json();
    

    const paths = data.map(post => {
        var url = post.url.toString();
        
        return{
            params: {
                post: url
            }
        }
    })

    return{
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const url = context.params.post;
    
    const res = await fetch(`${process.env.ENV_HOST}/api/seoposts/` + url);
    const data = await res.json(); 

    return {
        props: {postData: data[0]}
    }

}

const urmom = ({postData}) => {
    console.log(postData);

    return(
        <div>
            <Head>
                <title>
                    {postData.title}
                </title>
                <meta name="description" content={postData.description} />
            </Head>
            <Header />
            <div className="content-wrapper" dangerouslySetInnerHTML={{ __html: postData.html}}>
                
            </div>
            <Footer />
        </div>
    )
}

export default urmom; */
const test = () => {
    return(
        <div>
        
        </div>
    )
}

export default test;