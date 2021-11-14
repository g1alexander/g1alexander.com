import { mdiLinkedin, mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";

export function Contact() {
  return (
    <div className="fixed bottom-10 right-6">
      <a href="" target="_blank" rel="noopener">
        <Icon
          path={mdiLinkedin}
          size={1.7}
          className="text-green-800 dark:text-green-300 mb-3"
        />
      </a>
      <a href="" target="_blank" rel="noopener">
        <Icon
          path={mdiGithub}
          size={1.7}
          className="text-green-800 dark:text-green-300"
        />
      </a>
    </div>
  );
}
