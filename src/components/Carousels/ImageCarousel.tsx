'use client';

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import Image from 'next/image';

interface Props {
	items: Array<any>;
}

export default function ImageCarousel({ items }: Props) {
	console.log(items);
	return (
		<Carousel
			autoPlay={true}
			indicators={false}
			interval={3000}
			navButtonsAlwaysVisible={true}
			animation="fade"
		>
			{items.map((item, i) => (
				<Paper key={i}>
					<span className=" font-bold text-4xl relative">
						<Image
							layout="responsive"
							width={100}
							height={70}
							src={item.image}
							alt={item.text || 'image'}
						/>
					</span>
				</Paper>
			))}
		</Carousel>
	);
}
