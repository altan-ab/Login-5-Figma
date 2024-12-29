const App = () => {
  return (
    <div className="relative min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="bg-[#095F59] text-white flex justify-between items-center px-4 py-4 shadow-md">
        <h3 className="text-3xl font-bold tracking-widest">SHEY</h3>
        <ul className="flex space-x-8 text-lg">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Services</li>
          <li className="hover:underline cursor-pointer">Contact us</li>
        </ul>
      </nav>

      {/* Main div container */}
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        {/* Ellipse SVG */}
        <img
          src="/Ellipse-1.svg"
          alt="Ellipse-1"
          className="absolute right-0 bottom-10 z-10"
        />
        <img
          src="/Ellipse-2.svg"
          alt="Ellipse-2"
          className="absolute left-40 z-10"
        />

        {/* Rectangle-12 */}
        <img
          src="/Rectangle-12.svg"
          alt="Rectangle Background"
          className="absolute bottom-0 left-0 w-full z-0"
        />

        {/* Login Card */}
        <div className="bg-white shadow-2xl rounded-xl w-full max-w-md p-10 text-center z-20 opacity-90">
          <h1 className="text-[#095F59] text-4xl text-left font-semibold mb-8">
            LOGIN
          </h1>
          <form className="space-y-4">
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#095F59]"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#095F59]"
            />
            <button
              type="submit"
              id="submit"
              className="w-1/2 bg-[#095F59] text-white py-2 rounded-lg hover:bg-[#064D48] transition"
            >
              LOGIN
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-600">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center space-x-10">
            <img src="/image-1.png" alt="Google" className="cursor-pointer" />
            <img src="/image-2.png" alt="Facebook" className="cursor-pointer" />
          </div>

          <p className="text-gray-600 mt-6">
            Not yet registered?
            <a href="#" className="text-[#095F59] hover:underline">
              Click here to sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
export default App
