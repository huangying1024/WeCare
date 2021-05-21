const request = (options) => {
	return new Promise((resolve, reject)) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: optionnns.data || {},
			timeout: 8000,
			success: (res) => {
				const code = res.data.code
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	}
}