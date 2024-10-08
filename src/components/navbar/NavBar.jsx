import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" w-full h-20  text-black flex justify-around items-center">
      <span className="flex gap-2 items-center">
      <img src="https://media.licdn.com/dms/image/v2/D5635AQHKRsUvxNYZuA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727597024594?e=1728748800&v=beta&t=iZ6iLmMsdkqfJ1I_5R269UFhhvfPYIQDR2eIlEaAAvg" alt="profiel" id="profile" height={'40px'} width={'40px'} className="rounded-full" />
      <label htmlFor="profile">| Amir Jamn Mondal</label>
      </span>
      <ul className=" w-1/2 flex flex-row justify-evenly text-2xl  border-red-500">
        <Link to={"/portfolio-site/"}>Home</Link>
        <Link to={"/portfolio-site/projects"}>Projects</Link>
        <Link to={"/portfolio-site/updates"}>Updates</Link>
        <Link to={"/portfolio-site/contact"} className="bg-green-300 px-2 py-1 rounded-md">Contact</Link>
      </ul>
    </div>
  );
};

export default NavBar;
