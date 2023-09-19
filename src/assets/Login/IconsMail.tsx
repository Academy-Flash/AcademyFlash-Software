export default function IconsMail(props: IconsMailProps) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 4.583 8 C 4.583 8 10 12 12 12 C 14 12 19.417 8 19.417 8 M 4 15 C 4 16.657 5.343 18 7 18 H 17 C 18.657 18 20 16.657 20 15 V 9 C 20 7.343 18.657 6 17 6 H 7 C 5.343 6 4 7.343 4 9 L 4 15 Z"
          stroke="#131214"
          strokeWidth="1.5"
          strokeLinecap="round"
         />
      </svg>
    </div>
  );
}

IconsMail.defaultProps = {
  className: "",
};

interface IconsMailProps {
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
