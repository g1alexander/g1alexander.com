import { mdiGit, mdiLinkVariant } from "@mdi/js";
import Icon from "@mdi/react";

export function SpanMe({ data }) {
  const { date, site, repo } = data;
  return (
    <span className="text-blue-500 dark:text-dark-blue mr-5 flex mb-5">
      {date && new Date(date).toDateString("es-ES")}
      {site.name && (
        <Icon
          path={mdiLinkVariant}
          size={1}
          className="text-blue-500 dark:text-dark-blue"
        />
      )}
      {site && (
        <a
          href={site.url}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          {site.name}
        </a>
      )}
      {repo.name && (
        <Icon
          path={mdiGit}
          size={1}
          className="text-blue-500 dark:text-dark-blue"
        />
      )}
      {repo && (
        <a
          href={repo.url}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          {repo.name}
        </a>
      )}
    </span>
  );
}
