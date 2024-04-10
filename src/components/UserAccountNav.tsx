"use client";

import Link from "next/link";
import { User } from "../payload-types";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth";

const UserAccountNav = ({ user }: { user: User }) => {
	const { signOut } = useAuth();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				asChild
				className='overflow-visible'>
				<Button
					variant='ghost'
					size='sm'
					className='relative'>
					My Account
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='bg-white '
				align='end'>
				<div className='flex items-center justify-start gap-2 p-2'>
					<div className='flex flex-col space-y-0.5 leading-none'>
						<p className='font-medium text-sm text-black'>{user.email}</p>
					</div>
				</div>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link href='/sell'>Seller Dashbord</Link>
				</DropdownMenuItem>
				<DropdownMenuItem
					className='cursor-pointer'
					onClick={signOut}>
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserAccountNav;
