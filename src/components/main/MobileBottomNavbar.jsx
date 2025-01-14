import { Menu, MessageSquare, PhoneCall } from "lucide-react";
import Container from "./Container";
import { TypographySmall } from "../typography";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import { TypographyP } from "../typography";
import { Link, NavLink } from "react-router-dom";
import { ScrollArea } from "../ui/scroll-area";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useState } from "react";

const sidebarLinks = [
  { title: "Home", to: "/" },
  { title: "Solar", to: "/solar" },
  { title: "Hurricance Protection", to: "/hurricane-protection" },
  { title: "Roofing", to: "/roofing" },
  { title: "HVAC", to: "/hvac" },
  { title: "Plus", to: "/plus" },
  { title: "Financing", to: "/financing" },
  { title: "Warranties", to: "/warranties" },
  {
    title: "Licenses",
    to: "/licenses",
    child: [
      {
        url: "https://www.myfloridalicense.com/LicenseDetail.asp?SID=&id=24727A8A08A99EB417AC068328507ADE",
        title: "CVC License",
      },
      {
        url: "https://www.myfloridalicense.com/LicenseDetail.asp?SID=&id=51806CD00FBB226892B5093469BF0E79",
        title: "CBC License",
      },
      {
        url: "https://www.myfloridalicense.com/LicenseDetail.asp?SID=&id=1AB034F5F597AC56FF858CA5D9853CDF",
        title: "EC License",
      },
    ],
  },
  { title: "The Company", to: "/the-company" },
  { title: "The Team", to: "/the-team" },
  { title: "Locations", to: "/locations" },
  { title: "Reviews", to: "/reviews" },
];

export default function MobileBottomNavbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  const openSheet = () => setIsSheetOpen(true);
  return (
    <div className="fixed bottom-0 z-10 w-full py-3 bg-green-primary">
      <Container>
        <div className="flex items-center justify-center gap-20">
          <NavLink to={"tel:5618150008"}>
            <div className="flex flex-col items-center gap-2 text-white">
              <PhoneCall color="white" />
              <TypographySmall classNames={"text-xs drop-shadow"}>
                CALL US
              </TypographySmall>
            </div>
          </NavLink>
          <Dialog className="stroke-white">
            <DialogTrigger className="flex flex-col items-center gap-2 text-white">
              <MessageSquare color="white" />
              <TypographySmall classNames={"text-xs drop-shadow"}>
                CONTACT US
              </TypographySmall>
            </DialogTrigger>
            <DialogContent className="flex justify-center bg-transparent border-none shadow-none">
              <GetFreePricingFormV2 />
            </DialogContent>
          </Dialog>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger>
              <div className="flex flex-col items-center gap-2 text-white"
                onClick={openSheet}
              >
                <Menu color="white" />
                <TypographySmall classNames={"text-xs drop-shadow"}>
                  MENU
                </TypographySmall>
              </div>
            </SheetTrigger>
            <SheetContent side="left" className="overflow-y-scroll">
              <div className="flex flex-col items-start gap-1 mt-3 mb-16">
                {sidebarLinks.map((link, i) => (
                  <div
                    key={i}
                    className={
                      "py-2 px-4 flex items-center rounded transition-all duration-300 hover:bg-slate-100 w-full text-gray-600"
                    }
                  >
                    {link?.child ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center justify-between w-full">
                          <TypographyP
                            classNames={"font-medium text-sm font-semibold"}
                          >
                            {link.title}
                          </TypographyP>
                          <ChevronDown size={18} color="#64748B" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {link.child.map((item, i) => (
                            <DropdownMenuItem key={i}>
                              <Link to={item.url} onClick={closeSheet}>{item.title}</Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <NavLink key={i} to={link.to} onClick={closeSheet}>
                        <TypographyP
                          classNames={
                            "font-normal text-sm font-semibold text-start"
                          }
                        >
                          {link.title}
                        </TypographyP>
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </div>
  );
}
