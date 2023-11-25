import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Link from 'next/link';

export default function ContactLinks() {
	const contactLinkList = [
		{
			text: 'become an affiliate',
		},
		{
			icon: <InstagramIcon />,
			text: 'Instagram',
		},
		{
			icon: <FacebookIcon />,
			text: 'Facebook',
		},
		{
			icon: <TwitterIcon />,
			text: 'Twitter',
		},
		{
			icon: <PersonOutlineOutlinedIcon />,
			text: 'Account',
		},
		{
			icon: <SearchOutlinedIcon />,
			text: 'Search',
		},
		{
			icon: <ShoppingBagOutlinedIcon />,
			text: 'Cart',
		},
	];
	return (
		<div className="flex flex-row justify-evenly items-center  w-full">
			{contactLinkList.map((contactLink, index) => (
				<div key={index}>
					<Link href={'/'}>
						{contactLink.icon ? contactLink.icon : contactLink.text}
					</Link>
				</div>
			))}
		</div>
	);
}
