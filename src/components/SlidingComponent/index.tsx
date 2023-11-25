'use client';
import React from 'react';
import SlidePortion from './SlidePortion';

type Props = {};

export default function SlidingSection({}: Props) {
	return (
		<div className="h-full w-full">
			<SlidePortion />
		</div>
	);
}
