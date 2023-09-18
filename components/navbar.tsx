import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="navbar-container mobile-nav">
        <div className="flex items-center mx-auto p-4">
          <Link
            href="/"
            className="flex items-center ml-3 transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src="/logos/shape_logo.svg"
              className="shape-logo"
              alt="Shape Co Logo"
              width={50}
              height={10}
              draggable={false}
            />
          </Link>
          <h1 className="ml-3 roboto-font text-[24px] font-semibold ">
            Shape<span className="text-blue-custom">Co</span>
          </h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
