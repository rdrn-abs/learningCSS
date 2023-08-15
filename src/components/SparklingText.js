import React from 'react';
import SparklingStar from './SparklingStar';

// eslint-disable-next-line max-lines-per-function
const SparklingText = (context) => {
	const { text } = context;

	return (
		<div className="holder">
			<div className="title">Sparkling Text</div>
			<div className="sparklingHolder">
				<div className="sparkleWrapper">
					<div className="sparklesParent">
						<div style={ { position: 'absolute', left: '10px',
							transform: '(rotate(-90deg))',
							transformOrigin: '50% 50%' } }
						>
							<SparklingStar delayTime="0" duration="2"/>
						</div>
						<div style={ { right: '10px',
							transform: 'scale(.5,.5)' } }
						>
							<SparklingStar delayTime=".2" duration="1.9"/>
						</div>
						<div style={ { position: 'absolute',
							right: '50px', bottom: '-50px' } }
						>
							<SparklingStar delayTime=".45" duration="2"/>
						</div>
						<div style={ { position: 'absolute',
							transform: 'scale(.5,.5)',
							bottom: '-10px', left: '0px' } }
						>
							<SparklingStar delayTime=".25" duration="1.5"/>
						</div>
					</div>
					<div className="sparklingText shimmer">{text}</div>

				</div>
			</div>

		</div>

	);
};

export default SparklingText;
