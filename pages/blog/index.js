/* import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
    
    const res = await fetch(`${process.env.ENV_HOST}/api/seoposts/`);
    const data = await res.json(); 

    return {
        props: {postData: data}
    }

}

const Posts = ({postData}) => {
    
    return(
        <div>
            <Header />
            <div className="content-wrapper">
                <h1>Blog Artikel</h1>
                {postData && postData.map((post) => (
                    <div key={post.url} className="blog-cart-container">
                        <p>
                            {post.title}
                        </p>
                        <Link href={"/blog/" + post.url}>
                            Zum Artikel
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Posts */
const test = () => {
    return(
        <div>
        
        </div>
    )
}

export default test;