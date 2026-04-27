"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();

	return (
		<div className="bg-gray-900">
			<header className="absolute inset-x-0 top-0 z-50">
				<Navbar />
			</header>
			{location.pathname === "/" && <Hero />}
		</div>
	);
};

export default Header;
