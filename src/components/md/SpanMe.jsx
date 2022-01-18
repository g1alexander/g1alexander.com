import { mdiLinkVariant } from "@mdi/js";
import Icon from "@mdi/react";

export function SpanMe({ data }) {
  const { date, site } = data;
  return (
    <span className="text-blue-500 mr-5 flex mb-5">
      {date && new Date(date).toDateString("es-ES")}
      {site.name && (
        <Icon path={mdiLinkVariant} size={1} className="text-blue-500" />
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
    </span>
  );
}
