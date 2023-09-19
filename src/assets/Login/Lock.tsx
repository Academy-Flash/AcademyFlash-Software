export default function Lock(props: LockProps) {
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
          d="M 8.2 11.2 V 8 C 8.2 6.939 8.621 5.922 9.372 5.172 C 10.122 4.421 11.139 4 12.2 4 C 13.261 4 14.278 4.421 15.028 5.172 C 15.779 5.922 16.2 6.939 16.2 8 V 11.2 M 8 20 H 16.4 C 18.057 20 19.4 18.657 19.4 17 V 14.2 C 19.4 12.543 18.057 11.2 16.4 11.2 H 8 C 6.343 11.2 5 12.543 5 14.2 L 5 17 C 5 18.657 6.343 20 8 20 Z"
          stroke="#131214"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
      </svg>
    </div>
  );
}

Lock.defaultProps = {
  className: "",
};

interface LockProps {
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
