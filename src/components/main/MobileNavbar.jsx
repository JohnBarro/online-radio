import { PhoneCall } from "lucide-react";
import ghiLogo from "../../assets/images/ghi-logo-white-new.png";
import { Button } from "../ui/button";
import { Link, NavLink } from "react-router-dom";

import { Icon } from "@iconify/react";
export default function MobileNavbar() {
  return (
    <div className="bg-green-primary h-[80px] px-3">
      <div className="flex h-full justify-between items-center">
        <Link to={"/"}>
          <img src={ghiLogo} alt="GHI+ Logo" className="max-h-[50px]" />
        </Link>
        <NavLink to={"tel:5618150008"}>
          <Button variant="link" className="flex gap-2 text-white">
          <Icon icon="carbon:phone-filled" style={{ fontSize: "20px" }} />
            561-815-008
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
