import DashboardCarosol from '@/components/MyWedding/Dashboard/DashboardCarosol';
import ActivitySummary from '@/components/MyWedding/Dashboard/ActivitySummary';
import LottieSection from '@/components/MyWedding/Dashboard/LottieSection';
import ProfileInfo from '@/components/MyWedding/Dashboard/ProfileInfo';
const Myshaadi = () => {
  return (
    <div className='bg-[#fff5ed] h-full'>
      <div className='flex gap-x-4'>
        {/* --------------------profile-------------------- */}
        <ProfileInfo />
        {/*  ------------------your activity summarry ----------------------*/}
        <div className='border h-full mt-5'>
          <ActivitySummary />
          {/* -----------------lottie file section------------------------- */}
          <LottieSection />
          {/* ---------------------------carosol------------------------ */}
          <DashboardCarosol />
        </div>

        <div className='border max-w-xs flex justify-center items-center p-4 mt-5'>
          Chatting part will be integrate here
        </div>
      </div>
    </div>
  );
};

export default Myshaadi;
