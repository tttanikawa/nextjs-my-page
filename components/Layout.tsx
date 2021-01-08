import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'ukiyoyo' }: Props) => (
    <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"></link>
            <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
        </Head>
        <header>
            <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
                <div className="container">
                    {/* <div className="navbar-brand">
                        <a className="navbar-item">
                            ukiyoyo
                        </a>
                    </div> */}

                    <div className="navbar-menu is-active">
                        <div className="navbar-end">
                            <Link href="/">
                                <a className="navbar-item">
                                    <span className="icon-text">
                                        <span className="icon">
                                            <i className="fas fa-home" data-fa-transform="down-1"></i>
                                        </span>
                                        <span>Home</span>
                                    </span>
                                </a>
                            </Link>

                            <Link href="/posts">
                                <a className="navbar-item">
                                    <span className="icon-text">
                                        <span className="icon">
                                            <i className="fas fa-sticky-note" data-fa-transform="down-1"></i>
                                        </span>
                                        <span>Posts</span>
                                    </span>
                                </a>
                            </Link>

                            {/* <Link href="/users">
                                <a className="navbar-item">
                                    Users List
                            </a>
                            </Link>

                            <Link href="/api/users">
                                <a className="navbar-item">
                                    api
                            </a>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        {children}
    </div>
)

export default Layout
