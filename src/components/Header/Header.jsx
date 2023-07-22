import NavItem from '@/components/Navs/NavItem.jsx';
import ProfileIcon from '@/components/Header/ProfileIcon.jsx';

const Header = () => (
  <header className="main-head px-2 border py-5">
    <div className="container mx-auto flex justify-between items-center">
      <div className='flex-1 flex justify-start items-center flex-wrap sm:space-x-[5%]'>
        <h1 className='text-style-3 w-full sm:w-auto'>Bookstore CMS</h1>
        <nav className='navs w-full sm:w-[20%] '>
          <ul className="links flex justify-start sm:justify-between items-center space-x-[5%]">
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