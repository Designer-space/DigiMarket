"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside ";

const NavItems = () => {
	const [activeIndex, setActiveIndex] = useState<null | number>(null);
	const isAnyOpen = activeIndex !== null;

	const navRef = useRef<HTMLDivElement | null>(null);

	useOnClickOutside(navRef, () => {
		setActiveIndex(null);
	});

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.code === "Escape") {
				setActiveIndex(null);
			}
		};

		document.addEventListener("keydown", handler);
		return () => {
			document.removeEventListener("keydown", handler);
		};
	}, []);

	return (
		<div
			ref={navRef}
			className='flex gap-4 h-full'>
			{PRODUCT_CATEGORIES.map((category, i) => {
				const handelOpen = () => {
					if (activeIndex === i) {
						setActiveIndex(null);
					} else {
						setActiveIndex(i);
					}
				};

				const isOpen = i === activeIndex;

				return (
					<NavItem
						category={category}
						handelOpen={handelOpen}
						isOpen={isOpen}
						key={category.value}
						isAnyOpen={isAnyOpen}
					/>
				);
			})}
		</div>
	);
};

export default NavItems;
