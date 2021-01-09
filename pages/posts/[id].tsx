import Layout from "../../components/Layout";
import { getAllPostsIds, getPostData } from "../../lib/post";
import Date from "../../components/Date";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (params != undefined) {
        const postData = await getPostData(params.id as string);
        return {
            props: {
                postData
            }
        }
    }
    else {
        return {
            props: {}
        }
    }
}

const PostsPage = (props: {
    postData: {
        id: string, contentHtml: string, date: string, title: string
    }
}) => (
    <Layout title={props.postData.title}>
        <section className="section">
            <div className="container is-max-desktop">
                <h1 className="title is-3 has-text-weight-bold">
                    {props.postData.title}
                </h1>
                <div className="subtitle is-5">
                    <Date dateString={props.postData.date} />
                </div>
                <br></br>
                <div className="content" dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
            </div>
        </section>
    </Layout>
)

export default PostsPage