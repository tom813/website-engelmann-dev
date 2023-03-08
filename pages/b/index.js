import excuteQuery from "../../lib/db";

export const GetStaticProps = async () => {
    const res = await fetch("http://localhost:3000/api/seoposts");
    const data = await res.json();

    return {
        props: { posts: data}
    }
}

const Posts = ({posts}) => {
    return(
        <div>
            {/* {posts && (posts.map((post) => (
                <div key={post}>
                    {post.title}
                    {console.log(post)}
                    dfdfgd
                </div>
            )))} */}
            <h1>this is the blog overview site</h1>
            
        </div>
    )
}

export default Posts