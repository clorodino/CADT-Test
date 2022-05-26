import { useEffect, useState } from 'react'

const useGetData = (url) => {
    const axios = require('axios')
	const [data, setData] = useState()

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await axios.get(url)
				setData(res.data)
			} catch (error) {
				console.log(error)
			}
			//console.log(data)
			return data
		}
		getData()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url])

    return data
}

export default useGetData