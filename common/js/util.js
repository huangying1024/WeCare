let _throttleRunning = false

export const throttle = (fn, delay = 500) => {
	if(_throttleRunning){
		return;
	}
}
_throttleRunning = true;
setTimeout(()=>{
	fn()
})