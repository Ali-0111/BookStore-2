import {HiUser} from 'react-icons/hi';

const ProfileIcon = () => {
  return (
    <button className="profile-wrapper cursor-pointer">
      <span className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] border border-white-three rounded-full p-1 flex justify-center items-center"
     >
        <HiUser className="w-[80%] h-[90%]  bg-white text-azure"/>
      </span>
    </button>
  );
}

export default ProfileIcon;