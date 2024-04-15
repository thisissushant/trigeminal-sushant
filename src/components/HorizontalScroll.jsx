import {} from "react";

const HorizontalScroll = () => {
  return (
    <div className="">
      <div className="m-4">
        <ul className=" gap-4 mt-5 flex scroll-m-0 overflow-scroll ">
          <button className="bg-gray-200 rounded-lg px-8  ">Baverages</button>
          <button className="bg-gray-200 rounded-lg px-8 ">Starters</button>
          <button className="bg-gray-200 rounded-lg px-8 ">Main Course</button>
          <button className="bg-gray-200 rounded-lg px-8 ">Soups</button>
          <button className="bg-gray-200 rounded-lg px-8 ">Desserts</button>
        </ul>
      </div>
    </div>
  );
};

export default HorizontalScroll;
