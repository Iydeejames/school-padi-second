export default function Footer() {
  return (
    <div className="w-full  text-white bg-[#001D3B] px-[80px] p-4 flex items-center justify-center">
      <div className="flex items-center justify-center w-full gap-4">
        {" "}
        <hr className="w-full border-[#8E959C] border" /> <p className="2xl:w-1/4 md:w-1/2 "> We are powered by</p>{" "}
        <img src="/schoolpadi.svg" alt="school padi image" className="2xl:w-1/6 md:w-1/3" />
        <hr className="w-full border-[#8E959C] border" />{" "}
      </div>
    </div>
  );
}
