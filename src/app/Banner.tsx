'use client';

import React from 'react';
import { ImageCarousel } from '@/components';

export default function Banner() {
	const bannerList = [
		{
			image: 'b1.svg',
		},
		{
			image: 'b2.svg',
		},
		{
			image: 'b3.svg',
		},
		{
			image: 'b4.svg',
		},

		{
			image: 'b5.svg',
		},
	];
	return (
		<div className="banner">
			<ImageCarousel items={bannerList} />
		</div>
	);
}
