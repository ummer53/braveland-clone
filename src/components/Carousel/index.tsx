'use client';

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Image from 'next/image';

interface Props {
	items: Array<any>;
}

export default function MyCarousel({ items }: Props) {
	return (
		<Carousel
			autoPlay={true}
			indicators={false}
			interval={3000}
			navButtonsAlwaysVisible={true}
			animation="fade"
		>
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
}

function Item(props: any) {
	return (
		<Paper>
			<span className="text-white font-bold text-4xl relative">
				<Image
					layout="responsive"
					width={100}
					height={70}
					src={props.item.image}
					alt={props.item.name}
				/>
			</span>
		</Paper>
	);
}
