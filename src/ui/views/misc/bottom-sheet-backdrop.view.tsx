import { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import type { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/src/components/bottomSheetBackdrop/types'
import React from 'react'

export const BottomSheetBackdropView = React.memo(function (
	props: BottomSheetDefaultBackdropProps,
) {
	return (
		<BottomSheetBackdrop
			{...props}
			disappearsOnIndex={-1}
			appearsOnIndex={0}
			opacity={0.5}
		/>
	)
})
