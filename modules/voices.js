export const getVoices = imports => {

	const {
		require: {
			queueEvent,
			createTimer,
			captureError,
			logTestResult,
			lieProps
		}
	} = imports
		
	return new Promise(async resolve => {
		try {
			const timer = createTimer()
			await queueEvent(timer)
			// use window since phantomDarkness is unstable in FF
			const supported = 'speechSynthesis' in window
			supported && speechSynthesis.getVoices() // warm up
			if (!supported) {
				logTestResult({ test: 'speech', passed: false })
				return resolve()
			}
			const voiceslie = !!lieProps['SpeechSynthesis.getVoices']

			const getVoices = () => {
				const giveUpOnVoices = setTimeout(() => {
					logTestResult({ test: 'speech', passed: false })
					return resolve()
				}, 3000)
				const data = speechSynthesis.getVoices()
				const isChrome = ((3.141592653589793 ** -100) == 1.9275814160560204e-50)
				const localServiceDidLoad = (data || []).find(x => x.localService)
				if (!data || !data.length || (isChrome && !localServiceDidLoad)) {
					return
				}
				clearTimeout(giveUpOnVoices)
				const filterFirstOccurenceOfUniqueVoiceURIData = ({data, voiceURISet}) => data.filter(x => {
					const { voiceURI } = x
					if (!voiceURISet.has(voiceURI)) {
						voiceURISet.add(voiceURI)
						return true
					}
					return false
				})

				const dataUnique = filterFirstOccurenceOfUniqueVoiceURIData({
					data,
					voiceURISet: new Set()
				})

				// https://wicg.github.io/speech-api/#speechsynthesisvoice-attributes
				const local = dataUnique.filter(x => x.localService).map(x => x.name)
				const remote = dataUnique.filter(x => !x.localService).map(x => x.name)
				const languages = [...new Set(dataUnique.map(x => x.lang))]
				const defaults = dataUnique.filter(x => x.default).map(x => x.name)
				
				logTestResult({ time: timer.stop(), test: 'speech', passed: true })
				return resolve({
					local,
					remote,
					languages,
					defaults,
					lied: voiceslie
				})
			}
			
			getVoices()
			if (speechSynthesis.addEventListener) {
				return speechSynthesis.addEventListener('voiceschanged', getVoices)
			}
			speechSynthesis.onvoiceschanged = getVoices
		}
		catch (error) {
			logTestResult({ test: 'speech', passed: false })
			captureError(error)
			return resolve()
		}
	})
}

export const voicesHTML = ({ fp, note, count, modal, hashMini, hashSlice, performanceLogger }) => {
	if (!fp.voices) {
		return `
		<div class="col-four undefined">
			<strong>Speech</strong>
			<div>local (0): ${note.blocked}</div>
			<div>remote (0): ${note.blocked}</div>
			<div>lang (0): ${note.blocked}</div>
			<div>default (0):</div>
			<div class="block-text">${note.blocked}</div>
		</div>`
	}
	const {
		voices: {
			$hash,
			local,
			remote,
			languages,
			defaults,
			lied
		}
	} = fp

	const icon = {
		'Linux': '<span class="icon linux"></span>',
		'Apple': '<span class="icon apple"></span>',
		'Windows': '<span class="icon windows"></span>',
		'Android': '<span class="icon android"></span>',
		'CrOS': '<span class="icon cros"></span>'
	}
	const system = {
		'Chrome OS': icon.CrOS,
		'Maged': icon.Apple,
		'Microsoft': icon.Windows,
		'English United States': icon.Android,
		'English (United States)': icon.Android
	}
	const systemVoice = Object.keys(system).find(key => local.find(voice => voice.includes(key)))
	
	return `
	<div class="relative col-four${lied ? ' rejected' : ''}">
		<span class="aside-note">${performanceLogger.getLog().speech}</span>
		<strong>Speech</strong><span class="${lied ? 'lies ' : ''}hash">${hashSlice($hash)}</span>
		<div class="help" title="SpeechSynthesis.getVoices()\nSpeechSynthesisVoice.localService">local (${count(local)}): ${
			!local || !local.length ? note.unsupported :
			modal(
				'creep-voices-local',
				local.join('<br>'),
				`${system[systemVoice] || ''}${hashMini(local)}`
			)
		}</div>
		<div class="help" title="SpeechSynthesis.getVoices()">remote (${count(remote)}): ${
			!remote || !remote.length ? note.unsupported :
			modal(
				'creep-voices-remote',
				remote.join('<br>'),
				hashMini(remote)
			)
		}</div>
		<div class="help" title="SpeechSynthesis.getVoices()\nSpeechSynthesisVoice.lang">lang (${count(languages)}): ${
			!languages || !languages.length ? note.blocked :
				languages.length == 1 ? languages[0] : modal(
					'creep-voices-languages',
					languages.join('<br>'),
					hashMini(languages)
				)
		}</div>
		<div class="help" title="SpeechSynthesis.getVoices()\nSpeechSynthesisVoice.default">default (${count(defaults)}):</div>
		<div class="block-text">
			${
				!defaults || !defaults.length ? note.unsupported :
					defaults.length == 1 ? defaults[0] : modal(
						'creep-voices-defaults',
						defaults.join('<br>'),
						hashMini(defaults)
					)
			}
		</div>
	</div>
	`
}