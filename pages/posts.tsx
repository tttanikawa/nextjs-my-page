import Link from 'next/link'
import Layout from '../components/Layout'
import Date from "../components/Date"
import { GetStaticProps } from "next"
import { getSortedPostsData } from "../lib/post"
import { PostData } from '../interfaces/post'

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}

const PostsListPage = (props: { allPostsData: PostData[] }) => (
    <Layout title="Posts">
        <section className="section">
            <div className="container is-max-desktop">
                <div className="title is-3 has-text-weight-bold">
                    Posts
                </div>
                <br></br>
                <p>
                    <ul className="content is-medium">
                        {props.allPostsData.map(data => (
                            <li key={data.id}>
                                <strong>
                                    <Link href={`posts/${data.id}`}>
                                        <a>{data.title}</a>
                                    </Link>
                                </strong>
                                <br />
                                <small>
                                    <Date dateString={data.date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </p>
            </div>
        </section>
    </Layout>
)

export default PostsListPage
