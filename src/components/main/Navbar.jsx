import { Link, NavLink } from "react-router-dom";
import ghiLogo from "../../assets/images/ghi-logo-white-new.png";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { TypographyP } from "../typography";
import Container from "./Container";
import { Icon } from "@iconify/react";

const upperNavLinks = [
  {
    title: "Facebook",
    icon: <Icon icon="basil:facebook-solid" style={{ fontSize: "24px" }} />,
    variant: "link",
    to: "https://www.facebook.com/GreenHomeImprovementsPlus/",
  },
  {
    title: "561-815-0008",
    icon: <Icon icon="carbon:phone-filled" style={{ fontSize: "20px" }} />,
    variant: "link",
    to: "tel:561-815-0008",
  },
  { title: "CHAMPIONS", variant: "wide-green", size: "wide", to: "/champions" },
  { title: "CONTESTS", variant: "wide-yellow", size: "wide", to: "/contests" },
  { title: "AUCTIONS", variant: "wide-green", size: "wide", to: "/auctions" },
  {
    title: "INVENTORY",
    variant: "wide-yellow",
    size: "wide",
    to: "/inventory",
  },
];

const bottomNavLinks = [
  {
    title: 'Home Improvements',
    to: '/',
    child: [
      { title: "Solar", url: "/solar" },
      { title: "Hurricane Protection", url: "/hurricane-protection" },
      { title: "Roofing", url: "/roofing" },
      { title: "HVAC", url: "/hvac" },
      { title: "Kitchen and Baths", url: "/kitchen-and-baths" },
    ]
  },
  { title: "Plus", to: "/plus" },
  { title: "Financing", to: "/financing" },
  { title: "Warranties", to: "/warranties" },
  {
    title: "Licenses",
    to: "/licenses",
    child: [
      { 
        url: "https://www.myfloridalicense.com/LicenseDetail.asp?SID=&id=24727A8A08A99EB417AC068328507ADE", 
        title: "CVC License" 
      },
      { 
        url: "https://www.myfloridalicense.com/LicenseDetail.asp?SID=&id=51806CD00FBB226892B5093469BF0E79", 
        title: "CBC License" 
      },
      { 
        url: "https://www.myfloridalicense.com/LicenseDetail.asp?SID=&id=1AB034F5F597AC56FF858CA5D9853CDF", 
        title: "EC License" 
      },
    ],
  },
  { title: "Company", to: "/the-company" },
  { title: "Team", to: "/the-team" },
  { title: "Locations", to: "/locations" },
  { title: "Reviews", to: "/reviews" },
  { title: "Home Services", to: "/home-services" },
  { title: "HG Homes", to: "https://test-hghomes.netlify.app/", external: true },
  { title: "Home Tech", to: "https://test-hgdigital.netlify.app/", external: true },
  //{ title: "Green Permits", to: "/green-permits" },
];

export default function Navbar() {
  return (
    <div className="absolute z-10 w-full pb-2 pt-9">
      <Container className={`max-w-8xl`}>
        <div className="flex items-center justify-between">
          <NavLink to={"/"}>
            <img src={ghiLogo} alt="" className="max-h-[80px] w-auto" />
          </NavLink>
          <div className="flex flex-wrap items-center justify-end gap-4">
            {upperNavLinks.map((link, i) => (
              <Button
                key={i}
                variant={link.variant}
                className={`${link.variant === "link" ? "text-white hover:no-underline px-0" : "px-6"} text-base`}
                size={link.size}
                asChild
              >
                <NavLink
                  to={link.to}
                  target={link.target || "_self"}
                  rel={link.rel || ""}
                  className={"flex items-center gap-2 text-shadow"}
                >
                  {link.icon}
                  <TypographyP classNames={"text-lg"}>{link.title}</TypographyP>
                </NavLink>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center mt-1 gap-x-5 xl:justify-between">
          {bottomNavLinks.map((link, i) => (
            <div key={i} className="relative group">
              {link?.child ? (
                <div className="group relative">
                  <NavLink to={link.to} className="flex items-center">
                    <TypographyP classNames="font-medium text-white text-shadow uppercase">
                      {link.title}
                    </TypographyP>
                    <ChevronDown size={18} color="white" />
                  </NavLink>
                  <div className="uppercase tracking-tight absolute left-0 top-full hidden group-hover:block bg-white text-black shadow-lg rounded-md p-2 min-w-[150px] z-20 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 delay-150 group-hover:delay-100">
                    {link.child.map((item, j) => (
                      <a
                        key={j}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              ) : link.external ? (
                <a href={link.to} target="_blank" rel="noopener noreferrer">
                  <TypographyP classNames="font-medium text-white text-shadow uppercase tracking-tight">
                    {link.title}
                  </TypographyP>
                </a>
              ) : (
                <NavLink to={link.to}>
                  <TypographyP classNames="font-medium text-white text-shadow uppercase tracking-tight">
                    {link.title}
                  </TypographyP>
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
