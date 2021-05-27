import React, { useEffect } from "react";
import Link from "next/link";

import LightLogo from "../../public/images/light-logo.svg";
import { useState } from "react/cjs/react.development";

function Header(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userCookie = decodeURIComponent(window.document.cookie)
      ?.split(";")
      ?.find((item) => item.indexOf("BWAMICRO:user") > -1)
      ?.split("=")[1];

    setUser(userCookie ? JSON.parse(userCookie) : null);
  }, []);

  const linkColor = props.onDark ? "text-white" : "#132B50";
  return (
    <header className="flex justify-between items-center">
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
          <Link href="/">
            <a className="text-white px-6 py-3 ml-3 bg-indigo-400 hover:bg-indigo-500 flex items-center">
              {user !== null ? (
                <span className="inline-block rounded-full mr-2 border border-green-400">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      className="object-cover"
                      width={30}
                      alt=""
                    />
                  ) : (
                    <img
                      src="../images/icon-photo-null.png"
                      className="object-cover"
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
  );
}

export default Header;
