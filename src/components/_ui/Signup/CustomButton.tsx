import UtilitiesCustomButtonStyle from "./ThirdPartyLoginButton";

export default function CustomButton(props: CustomButtonProps) {
  return (
    <>
      <div className={`inline-flex items-start ${props.className}`}>
        {props.type === "FACEBOOK_TYPE" && (
          <UtilitiesCustomButtonStyle
            className="h-full"
            type="TYPE2"
            text="Sign in with Facebook"
           />
        )}
        {props.type === "APPLE_TYPE" && (
          <UtilitiesCustomButtonStyle
            className="h-full"
            type="TYPE"
            text="Sign in with Apple"
           />
        )}
        {props.type === "GOOGLE_TYPE" && (
          <UtilitiesCustomButtonStyle
            className="h-full"
            type="TYPE1"
            text="Sign in with Google"
           />
        )}
      </div>
    </>
  );
}

CustomButton.defaultProps = {
  className: "",
  type: "APPLE_TYPE",
};

interface CustomButtonProps {
  className: string;
  type: "APPLE_TYPE" | "GOOGLE_TYPE" | "FACEBOOK_TYPE";
}
