import React from 'react';
import Link from 'next/link';

import LightLogo from '../../public/images/light-logo.svg';

function Header(props) {
    const linkColor = props.onDark ? 'text-white' : '#132B50';
    return (
        <header className="flex justify-between items-center">
            <div style={{height: 54, width: 32}}>
                <LightLogo ></LightLogo>
            </div>
                <ul className="flex">
                    <li><Link href="/"><a className={[linkColor, "px-6 py-3 hover:text-green-400"].join(" ")}>Home</a></Link></li>
                    <li><Link href="/"><a className={[linkColor, "px-6 py-3 hover:text-green-400"].join(" ")}>Pricing</a></Link></li>
                    <li><Link href="/"><a className={[linkColor, "px-6 py-3 hover:text-green-400"].join(" ")}>Features</a></Link></li>
                    <li><Link href="/"><a className={[linkColor, "px-6 py-3 hover:text-green-400"].join(" ")}>Story</a></Link></li>
                    <li><Link href="/"><a className="text-white px-6 py-3 ml-3 tombol-header">{props.login ? 'Masuk' : 'Daftar'}</a></Link></li>
                </ul>
        </header>
    )
}

export default Header;