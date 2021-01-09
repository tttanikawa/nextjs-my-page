import { AppProps } from "next/app";
import 'highlight.js/styles/tomorrow-night.css';

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps}></Component>
}

export default App;
