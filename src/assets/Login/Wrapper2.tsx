export default function Wrapper2(props: Wrapper2Props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_161_545)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 18 9.053 C 18 4.053 13.971 0 9 0 C 4.029 0 0 4.053 0 9.053 C 0 13.572 3.291 17.317 7.594 17.996 V 11.67 H 5.309 V 9.053 H 7.594 V 7.059 C 7.594 4.79 8.937 3.536 10.993 3.536 C 11.978 3.536 13.008 3.713 13.008 3.713 V 5.941 H 11.873 C 10.755 5.941 10.406 6.639 10.406 7.355 V 9.053 H 12.902 L 12.503 11.67 H 10.406 V 17.996 C 14.709 17.317 18 13.572 18 9.053 Z"
            fill="#1877F2"
           />
        </g>
        <defs>
          <clipPath id="clip0_161_545">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

Wrapper2.defaultProps = {
  className: "",
};

interface Wrapper2Props {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
