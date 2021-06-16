import React, { useEffect } from "react";
import Link from "next/link";

import LightLogo from "../../public/images/light-logo.svg";
import DarkLogo from "../../public/images/dark-logo.svg";
import { useState } from "react/cjs/react.development";

function Header(props) {
  const [user, setUser] = useState(null);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const userCookie = decodeURIComponent(window.document.cookie)
      ?.split(";")
      ?.find((item) => item.indexOf("BWAMICRO:user") > -1)
      ?.split("=")[1];

    setUser(userCookie ? JSON.parse(userCookie) : null);
  }, []);

  const linkColor = props.onDark ? "text-white" : "#132B50";
  return (
    <>
      <header className="flex justify-between items-center invisible md:visible">
        <div style={{ height: 54, width: 32 }}>
          <LightLogo></LightLogo>
        </div>
        <ul className="flex items-center">
          <li>
            <Link href="/" as="/">
              <a
                className={[linkColor, "px-6 py-3 hover:text-green-400"].join(
                  " "
                )}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className={[linkColor, "px-6 py-3 hover:text-green-400"].join(
                  " "
                )}
              >
                Pricing
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className={[linkColor, "px-6 py-3 hover:text-green-400"].join(
                  " "
                )}
              >
                Features
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className={[linkColor, "px-6 py-3 hover:text-green-400"].join(
                  " "
                )}
              >
                Story
              </a>
            </Link>
          </li>
          <li>
            <Link
              href={
                user ? "http://localhost:3030" : "http://localhost:3030/login"
              }
            >
              <a
                target="_blank"
                className="text-white px-6 py-3 ml-3 bg-indigo-400 hover:bg-indigo-500 flex items-center"
              >
                {user !== null ? (
                  <span className="inline-block rounded-full mr-2 border border-green-400">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        className="object-cover w-5 h-5 rounded-full"
                        width={30}
                        alt=""
                      />
                    ) : (
                      <img
                        src="../images/icon-photo-null.png"
                        className="object-cover rounded-full"
                        width={30}
                        alt=""
                      />
                    )}
                  </span>
                ) : (
                  ""
                )}

                {user !== null
                  ? "Hi, " + user.name
                  : props.login
                  ? "Masuk"
                  : "Daftar"}
              </a>
            </Link>
          </li>
          <li></li>
        </ul>
      </header>
      <header className="flex flex-col inset-0 sm:hidden -mt-24 -ml-6 -mr-6 overflow-hidden">
        {!toggle && (
          <button
            onClick={() => setToggle(!toggle)}
            className={["toggle z-100 p-3 focus:outline-none sm:hidden"].join(
              " "
            )}
          >
            <img src="../../images/menu.png" width={30} height={30} alt="" />
          </button>
        )}

        {toggle && (
          <ul
            className="flex flex-col overflow-hidden transition-all duration-300 p-4"
            style={{ backgroundColor: "white" }}
          >
            <div style={{ height: 54, width: 32 }}>
              <DarkLogo></DarkLogo>
            </div>
            <button
              onClick={() => setToggle(!toggle)}
              className={[
                "toggle z-100 p-3 focus:outline-none sm:hidden absolute right-0",
              ].join(" ")}
            >
              <img
                src="../../images/menu-black.png"
                width={30}
                height={30}
                alt=""
              />
            </button>
            <li className="p-3">
              <Link
                href="/"
              >
                <a className="px-6 py-3 hover:text-green-400">Home</a>
                
              </Link>
            </li>
            <li className="p-3">
              <Link
                href="/"
              >
                <a className="px-6 py-3 hover:text-green-400">Pricing</a>
              </Link>
            </li>
            <li className="p-3">
              <Link
                href="/"
              >
                <a className="px-6 py-3 hover:text-green-400">Features</a>
              </Link>
            </li>
            <li className="p-3">
              <Link
                href="/"
              >
                <a className="px-6 py-3 hover:text-green-400">Story</a>
              </Link>
            </li>
            <li className="p-6">
              <Link
                href={
                  user ? "http://localhost:3030" : "http://localhost:3030/login"
                }
              >
                <a
                  target="_blank"
                  className="text-white px-6 py-3 ml-3 text-center bg-indigo-400 hover:bg-indigo-500 flex"
                >
                  {user !== null ? (
                    <span className="inline-block rounded-full mr-2 border border-green-400">
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          className="object-cover w-5 h-5 rounded-full"
                          width={30}
                          alt=""
                        />
                      ) : (
                        <img
                          src="../images/icon-photo-null.png"
                          className="object-cover rounded-full"
                          width={30}
                          alt=""
                        />
                      )}
                    </span>
                  ) : (
                    ""
                  )}

                  {user !== null
                    ? "Hi, " + user.name
                    : props.login
                    ? "Masuk"
                    : "Daftar"}
                </a>
              </Link>
            </li>
          </ul>
        )}
      </header>
    </>
  );
}

export default Header;
