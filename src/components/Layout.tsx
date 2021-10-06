import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <img src={`/images/logo-somos.png`} alt="Logo Somos Diversidade" />
        <div className="pesquisar">
          <label htmlFor="pesquisar" className="label-pesquisar"><img src="images/icon-search.svg" /></label>
          <input id="pesquisar" className="input-pesquisar" type="text" placeholder="Pesquisar" />
        </div>
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          .root {
            display: block;
            padding: 20px;
            box-sizing: border-box;
            height: 100%;
          }
          main {
            display: flex;
            min-height: 100%;
          }
          nav {
            text-align: center;
          }
          .label-pesquisar img {
            width: 20px;
            margin-right: 12px;
          }
          .pesquisar {
            background: #FFFFFF;
            box-shadow: 0px 0.1px 0.3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            width: 100%;
            max-width: 455px;
            padding: 12px;
            display: flex;
            align-items: center;
          }
          .input-pesquisar {
            width: calc(100% - 20px);
            border: none;
            outline: none;
            background: transparent;
            font-size: 16px;
            line-height: 24px;
            display: inline-block;
          }
          @media (min-width: 769px) {
            .root {
              display: flex;
              flex: 1 0 auto;
            }
            main {
              flex: 1 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
}
