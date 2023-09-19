import IconsMail from "@/assets/Login/IconsMail";
import Lock from "@/assets/Login/Lock";
import CustomButton from "../components/_ui/Signup/CustomButton";

export default function Signup(props: SignupProps) {
  return (
    <div
      className={`h-screen font-inter font-[600] flex justify-center items-center m-auto ${props.className}`}
      style={props.style}
    >
      <div
        className="bg-[#FCEED5] flex w-full justify-center"
      >
        <form
          className="rounded-[40px] bg-[#9E9E9E] drop-shadow-lg p-[45px] w-full flex gap-2 flex-col items-center pt-5"
        >
          <p
            className="[flex-grow:1] w-[140px] text-base text-center text-white"
          >
            Its your first time?
            <br />
            Just Sign up!
          </p>
          <div
            className="rounded-[20px] bg-[#D9D9D9] h-[35px] w-[210px] pr-[127px] py-[5px] text-left text-black flex gap-1 items-center justify-between pl-1.5 mt-2"
          >
            <IconsMail className="w-6 h-6" />
            <input
              type="email"
              placeholder="e-mail"
              className="[flex-grow:1] h-[19px] w-[49px] text-base bg-transparent border-none"
            />
          </div>
          <div
            className="rounded-[20px] bg-[#D9D9D9] h-[35px] w-[210px] py-[5px] text-left text-black flex gap-1 items-center justify-between pl-1.5 pr-9 mt-2"
          >
            <Lock className="w-6 h-6" />
            <input
              type="password"
              placeholder="password"
              className="[flex-grow:1] h-[19px] w-[140px] text-base bg-transparent border-none"
            />
          </div>
          <div
            className="rounded-[20px] bg-[#D9D9D9] h-[35px] w-[210px] py-[5px] text-left text-black flex gap-1 items-center justify-between pl-1.5 pr-9 mt-2"
          >
            <Lock className="w-6 h-6" />
            <input
              type="password"
              placeholder="confirm password"
              className="[flex-grow:1] h-[19px] w-[140px] text-base bg-transparent border-none"
            />
          </div>
          <button
            type="submit"
            className="w-[210px] h-[35px] pr-[26px] flex items-center relative text-black text-left"
          >
            {/* <Rectangle4182 className="inset-[0] absolute" /> */}
            <div
              className="gap-9 flex justify-between items-center relative h-full w-full"
            >
              <div
                className="[flex-grow:1] px-[21px] h-full flex justify-center items-center relative py-2"
              >
                {/* <Rectangle4183 className="inset-[0] absolute" /> */}
                <p className="h-[19px] w-[63px] text-base relative">
                  Confirm
                </p>
              </div>
              <p className="h-[19px] w-[43px] text-base">Login</p>
            </div>
          </button>
          <CustomButton
            className="mt-4 w-[216px] h-[27px]"
            type="APPLE_TYPE"
          />
          <CustomButton
            className="mt-4 w-[216px] h-[27px]"
            type="GOOGLE_TYPE"
          />
          <CustomButton
            className="mt-[15px] w-[216px] h-[27px]"
            type="FACEBOOK_TYPE"
          />
        </form>
      </div>
    </div>
  );
}

Signup.defaultProps = {
  className: "",
  style: {
    width: "80%",
  },
};

interface SignupProps {
  className: string;
  style: Object;
}
