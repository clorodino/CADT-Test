import React from 'react'
import List from '../../components/List'
import Tabs from '../../components/Tabs'
import useGetData from '../../hooks/useGetData'
import styles from './Setouts.module.scss'

const Setouts = () => {

  const dataSetouts = useGetData(`http://localhost:5000/setouts`)
	
	const headers = {col1:'Name', col2: 'Machine Name', col3:'Machine Width', col4:'Courses', col5:'Last Updated'}
	let columns = []

	const formatDate = date => {
		const roughDate = date.substr(2, 8).replaceAll('-', '')
		const formattedDate = `${roughDate.substr(4, 2)}/${roughDate.substr(2, 2)}/${roughDate.substr(0, 2)}`
		return formattedDate
	}

  const formatMachineName = (name) => {
    return name.replaceAll('_', ' ')
  }

	if (dataSetouts) {
		dataSetouts.map(el => {
			const newColumn = {
				col1: el.name,
				col2: formatMachineName(el.machine_name),
				col3: el.machine_width,
				col4: el.courses,
				col5: formatDate(el.updated),
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

export default Setouts