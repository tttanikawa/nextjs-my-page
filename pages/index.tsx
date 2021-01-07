import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
    <Layout title="ukiyoyo">
        <section className="hero is-info is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-2">
                        <strong>ukiyoyo</strong>
                    </h1>
                    <h2 className="subtitle">
                        Software Engineer at DENSO
                    </h2>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="subtitle is-3 has-text-weight-bold">
                    Experience
                </div>
                <p>
                    2018.4 - <br />
                    <strong>Software Engineer at DENSO Corp.</strong><br />
                    Development of image recognition algorithms for Advanced Driving Assistant System (ADAS) <br />
                    <div className="tags">
                        <span className="tag">C/C++</span>
                        <span className="tag">Python</span>
                        <span className="tag">Matlab</span>
                        <span className="tag">Docker</span>
                        <span className="tag">Windows</span>
                    </div>

                    2016.9 - 2017.3<br />
                    <strong>Part-time engineer at Nagoya University</strong><br />
                    Development of OCR systems to recognize hand-written characters, which is used in the university<br />
                    <div className="tags">
                        <span className="tag">Python</span>
                        <span className="tag">Linux</span>
                        <span className="tag">macOS</span>
                    </div>
                </p>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="subtitle is-3 has-text-weight-bold">
                    Education
                </div>
                <p>
                    2016.4 - 2018.3<br />
                    <strong>Master of Information Science, Nagoya University</strong><br />
                    Research of image recognition, especially in multi-object tracking<br />
                    <div className="tags">
                        <span className="tag">Python</span>
                        <span className="tag">Matlab</span>
                        <span className="tag">Linux</span>
                        <span className="tag">macOS</span>
                    </div>

                    2012.4 - 2016.3<br />
                    <strong>Bachelor of Engineering, Nagoya University</strong><br />
                    Research of image recognition, especially in object detection and tracking<br />
                    <div className="tags">
                        <span className="tag">C/C++</span>
                        <span className="tag">Linux</span>
                        <span className="tag">Windows</span>
                    </div>
                </p>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="subtitle is-3 has-text-weight-bold">
                    Publications
                </div>
                <p>
                    <Link href="https://www.murase.m.is.nagoya-u.ac.jp/~tanikawau/publication.html">
                        <a>Research papers</a>
                    </Link>
                </p>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="subtitle is-3 has-text-weight-bold">
                    Links
                </div>
                <p>
                    <Link href="https://github.com/ukiyoyo">
                        <a>GitHub</a>
                    </Link>
                    <br />
                    <Link href="https://atcoder.jp/users/ukiyo">
                        <a>AtCoder</a>
                    </Link>
                </p>
            </div>
        </section>
    </Layout>
)

export default IndexPage
