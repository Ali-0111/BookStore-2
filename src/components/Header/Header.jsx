import NavItem from '@/components/Navs/NavItem.jsx';
import ProfileIcon from '@/components/Header/ProfileIcon.jsx';

const Header = () => (
  <header className="main-head max-xs:px-2 border py-5">
    <div className="container mx-auto flex justify-between items-center">
      <div className='flex-1 flex justify-start items-center flex-wrap'>
        <h1 className='text-style-3 max-xs:w-full'>Bookstore CMS</h1>
        <nav className='navs w-[20%] max-xs:w-full'>
          <ul className="links flex justify-between max-sm:justify-start items-center space-x-[5%]">
            <NavItem link="/" label="BOOKS" />
            <NavItem link="/categories" label="CATEGORIES" />
          </ul>  
        </nav>
      </div>  
      <ProfileIcon />
    </div>
  </header>  
);

export default Header;