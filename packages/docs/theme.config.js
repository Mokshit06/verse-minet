import { useRouter } from "next/router";

const title = "Evolving the Metaverse";

export default {
  projectLink: "https://github.com/mokshit06/verse-minet",
  docsRepositoryBase: "https://github.com/mokshit06/verse-minet",
  titleSuffix: " – Verse",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  logo: () => {
    return (
      <span
        className="mx-2 font-extrabold hidden md:inline select-none"
        title={"Verse: " + title}
      >
        Verse
      </span>
    );
  },
  head: ({ title, meta }) => {
    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={meta.description || "Evolving the Metaverse"}
        />
        <meta
          name="og:description"
          content={meta.description || "Evolving the Metaverse"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mokshit06" />
        <meta
          name="og:title"
          content={title ? title + " – Verse" : "Verse: Evolving the metaverse"}
        />
        <meta name="apple-mobile-web-app-title" content="Verse" />
      </>
    );
  },
  footerEditLink: () => {
    return "Edit this page on GitHub →";
  },
  footerText: () => {
    return `MIT ${new Date().getFullYear()} © Mokshit Jain.`;
  },
};
