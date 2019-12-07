$(document).ready(function() {
  if (document.body.clientWidth < 1024) {
    return (document.body.innerHTML =
      '<center><h2>Ты должен открыть это на экране побольше, телефон не подойдет</h2></center>')
  }

  var msFlight = Date.parse('December 31, 2019 14:30:00')
  var msNow = Date.now()
  var countdownFrom = (msFlight - msNow) / 1000

  $('.countdown').FlipClock(countdownFrom, {
    countdown: true,
    clockFace: 'DailyCounter'
  })

  var audio = document.createElement('audio')
  audio.src =
    'https://dl1.cool.dj/listen/20819793/WHdCclFDWFl0OC91T2NzdmtwR2lPN2cxajZ1bCtlMnhHd3ZvZnptMWFKOE1NR3g5MVljb0pmZ2NtZ3BBYjZDTEFQY2p3RU5EMGJDR2VvSHhITEFVSFozampRWVFqdjZXbUl2NElsWjRMc2t3N1FlUk5qRmF6SmdoQmNFQnhLNEg/smeshnaya-muzyka-samaya-prikolnaya-muzyka-iz-ejs-ventury_(Cool.DJ).mp3'

  document.body.addEventListener('mousemove', function() {
    audio.play()
  })
})
