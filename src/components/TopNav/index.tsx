'use client';

import React from 'react';
import UserOptions from './UserOptions';
import ContactLinks from './ContactLinks';
import Image from 'next/image';

export default function TopNav() {
	return (
		<div className="bg-[#212122] text-white font-bold font-sans grid grid-cols-10 justify-evenly items-center py-8">
			<span className="col-span-3">
				<UserOptions />
			</span>
			<span className="col-span-4 flex items-center justify-center">
				<img
					src="https://bravaland.com/cdn/shop/files/Artboard_1.png?v=1678787853"
					alt="brava logo"
					className="w-40"
				/>
			</span>
			<span className="col-span-3">
				<ContactLinks />
			</span>
		</div>
	);
}
