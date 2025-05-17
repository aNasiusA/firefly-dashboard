import {
  AlignJustify,
  Bell,
  Maximize,
  Minimize,
  Search,
  Sun,
} from "lucide-react";

import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow-sm h-15 bg-white">
      {/* SEARCH BAR */}

      <div className="gap-4 flex items-center justify-between">
        <AlignJustify size={20} />
        <div className="hidden md:flex items-center text-xs px-2">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="w-[200px] p-2 bg-transparent outline-none focus-visible:ring-0 focus:outline-none focus:border-b-2 focus:border-b-gray-500"
          />
        </div>
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <Minimize size={20} className="hidden" />
        <Maximize size={20} />
        <Sun size={20} />
        <Bell size={20} />
        <Image
          src="/images/dan.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
