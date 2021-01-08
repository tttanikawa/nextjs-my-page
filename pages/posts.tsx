import Link from 'next/link'
import Layout from '../components/Layout'
import Date from "../components/Date"
import { GetStaticProps } from "next"
import { getSortedPostsData } from "../lib/post"

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}

const PostsListPage = (props: { allPostsData: { date: string, title: string, id: string }[] }) => (
    <Layout title="Posts">
        <section className="section">
            <div className="container px-6">
                <div className="title is-3 has-text-weight-bold">
                    Posts
                </div>
                <p>
                    <ul className="content">
                        {props.allPostsData.map(({ id, date, title }) => (
                            <li key={id}>
                                <Link href={`posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                <small>
                                    <Date dateString={date} />
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
