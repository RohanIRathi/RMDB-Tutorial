import styled from "styled-components";

export const Wrapper = styled.div`
	display: block;
	align-items: center;
	margin: 10px;
	width: 300px;
	padding: 20px;

	.title {
		font-size: var(--fontBig);
		margin: 0 0 10px 20px;
	}

	input {
		width: 100%;
	}

	.rating {
		text-align: center;
		font-size: var(--fontMed);
	}
`;

export const RateButton = styled.div`
	float: right;
	margin-right: 20px;
	background: transparent;
	backdrop-filter: blur(10px);
	color: var(--white);
	padding: 5px 10px;
	border: 5px solid;
	border-radius: 10px;
	text-decoration: none;
	font-weight: 300;
	font-size: var(--fontMed);
	cursor: pointer;
`;