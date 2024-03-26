import { BellIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  return (
    <nav className=" bg-white border-b border-gray-200 flex items-center justify-between px-4 py-2 z-10">
      <a href="/" className="flex items-center">
        <img
          src="https://shypbuddy.in/images/logo.png"
          className="h-8"
          alt="Flowbite Logo"
        />
      </a>

      <div className="flex items-center space-x-3">
        <BellIcon className="h-6 w-6 text-gray-600" />
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User Avatar"
        />
      </div>
    </nav>
  );
}