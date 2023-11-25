import Link from 'next/link';
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type Props = {};

export default function UserOptions({}: Props) {
	const [activeOption, setActiveOption] = React.useState<string | null>(null);
	const [showChildren, setShowChildren] = React.useState<boolean>(false);
	const userOptionList = [
		{
			name: 'brands',
			children: [
				{ name: 'adidas' },
				{ name: 'champion' },
				{ name: 'nike' },
				{ name: 'puma' },
				{ name: 'reebok' },
				{ name: 'the north face' },
				{ name: 'vans' },
			],
		},

		{
			name: 'shops',
			children: [
				{ name: 'brava' },
				{ name: 'brava kids' },
				{ name: 'brava vintage' },
				{ name: 'brava home' },
				{ name: 'brava sports' },
			],
		},
		{ name: 'premium' },
		{ name: 'gift cards' },
	];

	return (
		<div className="flex flex-row gap-6 justify-evenly items-center w-full">
			{userOptionList.map((userOption, index) => (
				<div key={index} className="relative">
					{userOption.children ? (
						<div
							className="flex flex-row items-center"
							onMouseEnter={() => {
								setActiveOption(userOption.name);
								setShowChildren(true);
							}}
							onMouseLeave={() => {
								setTimeout(() => {
									setActiveOption(null);
									setShowChildren(false);
								}, 300);
							}}
						>
							<span>{userOption.name}</span>
							<ArrowDropDownIcon />
						</div>
					) : (
						<Link href={'/'}>{userOption.name}</Link>
					)}

					{showChildren &&
						activeOption === userOption.name &&
						userOption.children && (
							<div className="absolute top-full mt-2 left-0 bg-[#212122] w-full z-10 rounded p-8 min-w-max">
								{userOption.children.map((item, index) => (
									<div key={index}>
										<Link href={'/'}>{item.name}</Link>
									</div>
								))}
							</div>
						)}
				</div>
			))}
		</div>
	);
}
