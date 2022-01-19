import Script from "next/script";

export function CardGithub({ data }) {
  const { username, repo } = data;

  return (
    <>
      <Script
        src="https://g1alexander.github.io/repo-card/repo-card.js"
        strategy="beforeInteractive"
      />

      <div className="repo-card my-5" data-repo={`${username}/${repo}`}></div>
    </>
  );
}
