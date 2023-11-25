import Link from 'next/link';
import React from 'react';

type Props = {};

export default function UserOptions({}: Props) {
	const userOptionList = ['brands', 'shop', 'premium', 'gift cards'];
	return (
		<div className="flex flex-row justify-evenly items-center  w-full">
			{userOptionList.map((userOption, index) => (
				<div key={index}>
					<Link href={'/'}>{userOption}</Link>
				</div>
			))}
		</div>
	);
}
