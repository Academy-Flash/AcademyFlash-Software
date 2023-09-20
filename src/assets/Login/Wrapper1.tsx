export default function Wrapper1(props: Wrapper1Props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 15.98 9.153 C 15.98 8.675 15.937 8.215 15.857 7.773 H 9.5 V 10.384 H 13.133 C 12.976 11.228 12.501 11.942 11.786 12.421 V 14.115 H 13.967 C 15.244 12.94 15.98 11.209 15.98 9.153 Z"
          fill="#4285F4"
         />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 9.5 15.75 C 11.323 15.75 12.851 15.146 13.967 14.115 L 11.786 12.421 C 11.181 12.826 10.408 13.065 9.5 13.065 C 7.742 13.065 6.254 11.878 5.723 10.283 H 3.468 V 12.031 C 4.579 14.237 6.861 15.75 9.5 15.75 Z"
          fill="#34A853"
         />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 5.723 10.283 C 5.588 9.877 5.511 9.445 5.511 9 C 5.511 8.555 5.588 8.122 5.723 7.717 V 5.969 H 3.468 C 3.011 6.88 2.75 7.911 2.75 9 C 2.75 10.089 3.011 11.12 3.468 12.031 L 5.723 10.283 Z"
          fill="#FBBC05"
         />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 9.5 4.935 C 10.491 4.935 11.381 5.275 12.08 5.944 L 14.016 4.008 C 12.847 2.919 11.32 2.25 9.5 2.25 C 6.861 2.25 4.579 3.763 3.468 5.969 L 5.723 7.718 C 6.254 6.122 7.742 4.935 9.5 4.935 Z"
          fill="#EA4335"
         />
      </svg>
    </div>
  );
}

Wrapper1.defaultProps = {
  className: "",
};

interface Wrapper1Props {
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
