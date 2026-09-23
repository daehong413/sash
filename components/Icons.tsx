export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function WindowMark() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="30" height="30" rx="7" fill="currentColor" />
      <path
        d="M11 10h14v16H11zM18 10v16M11 18h14"
        stroke="white"
        strokeWidth="1.6"
      />
      <path d="M15 15v2m6-2v2" stroke="white" strokeWidth="1.4" />
    </svg>
  );
}
export function WindowIllustration({ variant = 0 }: { variant?: number }) {
  return (
    <div
      className={`window-illustration window-variant-${variant}`}
      aria-hidden="true"
    >
      <div className="window-shadow" />
      <div className="window-frame">
        <div className="window-pane" />
        <div className="window-pane" />
        <i className="window-handle" />
        {variant === 2 && <div className="window-mesh" />}
      </div>
      <div className="window-sill" />
    </div>
  );
}
