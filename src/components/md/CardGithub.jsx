export function CardGithub({ data }) {
  const { username, repo } = data;

  return (
    <div className="repo-card my-5" data-repo={`${username}/${repo}`}></div>
  );
}
