import Container from "./Container";
import { TypographyH4, TypographyP, TypographySmall } from "../typography";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { bottomLinks } from "@/lib/location-data";

export default function Footer() {
  return (
    <>
      <div className="bg-green-primary">
        <Container>
          <div className="flex flex-wrap justify-center gap-10 p-10 text-white lg:justify-between xl:px-0 lg:gap-5">
            <div>
              <TypographyH4>GHI+</TypographyH4>
              <div className="flex flex-col gap-2 mt-5">
                <Link to={"/champions"}>
                  <TypographySmall classNames={"font-normal"}>
                    Become a champion
                  </TypographySmall>
                </Link>
                <Link to={"https://greenhomeportal.vercel.app/register"}>
                  <TypographySmall classNames={"font-normal"}>
                    Join GHI+
                  </TypographySmall>
                </Link>
                <Link to={"https://greenhomeportal.vercel.app/login"}>
                  <TypographySmall classNames={"font-normal"}>
                    GHI+ Login
                  </TypographySmall>
                </Link>
                <Link to={"/privacy"}>
                  <TypographySmall classNames={"font-normal"}>
                    Privacy Policy
                  </TypographySmall>
                </Link>
                <Link to={"/terms"}>
                  <TypographySmall classNames={"font-normal"}>
                    Terms and Condition
                  </TypographySmall>
                </Link>
              </div>
            </div>

            <div className="col-span-2">
              <TypographyH4>Headquarters</TypographyH4>
              <div className="flex flex-col gap-2 mt-5">
                <Link to={"/champions"}>
                  <div className="flex items-start gap-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="block size-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <TypographySmall classNames={"font-normal leading-normal"}>
                      2240 W Woolbright Rd Ste 315 Boynton Beach, FL 33426
                    </TypographySmall>
                  </div>
                </Link>
                <Link to={"/champions"}>
                  <div className="flex items-start gap-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <TypographySmall classNames={"font-normal leading-normal"}>
                      561-815-0008
                    </TypographySmall>
                  </div>
                </Link>
                <div className="flex items-start gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                  </div>

                  <TypographySmall classNames={"font-normal leading-normal"}>
                    windows@greenhomeimprovementsplus.com
                  </TypographySmall>
                </div>
                <TypographySmall classNames={"font-normal leading-normal ml-7"}>
                  CVC57057 CBC1260538 EC13009045
                </TypographySmall>
              </div>
            </div>

            <div>
              <TypographyH4>Hours Of Operations</TypographyH4>
              <div className="flex flex-col gap-4 mt-5">
                <div className="flex items-start gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col">
                    <TypographySmall classNames={"font-normal leading-normal"}>
                      Office Hours:
                    </TypographySmall>
                    <TypographySmall classNames={"font-normal leading-normal"}>
                      Mon-Fri | 8am-5pm
                    </TypographySmall>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col">
                    <TypographySmall classNames={"font-normal leading-normal"}>
                      In Home Estimate:
                    </TypographySmall>
                    <TypographySmall classNames={"font-normal leading-normal"}>
                      Sun – Sat | 9am-9pm
                    </TypographySmall>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <TypographyH4>Quick Links</TypographyH4>
              <div className="flex flex-col gap-2 mt-5">
                <Link to={"/solar"}>
                  <TypographySmall classNames={"font-normal"}>
                    Solar
                  </TypographySmall>
                </Link>
                <Link to={"/hurricane-protection"}>
                  <TypographySmall classNames={"font-normal"}>
                    Hurricane Protection
                  </TypographySmall>
                </Link>
                <Link to={"/plus"}>
                  <TypographySmall classNames={"font-normal"}>
                    Plus
                  </TypographySmall>
                </Link>
                <Link to={"/roofing"}>
                  <TypographySmall classNames={"font-normal"}>
                    Roofing
                  </TypographySmall>
                </Link>
                <Link to={"/financing"}>
                  <TypographySmall classNames={"font-normal"}>
                    Financing
                  </TypographySmall>
                </Link>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <Link
                  to={"https://www.facebook.com/GreenHomeImprovementsPlus/"}
                  className="flex items-center justify-center w-10 h-10 bg-white rounded-full"
                >
                  <svg
                    className="size-6 fill-green-primary"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                  </svg>
                </Link>
                <Link
                  to={"/"}
                  className="flex items-center justify-center w-10 h-10 bg-white rounded-full"
                >
                  <svg
                    className="size-6 fill-green-primary"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </Link>
                <Link
                  to={"/"}
                  className="flex items-center justify-center w-10 h-10 bg-white rounded-full"
                >
                  <svg
                    className="size-6 fill-green-primary"
                    viewBox="0 0 576 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </Link>
                <Link
                  to={"/"}
                  className="flex items-center justify-center w-10 h-10 bg-white rounded-full"
                >
                  <svg
                    className="-mr-1 size-6 fill-green-primary"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center p-10 text-white xl:px-0">
            <TypographyH4 classNames={"text-center tracking-wide"}>
              Serving All Of Florida
            </TypographyH4>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              {bottomLinks.map((link, i) => (
                <div
                  key={i}
                  className="flex flex-wrap items-center justify-center gap-2"
                >
                  <Link 
                  to={
                    link.link
                  } className="text-sm hover:underline">{link.title}</Link>
                  {bottomLinks.length - 1 !== i && (
                    <Separator orientation="vertical" className="h-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div className="flex justify-center py-3">
            <TypographyP classNames={"text-sm text-white tracking-wide"}>
              © 2024 - All Rights Reserved | Green Home Improvement Plus
            </TypographyP>
          </div>
        </Container>
      </div>
    </>
  );
}
