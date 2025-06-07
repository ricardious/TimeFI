import React from "react";

interface GradientTitleProps {
  preText?: string;
  gradientText?: string;
  postText?: string;
  className?: string;
}

const GradientTitle: React.FC<GradientTitleProps> = ({
  preText,
  gradientText,
  postText,
  className = "",
}) => {
  return (
    <h1
      className={`
        font-title
        text-center
        text-[clamp(2rem,6vw,4.2rem)]
        font-black
        leading-[1.1]
        [word-break:auto-phrase]
        ${className}
      `}
    >
      {preText && (
        <>
          <span className="[&::selection]:text-base-content [&::selection]:bg-blue-700/20 brightness-150 contrast-150">
            {preText}
          </span>
          <br />
        </>
      )}

      {gradientText && (
        <>
          <span className="inline-grid">
            <span
              aria-hidden="true"
              data-text={gradientText}
              className="
                pointer-events-none col-start-1 row-start-1
                bg-[linear-gradient(90deg,var(--color-error)_0%,var(--color-secondary)_9%,var(--color-secondary)_42%,var(--color-primary)_50%,var(--color-accent)_100%)]
                bg-clip-text
                filter blur-xl brightness-200 contrast-200 saturate-200 drop-shadow-lg
                [-webkit-text-fill-color:transparent]
              "
            >
              {gradientText}
            </span>
            <span
              className="
              col-start-1 row-start-1
              bg-[linear-gradient(90deg,var(--color-error)_0%,var(--color-secondary)_9%,var(--color-secondary)_42%,var(--color-primary)_50%,var(--color-accent)_100%)]
              bg-clip-text [-webkit-text-fill-color:transparent]
              [&::selection]:text-base-content [&::selection]:bg-blue-700/20
            "
            >
              {gradientText}
            </span>
          </span>
          <br />
        </>
      )}

      {postText && (
        <span className="[&::selection]:text-base-content [&::selection]:bg-blue-700/20 brightness-150 contrast-150">
          {postText}
        </span>
      )}
    </h1>
  );
};

export default GradientTitle;
