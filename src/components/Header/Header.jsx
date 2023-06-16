import NavItem from '@/components/Navs/NavItem.jsx';
import ProfileIcon from '@/components/Header/ProfileIcon.jsx';

const Header = () => (
  <header className="main-head border py-5">
    <div className="container mx-auto flex justify-between items-center">
      <div className='flex-1 flex justify-start items-center space-x-[5%]'>
        <h1 className='text-style-3'>Bookstore CMS</h1>
        <nav className='navs w-[20%]'>
          <ul className="links flex justify-between items-center space-x-[5%]">
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