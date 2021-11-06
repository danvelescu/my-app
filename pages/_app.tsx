import type { AppProps } from "next/app";
import { MessageBox } from "./components/MessageBox";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <MessageBox title="test title1" message="message1" />
    </div>
  );
}

export default MyApp;
