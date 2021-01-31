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
                        Software Engineer at DENSO<br />
                        <br />
                        <Link href="https://github.com/ukiyoyo">
                            <a>
                                <span className="icon">
                                    <i className="fab fa-github fa-2x"></i>
                                </span>
                            </a>
                        </Link>
                    </h2>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="subtitle is-4 has-text-weight-bold">
                    Experience
                </div>
                <p>
                    2018.4 - <br />
                    <strong>Software Engineer at DENSO Corp.</strong><br />
                    Development of image recognition algorithms for Advanced Driving Assistant System (ADAS) <br />
                    <br />
                    2016.9 - 2017.3<br />
                    <strong>Part-time engineer at Nagoya University</strong><br />
                    Development of OCR systems to recognize hand-written characters, which is used in the university
                </p>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="subtitle is-4 has-text-weight-bold">
                    Education
                </div>
                <p>
                    2016.4 - 2018.3<br />
                    <strong>Master of Information Science, Nagoya University</strong><br />
                    Research of image recognition, especially in multi-object tracking<br />
                    <br />
                    2012.4 - 2016.3<br />
                    <strong>Bachelor of Engineering, Nagoya University</strong><br />
                    Research of image recognition, especially in object detection and tracking
                </p>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="subtitle is-4 has-text-weight-bold">
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
                <div className="subtitle is-4 has-text-weight-bold">
                    Skills
                </div>
                <p className="content">
                    <strong>Business level</strong><br />
                    <ul>
                        <li>C/C++ (OpenCV)</li>
                        <li>Python (NumPy, SciPy, Pandas, scikit-learn, Keras, etc.)</li>
                        <li>Matlab</li>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>Linux (Ubuntu)</li>
                    </ul>
                    <strong>Hobby level</strong><br />
                    <ul>
                        <li>Rust</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>RDBMS (MySQL, PostgreSQL)</li>
                        <li>AtCoder (Highest: 1141)</li>
                    </ul>
                </p>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="subtitle is-4 has-text-weight-bold">
                    Awards
                </div>
                <p className="content">
                    <ul>
                        <li>
                            <Link href="https://sites.google.com/site/alcon2015prmu/home">
                                <a>最優秀賞（電子情報通信学会 第19回PRMUアルゴリズムコンテスト）</a>
                            </Link>
                        </li>
                        <li>優秀卒業研究発表賞（電子情報通信学会東海支部 平成27年度卒業研究発表会）</li>
                        <li>最優秀賞（電子情報通信学会 第20回PRMUアルゴリズムコンテスト）</li>
                        <li>
                            <Link href="https://sites.google.com/view/alcon2017prmu">
                                <a>優秀賞（電子情報通信学会 第21回PRMUアルゴリズムコンテスト）</a>
                            </Link>
                        </li>
                    </ul>
                </p>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="subtitle is-4 has-text-weight-bold">
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
