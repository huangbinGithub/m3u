function resetm3u (m3u) {
	let lines = m3u.split('\n');
	let result = [];
	let cctv = []
	let other = []
	for (let i = 0; i < lines.length; i++) {
		let line = lines[i];
		if (line.startsWith('#EXTM3U')) {
			result.push(line);
			result.push('');
		}else if (line.startsWith('#EXTINF')) {
			const lineNext = lines[i + 1] || '';
			if(line.indexOf('免费订阅') > -1 || line.indexOf('叫啥') > -1 || line.indexOf('地区') > -1 || line.indexOf('咪咕') > -1 || line.indexOf('游戏') > -1 || line.indexOf('埋堆') > -1 || line.indexOf('影视') > -1) {
				i++;
				continue
			} else if (line.indexOf('央视') > -1 || line.indexOf('卫视') > -1) {
				if(lineNext.indexOf('#EXTINF') == -1) {
					cctv.push(line, lines[i + 1] || '')
				}
			} else {
				if(lineNext.indexOf('#EXTINF') == -1) {
					other.push(line, lines[i + 1] || '')
				}
			}
		}
	}
	return [...result, ...cctv,'', ...other].join('\n');
}

module.exports = {
	resetm3u
}
