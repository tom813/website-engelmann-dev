import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export const getStaticProps = async () => {
    
    /* console.log(context); */
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
                        {post.title}
                        
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Posts