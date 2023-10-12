import { fonts } from "@/app/fonts";
import UserInfoModal from "./UserInfoModal";
const MatchingUserInfo = () => {
  return (
    <div className="flex flex-col gap-5 bg-opacity-40 bg-black p-5 rounded-lg mt-36 md:w-[1000px] w-96">
      <h2
        className={`${fonts.roboto.className} text-slate-300  text-center text-4xl`}
      >
        Reliable Matrimonial and Matchmaking Solutions
      </h2>

      <UserInfoModal />
    </div>
  );
};

export default MatchingUserInfo;
