import type { ProjectStatus } from "../../content/projects";

const labels: Record<ProjectStatus, string> = {
  finished: "[Finished]",
  wip: "[WIP]",
};

export default function StatusStamp({ status }: { status: ProjectStatus }) {
  return (
    <span className={`status-stamp status-${status}`}>{labels[status]}</span>
  );
}
