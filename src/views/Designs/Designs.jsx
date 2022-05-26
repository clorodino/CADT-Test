import React from 'react'
import List from '../../components/List'
import Tabs from '../../components/Tabs'
import useGetData from '../../hooks/useGetData'
import styles from './Designs.module.scss'

const Designs = () => {
	
	const dataDesign = useGetData(`http://localhost:5000/designs`)
	const dataUser = useGetData('http://localhost:5000/users')
	
	const headers = {col1: 'Name', col2:'Courses', col3: 'Wales', col4: 'Last Updated', col5: 'By'}
	let columns = []

	const getUserName = id => {
		let username
		if (dataUser) {
			dataUser.forEach(el => {
				id === el.id && (username = el.name)
			})
		}
		return username.split(' ').map(el => el[0]).join('')
	}

	const formatDate = date => {
		const roughDate = date.substr(2, 8).replaceAll('-', '')
		const formattedDate = `${roughDate.substr(4, 2)}/${roughDate.substr(2, 2)}/${roughDate.substr(0, 2)}`
		return formattedDate
	}

	if (dataDesign) {
		dataDesign.map(el => {
			const newColumn = {
				col1: el.name,
				col2: el.courses,
				col3: el.wales,
				col4: formatDate(el.updated),
				col5: getUserName(el.user_id_last_update),
			}
			return columns = [...columns, newColumn]
		})
	}

	return (
		<div className='container'>
			<div className='menu'>
				<Tabs />
			</div>
			<div className={styles.info}>
				<List headers={headers} columns={columns} />
			</div>
		</div>
	)
}

export default Designs
