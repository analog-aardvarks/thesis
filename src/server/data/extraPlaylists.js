const extraPlaylists = [
  {name:'Nigeria', urls: ['spotify:user:1229255324:playlist:23fCAKOF4pG6E0baakihsK', 'spotify:user:mfonumo:playlist:1dY58Ar9Dvlx1Le3AUAv3n']},
  {name:'Ethiopia', urls: ['spotify:user:1237887860:playlist:7z5AOkgPtgxFMAoYax7tJX', 'spotify:user:birukgirma11:playlist:44zjKdGl628Rc1xYQB7gZ2']},
  {name:'Congo', urls: ['spotify:user:1123550439:playlist:3MRxL25q4UxtK4Me4abyRQ']},
  {name:'South Africa', urls: ['spotify:user:filtr.za:playlist:0hCbLT00O6Ck3O706GbNje', 'spotify:user:1230048443:playlist:1sxY6Hy6YlVvNcmSaW7pHy']},
  {name:'Tanzania', urls: ['spotify:user:michi3792:playlist:3hiMm1Lv17MAGNMulOyWk0', 'spotify:user:115512586:playlist:3fLy38VEuYnvnpkjroiAJt']},
  {name:'Kenya', urls: ['spotify:user:126152614:playlist:1mprLvJeiYDAENPOMNYl6Z']},
  {name:'Algeria', urls: ['spotify:user:naninouni:playlist:3Wldc7HcACr5V8MsMCIuSF', 'spotify:user:naninouni:playlist:3Wldc7HcACr5V8MsMCIuSF', 'spotify:user:chompchomp:playlist:38UTmiKdrpgrD0HL02sk5p']},
  {name:'Uganda', urls: ['spotify:user:1263200711:playlist:11vJOvo0xLVfgQk6BqOjW4']},
  {name:'Mozambique', urls: ['spotify:user:chrisdale86113:playlist:3OmliE3W9y3TJkls8CJdso']},
  {name:'Ghana', urls: ['spotify:user:joana_hassan:playlist:71MmfPwmmMOXhhpwAiKeDI']},
  {name:'Angola', urls: ['spotify:user:fancony:playlist:1H8IGTxFLX40Ad1cWcDmmY']},
  {name:'Cameroon', urls: ['spotify:user:1210624167:playlist:5RGJHhcev4MsReWyaI3Ygb']},
  {name:'Congo', urls: ['spotify:user:1210624167:playlist:5RGJHhcev4MsReWyaI3Ygb']},
  {name:'Cote d\'Ivoire', urls: ['spotify:user:1210624167:playlist:5RGJHhcev4MsReWyaI3Ygb']},
  {name:'China', urls: ['spotify:user:rachelngrq:playlist:1n3IKBUH19ryz3aUjfc7yx']},
  {name:'India', urls: ['spotify:user:vshingwani:playlist:2UGjYm38hL5idrGoCY2KYY']},
  {name:'Pakistan', urls: ['spotify:user:12155590994:playlist:4no1EAIiacVcvmdkqIkszq', 'spotify:user:1170585520:playlist:6mDCY3JvqTrWEj5GeWpet6']},
  {name:'Russia', urls: ['spotify:user:netro_:playlist:5Bc9upfTIxIjLqYg435eYj', 'spotify:user:alena_gorbunova:playlist:6d3Zwzras2ghumJvnlIqsI', 'spotify:user:13mistery:playlist:62UmRp5frbbbtwW0dQ3TrW']},
  {name:'Japan', urls: ['spotify:user:1216227909:playlist:1EqZESm0avFD4XDPGyPMRA', 'spotify:user:dorannightingale:playlist:7LzlBR93O6C3rAT8rgtXcN']},
  {name:'Vietnam', urls: ['spotify:user:timobear:playlist:6lJ4k63nH8G31uutY2Uwcv']},
  {name:'Iran', urls: ['spotify:user:1256285564:playlist:7i8wSQjk0vE0sjrKGmGpMl', 'spotify:user:mahsagadimimahani:playlist:3ferYiHOybCQJUUPyXbFDA', 'spotify:user:maryam-etienne:playlist:402L1X0gpPy48xHxpLZXCG']},
  {name:'Turkey', urls: ['spotify:user:121091717:playlist:5mClRBOoHZr5qMXkeuLDCt', 'spotify:user:illbye:playlist:5ofk3fYQqjlnTi6jfqn33h']},
  {name:'Thailand', urls: ['spotify:user:1212774745:playlist:0KTCJ024GjcBKgszUWh6vS', 'spotify:user:lzlaverion:playlist:7hxEqzz92S0zNbI3vrfYhx']},
  {name:'South Korea', urls: ['spotify:user:sqgd34:playlist:01mp0saYYZ2K6jWdKKrHVu', 'spotify:user:spotify:playlist:5Vlt4VdYBDbaOCxPpo7c2G', 'spotify:user:spotify:playlist:37i9dQZF1DWW46Vfs1oltB', 'spotify:user:spotify:playlist:37i9dQZF1DX2ohL85TE8TI']},
  {name:'Iraq', urls: ['spotify:user:zahra612:playlist:2yAIdu8eLKjsnbPYTxpsAl', 'spotify:user:1216932215:playlist:1M5lXhQehg7TxzPL7GUaCL']},
  {name:'Saudi Arabia', urls: ['spotify:user:1252691358:playlist:4ntVIwFyfpVTrDZZwGYMMs', 'spotify:user:jeruthedamadja81:playlist:0orsZZU1spQnQUVSB97cKv']},
  {name:'Malaysia', urls: ['spotify:user:sonymusicmalaysia:playlist:2SMHhx2EZg3RPhGitzIw6L']},
  {name:'Nepal', urls: ['spotify:user:marcosfernandez82:playlist:3ADhMcCdR74xeMmAzYXiG6', 'spotify:user:1143632026:playlist:5imwnJ6KzNdcpEHGGCwC8c', 'spotify:user:parimal.nepane:playlist:6XCoaYliTcEOJmE0tXyemV']},
  {name:'Sri Lanka', urls: ['spotify:user:prageethw:playlist:2NVUOonMu3SuHMu5Exos0x']},
  {name:'Cambodia', urls: ['spotify:user:123778380:playlist:6zcoAnop5jgRnH6nM1kyCM']},
  {name:'Israel', urls: ['spotify:user:1254556608:playlist:0lEMWP9z1d5jXpalKhOjqJ']},
  {name:'Cuba', urls: ['spotify:user:lacubanitabruchsal:playlist:1kg6WRmaCzgmR0xMMF435t']},
  {name:'Mongolia', urls: ['spotify:user:1218062855:playlist:7mvyWgsmJVVDp2pTXzUJN5', 'spotify:user:1218062855:playlist:7mvyWgsmJVVDp2pTXzUJN5']},
  {name:'Ukraine', urls: ['spotify:user:oleh_the_great:playlist:0K7LWA7DVr4Yw0jhDngCI6', 'spotify:user:1225037656:playlist:4B24ETLEWtVLHNCuHJaJa1']},
  {name:'Haiti', urls: ['spotify:user:1242761210:playlist:6ARscEi5PCaFi8auAdy9f7']},
];

module.exports = extraPlaylists;
