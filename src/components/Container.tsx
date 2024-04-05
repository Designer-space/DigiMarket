import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type PropType = {
	className?: string;
	children: ReactNode;
};

const Container = ({ className, children }: PropType) => {
	return (
		<div
			className={cn(
				"max-w-screen-xl w-full mx-auto px-2.5 md:px-20",
				className
			)}>
			{children}
		</div>
	);
};

export default Container;
