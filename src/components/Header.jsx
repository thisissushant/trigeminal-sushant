import {} from "react";

const Header = () => {
  return (
    <div className="">
      <div className="border-b border-gray-300 flex">
        <div>
          <h1 className="text-black flex justify-start font-sans font-semibold text-3xl p-2 ">
            Restaurant
          </h1>
          <p className="text-black flex justify-start p-2 mb-3">
            Multi cuisine restaurant situated in the heart of the city
          </p>
        </div>
        <div className="justify-end ml-20">
          <img
            className="rounded-2xl h-20 w-20 p-1  "
            src="https://images.unsplash.com/photo-1531928351158-2f736078e0a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
