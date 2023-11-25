import React from 'react';
import Image from 'next/image';
import { SlideCarousel } from '@/components';

export default function SlideSection() {
	const slidePortionList = [
		{
			image: 's1.svg',
		},
		{
			image: 's2.svg',
		},
		{
			image: 's3.svg',
		},
		{
			image: 's4.svg',
		},
		{
			image: 's5.svg',
		},
		{
			image: 's6.svg',
		},
	];
	return (
		<div>
			<div className=" carousel-div flex flex-row justify-evenly items-center gap-6  w-full p-4">
				<SlideCarousel>
					{slidePortionList.map((slidePortion, index) => (
						<div
							key={index}
							className="flex flex-row rounded-r-md items-center  rounded-l-full  bg-black w-60"
						>
							<span className="rounded-full overflow-hidden">
								<Image
									width={100}
									height={100}
									src={slidePortion.image}
									alt={slidePortion.image}
								/>
							</span>
							<span className="text-white font-bold rounded-md px-4">
								Shop Now
							</span>
						</div>
					))}
				</SlideCarousel>
			</div>
		</div>
	);
}
