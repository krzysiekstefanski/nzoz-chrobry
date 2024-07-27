import React from "react";
import styled from "styled-components";
import { color } from "../../components/colors";
import { shadow } from "../../components/shadows";

const Box = styled.div`
	display: ${(props) => (props.flex ? "flex" : "")};
	flex-direction: ${(props) => props.column ? "column" : ""};
	justify-content: ${(props) => props.center ? "center" : props.justify ? props.justify : ""};
	align-items: ${(props) => props.center ? "center" : props.align ? props.align : ""};
	width: ${(props) => (props.width ? `${props.width}px` : "100%")};
	min-width: ${(props) => (props.width ? `${props.width}px` : "")};
	max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "")};
	background-color: ${color.white};
	box-shadow: 0px 10px 20px rgba(90, 116, 203, 0.1);
	border-radius: 5px;
	overflow: ${(props) => (props.overflow ? "hidden" : "")};
	padding: ${(props) => (props.p ? props.p : "")};
	margin: ${(props) => (props.m ? props.m : "")};
	margin-bottom: ${(props) => (props.bottomMargin ? props.bottomMargin : "")};
	margin-bottom: ${(props) => (props.mb ? props.mb : "")};

	@media (min-width: 769px) {
		flex-direction: ${(props) => props.rowMD ? "row" : ""};
	}

	@media (min-width: 1250px) {
		margin-bottom: ${(props) => (props.mbXL ? `${props.mbXL}px` : "")};
	}
`;

const Whitebox = ({ className, children, flex, column, justify, align, center, overflow, maxWidth, p, ...rest }) => {
	return (
		<Box className={className} flex={flex} column={column} justify={justify} align={align} center={center} maxWidth={maxWidth} overflow={overflow} p={p} {...rest}>
			{children}
		</Box>
	);
};

export default Whitebox;
