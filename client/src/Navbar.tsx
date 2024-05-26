import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        style={{
          background: "#0E131F",
        }}
        className="shadow-md"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center text-white">
              <span className="text-lg font-semibold">Logo</span>
            </div>

            <div className="flex items-center space-x-4 pr-20">
              <Link
                to="/add-user"
                className="text-white bg-blue-500 hover:bg-blue-700 border border-blue-700 rounded px-4 py-2"
              >
                Add User
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
