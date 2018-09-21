import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Button, ButtonGroup } from 'react-bootstrap';
import {periodAction} from './action';


const PeriodFilter = (props) => {

	const periods = {
		'Dia' : 'day',
		'Semana' : 'week',
		'Mês' : 'mounth'
	}
	
	const createButton = ({value, id}) =>(
		<Button
			key={id}
			value = {id}
			className={props.filters.period === id? 'active':''}
			onClick={({target})=>props.periodAction(target.value)}
		>
			{value}
		</Button>
	)

	return <div className="period-filter">
		<ButtonGroup aria-label="Basic example">
			{
				Object.entries(periods)
				.map(([value, id])=>(
					createButton({value,id})
				))
			}
		</ButtonGroup>
	</div>
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispach) => {
    return bindActionCreators({periodAction},dispach)
}

export default connect(mapStateToProps, mapDispatchToProps)(PeriodFilter);