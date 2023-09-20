import Wrapper from "@/assets/Login/AppleIcon";
import Wrapper1 from "@/assets/Login/Wrapper1";
import Wrapper2 from "@/assets/Login/Wrapper2";

export default function ThirdPartyLoginButton(
  props: ThirdPartyLoginButtonProps
) {
  return (
    <>
      <div
        className={`font-inter font-[600] text-black text-left ${props.className}`}
      >
        <div
          className="[flex-grow:1] h-[30px] drop-shadow-lg rounded-[10px] pr-3 bg-white flex justify-center items-center"
        >
          <div
            className="w-[30px] h-[30px] rounded-[1px] flex justify-center items-center p-1.5"
          >
            {props.type === "TYPE" && (
              <Wrapper className="w-[18px] h-[18px]" />
            )}
            {props.type === "TYPE1" && (
              <Wrapper1 className="w-[18px] h-[18px]" />
            )}
            {props.type === "TYPE2" && (
              <Wrapper2 className="w-[18px] h-[18px]" />
            )}
          </div>
          <p
            className={`transition-all text-base ${
              props.type === "TYPE"
                ? "utilities-custom-button-style-continue-with-apple-0-type"
                : ""
            } ${
              props.type === "TYPE1"
                ? "utilities-custom-button-style-continue-with-apple-1-type"
                : ""
            } ${
              props.type === "TYPE2"
                ? "utilities-custom-button-style-continue-with-apple-2-type"
                : ""
            } ${props.type === "TYPE" ? "w-[140px]" : ""} ${
              props.type === "TYPE1" ? "w-[149px]" : ""
            } ${props.type === "TYPE2" ? "w-[170px]" : ""}`}
          >
            {props.text}
          </p>
        </div>
      </div>
    </>
  );
}

ThirdPartyLoginButton.defaultProps = {
  className: "",
  type: "TYPE",
  text: "Sign in with Apple",
};

interface ThirdPartyLoginButtonProps {
  className: string;
  type: "TYPE" | "TYPE1" | "TYPE2";
  text: string;
}
