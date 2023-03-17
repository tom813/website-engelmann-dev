import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const getStaticPaths = async () => {
    var res = await fetch(`${process.env.ENV_HOST}/api/seoposts/urls`);
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
    /* console.log(context); */
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

export default urmom;