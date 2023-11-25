'use client';

import React from 'react';
import MyCarousel from '../Carousel';

type Props = {};

export default function Banner({}: Props) {
	const bannerList = [
		{
			image: 'banner (1).svg',
		},
		{
			image: 'banner (2).svg',
		},
		{
			image: 'banner (3).svg',
		},
		{
			image: 'banner (4).svg',
		},

		{
			image: 'banner (5).svg',
		},
	];
	return (
		<div>
			<MyCarousel items={bannerList} />
		</div>
	);
}
