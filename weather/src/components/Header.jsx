import logo from "../assets/logo.jpg";
export default function Header() {
  return (
    <div className="mt-64 ">
      <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-lg flex items-center">
        <div className="shrink-0">
          <img className="h-16 w-16" src={logo} alt="React Logo" />
        </div>
        <div className="text-right">
          <h1 className=" subpixel-antialiased font-mono w-full text-2xl  p-4 space-x-2 font-extrabold text-black">
            Weather Data
          </h1>
          <div>
            <p className=" subpixel-antialiased w-full text-slate-500 ml-2 text-xl  p-4 ">
              Get World's Weather, Instant!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
