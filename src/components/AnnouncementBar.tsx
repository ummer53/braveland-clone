'use client';
import React from 'react';

type Props = {};

export default function AnnouncementBar({
	announcement,
}: {
	announcement?: string;
}) {
	return (
		<div className="bg-[#E1C200] font-bold uppercase font-sans text-xs flex flex-row justify-center items-center p-2">
			{announcement}
		</div>
	);
}
