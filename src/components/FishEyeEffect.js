import React from 'react';

const names = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];

const FishEyeEffect = () =>
	<div className="holder">
		<div className="title">Fish eye effect using transition</div>
		<div className="fishEyeParent">
			{names.map((el, index) =>
				<div
					key={ index }
					className="fishEyeChild"
				>{el}</div>)}
		</div>
	</div>;

export default FishEyeEffect;
