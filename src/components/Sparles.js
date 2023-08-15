/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import React from 'react';
const Sparkles = () =>
	<div className="wrapper">
		<div className="background"/>
		<div className="circle base"/>
		<div className="circle mid"/>
		<div className="circle top"/>
		<svg viewBox="0 0 106 34">
			<defs>
				<linearGradient
					id="shiny"
					x1="-100%"
					x2="300%"
					y1="0"
					y2="0"
					gradientTransform="rotate(10)"
				>
					<stop offset="0">
						<animate
							attributeName="offset"
							dur="7s"
							repeatCount="indefinite"
							values="0;0.95"
						/>
					</stop>
					<stop offset="0.1" stopColor="rgba(255, 255, 255, 0.2)">
						<animate
							attributeName="offset"
							dur="7s"
							repeatCount="indefinite"
							values="0;1"
						/>
					</stop>
					<stop offset="0.1">
						<animate
							attributeName="offset"
							dur="7s"
							repeatCount="indefinite"
							values="0.05;1"
						/>
					</stop>
				</linearGradient>
			</defs>
			<path
				fill="url(#shiny)"
				fillRule="evenodd"
				d="M8.196 13.836h4.3v-2.582h-4.3V8.642c0-1.68.77-2.333 2.115-2.333.961 0 1.666.28 2.435.778v-2.83c-.801-.467-1.666-.684-2.788-.684-2.98 0-4.902 1.679-4.902 5.1v2.581h-2.21v2.582h2.21v11.196h3.14V13.836zm17.82-2.582h-3.14v11.352c-.833.125-1.73.187-2.435.187-2.082 0-3.364-.747-3.364-2.8v-8.739h-3.14v8.957c0 3.857 2.5 5.132 6.568 5.132 1.666 0 3.845-.218 5.511-.622V11.254zm6.227-7.37H29.07v21.148h3.172V3.884zm6.194 0h-3.172v21.148h3.172V3.884zm2.382 20.34c1.057.684 2.723 1.119 4.39 1.119 3.075 0 5.35-1.306 5.35-4.199 0-2.488-1.41-3.67-4.646-4.354-1.634-.435-2.243-.902-2.243-1.804s.737-1.555 2.115-1.555c1.506 0 2.723.53 3.973 1.4v-2.83c-1.186-.716-2.467-1.058-4.07-1.058-2.883 0-5.062 1.369-5.062 4.168 0 2.395 1.25 3.545 4.198 4.198 1.826.467 2.659.871 2.659 1.991 0 1.088-.93 1.555-2.339 1.555-1.442 0-3.012-.59-4.325-1.555v2.923zm9.91-10.388h2.147v7.246c0 3.141 1.955 4.261 4.262 4.261 1.345 0 2.499-.28 3.428-.746v-2.768c-.865.497-1.666.777-2.595.777-1.218 0-1.955-.56-1.955-2.208v-6.562h4.037v-2.582h-4.037V7.896h-3.14v3.358H50.73v2.582zm10.36 4.323c0 4.26 3.076 7.184 7.305 7.184 4.262 0 7.337-2.923 7.337-7.184 0-4.292-3.075-7.216-7.337-7.216-4.229 0-7.305 2.924-7.305 7.216zm11.438 0c0 2.768-1.698 4.54-4.133 4.54-2.37 0-4.1-1.772-4.1-4.54 0-2.8 1.73-4.572 4.1-4.572 2.435 0 4.133 1.773 4.133 4.572zm8.341-3.795a6.414 6.414 0 012.371-.435c.513 0 1.508.143 1.508.143l-1.152-3.028s-.197-.007-.356-.007c-2.018 0-4.005.528-5.542 1.368v12.627h3.171V14.364zm7.861-3.11h-3.396l5.863 14.4-1.986 4.976h3.107l7.69-19.376h-3.268L92.766 22.11l-4.037-10.855z"
				className="logo"
				clipRule="evenodd"
			/>
			<g className="sparkles">
				<path
					style={ { animation: 'sparkle 2s 0s infinite ease-in-out' } }
					d="M2.574 5.333s1.188-6.201 2.243 0c0 0 5.938 1.056 0 2.112 0 0-1.055 6.333-2.243 0-3.563-.66-3.299-1.32 0-2.112z"
				/>
				<path
					style={ { animation: 'sparkle 1.5s .9s infinite ease-in-out' } }
					d="M33.517 29.973s1.035-5.404 1.955 0c0 0 5.173.92 0 1.839 0 0-.92 5.518-1.955 0-3.104-.575-2.874-1.15 0-1.84z"
				/>
				<path
					style={ { animation: 'sparkle 1.5s .4s infinite ease-in-out' } }
					d="M69.03 1.712s.738-3.853 1.394 0c0 0 3.689.656 0 1.312 0 0-.656 3.935-1.394 0-2.213-.41-2.049-.82 0-1.312z"
				/>
				<path
					style={ { animation: 'sparkle 2.1s 1.1s infinite ease-in-out' } }
					d="M99.182 12.794s1.611-8.417 3.044 0c0 0 8.058 1.433 0 2.865 0 0-1.433 8.596-3.044 0-4.835-.895-4.477-1.79 0-2.865z"
				/>
			</g>
		</svg>
	</div>
  ;

export default Sparkles;