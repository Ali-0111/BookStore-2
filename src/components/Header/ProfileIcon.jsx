import {HiUser} from 'react-icons/hi';

const ProfileIcon = () => {
  return (
    <div className="profile-wrapper">
      <span className="w-[50px] max-xs:w-[40px] max-xs:h-[40px] h-[50px] border border-white-three rounded-full p-1 flex justify-center items-center"
     >
        <HiUser className="w-[80%] h-[90%]  bg-white text-azure"/>
      </span>
    </div>
  );
}

export default ProfileIcon;