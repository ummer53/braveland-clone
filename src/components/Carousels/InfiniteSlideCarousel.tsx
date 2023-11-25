'use client';

import React from 'react';

import { useEffect } from 'react';

interface Props {
	children: React.JSX.Element[];
}

export default function SlideSectionCarousel({ children }: Props) {
	useEffect(() => {
		const track = document.querySelector('.carousel-track');
		if (track) {
			const originalElements = track.children;
			const clonedElements = Array.from(originalElements).map((element) =>
				element.cloneNode(true)
			);

			track.append(...clonedElements);
		}
	}, []);
	return (
		<div className="carousel-container overflow-hidden w-full h-40">
			<div
				className="carousel-track flex h-full gap-4 animate-infinite-scroll"
				aria-hidden={true}
			>
				{children!.map((item: React.JSX.Element, index: number) => (
					<span
						key={index}
						className="flex flex-row items-center h-full flex-shrink-0 mr-4"
					>
						{item}
					</span>
				))}
			</div>
		</div>
	);
}
