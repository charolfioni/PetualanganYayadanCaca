function ExecuteScript(strId)
{
  switch (strId)
  {
      case "696Q3j5LXVm":
        Script1();
        break;
      case "62Uw3LwcOKB":
        Script2();
        break;
      case "6VxrkGIKuNi":
        Script3();
        break;
      case "5XyY1CMYN1l":
        Script4();
        break;
      case "5qkV86tryov":
        Script5();
        break;
      case "66hIqR8UDKW":
        Script6();
        break;
      case "5oNVnYfmVzM":
        Script7();
        break;
      case "5fXUMNwjHns":
        Script8();
        break;
      case "69umOWm50N9":
        Script9();
        break;
      case "5l5yMeNU37k":
        Script10();
        break;
      case "6IzEuzbIaNH":
        Script11();
        break;
      case "5f8vClc8DZm":
        Script12();
        break;
      case "66LCaQdwRzL":
        Script13();
        break;
      case "6KjNqIDhR44":
        Script14();
        break;
      case "5fQ6DkZ0KBs":
        Script15();
        break;
      case "6WzpibXef4f":
        Script16();
        break;
      case "60bZyupHMfy":
        Script17();
        break;
      case "5swnMwOgiXY":
        Script18();
        break;
      case "5gKGNd807MW":
        Script19();
        break;
      case "6GKx9bvlhkT":
        Script20();
        break;
      case "5r09zm15Rwc":
        Script21();
        break;
      case "6eDTTMXWxRD":
        Script22();
        break;
      case "5dIRHjZPV8a":
        Script23();
        break;
      case "5nZtkuKzWlh":
        Script24();
        break;
      case "6YFkufJAHLq":
        Script25();
        break;
      case "5sTLoIBoEbQ":
        Script26();
        break;
      case "6hrgjfZ0vpQ":
        Script27();
        break;
      case "651pIxqfPUP":
        Script28();
        break;
      case "5dWQ8OpbuCw":
        Script29();
        break;
      case "5qHWABiF7JN":
        Script30();
        break;
      case "5ZZHm3xQHmD":
        Script31();
        break;
      case "6WaKhK6YWIs":
        Script32();
        break;
      case "6PtGwogNYje":
        Script33();
        break;
      case "5uYpg6MQlSV":
        Script34();
        break;
      case "5uMXfHqliGa":
        Script35();
        break;
      case "6mIjDlbAoVP":
        Script36();
        break;
      case "6GZm6cXnGr9":
        Script37();
        break;
      case "6RrDk6jJMtN":
        Script38();
        break;
      case "6Ddlr4RHuUl":
        Script39();
        break;
      case "6Pe3fpOZBW6":
        Script40();
        break;
      case "5qHmBhC6EKO":
        Script41();
        break;
      case "5yOAsrN4rkU":
        Script42();
        break;
      case "5lK5447782m":
        Script43();
        break;
      case "6Iw779vCX7V":
        Script44();
        break;
      case "62nimwkS4Fn":
        Script45();
        break;
      case "61H31u7lQI3":
        Script46();
        break;
      case "6C73ncfS21c":
        Script47();
        break;
      case "6AS5XU5INwf":
        Script48();
        break;
      case "67AiKnZUQZp":
        Script49();
        break;
      case "6PQQ3jo6gL5":
        Script50();
        break;
      case "6enF4kkrIBR":
        Script51();
        break;
      case "61ztlAXA2QU":
        Script52();
        break;
      case "6U8VTyeXTrr":
        Script53();
        break;
      case "5tHImKmRvWl":
        Script54();
        break;
      case "5WfHRqqZe4o":
        Script55();
        break;
      case "5u7XjOkO3OL":
        Script56();
        break;
      case "5mZiWqbwTf8":
        Script57();
        break;
      case "63Kcv7N9IJ5":
        Script58();
        break;
      case "6JV0b7z7zZq":
        Script59();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('65GK1st3lY2');
const duration = 750;
const easing = 'ease-out';
const id = '61mLLIm1yLq';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6KqkKVWjtnI');
const duration = 750;
const easing = 'ease-out';
const id = '6SIo4ISFHKv';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6JUaZ3Ad1AM');
const duration = 500;
const easing = 'ease-out';
const id = '5mJTt3plnKG';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6BeGSgREvXk');
const duration = 500;
const easing = 'ease-out';
const id = '6SUuVnGEwD2';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6jlqPM3WwQq');
const duration = 500;
const easing = 'ease-out';
const id = '6FIyKphrx4k';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6cl2hzPDSSe');
const duration = 500;
const easing = 'ease-out';
const id = '6fhSSlO78aT';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5yGnPfB6LqD');
const duration = 500;
const easing = 'ease-out';
const id = '665AaiIfHzl';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6IHkb0JIJNa');
const duration = 500;
const easing = 'ease-out';
const id = '6DtrJxt0jGU';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('632hmDhaCBK');
const duration = 250;
const easing = 'ease-out';
const id = '6e2RCKlYzLM';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6eGhUtLJtft');
const duration = 250;
const easing = 'ease-out';
const id = '6OgnMPTejEX';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('69YHp6LAxBj');
const duration = 500;
const easing = 'ease-out';
const id = '617GKAdJYDT';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('5dUjVJ7tPkA');
const duration = 250;
const easing = 'ease-out';
const id = '5eIqtOszxgb';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('5qEfzvE37Ep');
const duration = 750;
const easing = 'ease-out';
const id = '5tRctPMtde8';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('6KhIxhe6SAC');
const duration = 750;
const easing = 'ease-out';
const id = '6WvaG5zTjzr';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('6pegUke38GE');
const duration = 750;
const easing = 'ease-out';
const id = '6kNVcrMt12l';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6GSkf409IL2');
const duration = 750;
const easing = 'ease-out';
const id = '5dLWh6kh5g8';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('5lDHSDr4oUW');
const duration = 500;
const easing = 'ease-out';
const id = '6PmfFHopLgz';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('6FHg4svJsbz');
const duration = 500;
const easing = 'ease-out';
const id = '5hpq5pu92eP';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6UQpPgkNCZb');
const duration = 500;
const easing = 'ease-out';
const id = '6qLd5vJgmv5';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('6QyO71x7uQb');
const duration = 500;
const easing = 'ease-out';
const id = '6pLFF3enHp4';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('5WPRLQnir2R');
const duration = 500;
const easing = 'ease-out';
const id = '5vy9CQPS0Bu';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('6UYCHdWl4cr');
const duration = 500;
const easing = 'ease-out';
const id = '5f01Y5Ocfik';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('61eB3QCUQlw');
const duration = 500;
const easing = 'ease-out';
const id = '5eInmgN5Jpo';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('5gPjarJOxld');
const duration = 500;
const easing = 'ease-out';
const id = '6K9JWujzjq2';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('5W7GomyYz1P');
const duration = 250;
const easing = 'ease-out';
const id = '5zBespveDBs';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6ZaIlXAeFGH');
const duration = 750;
const easing = 'ease-out';
const id = '5Y0Yv7txj7J';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('5qUshNaVO7Y');
const duration = 750;
const easing = 'ease-out';
const id = '6BLepdjFSRb';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('5Zml8GGBRoE');
const duration = 750;
const easing = 'ease-out';
const id = '65OxTy2VnSN';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('5oXHtuvCebz');
const duration = 500;
const easing = 'ease-out';
const id = '5vrgpgP0ZoK';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('5kQy0a4nr60');
const duration = 500;
const easing = 'ease-out';
const id = '6kHeQ4HsmuZ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('6NJArqUn5Hs');
const duration = 500;
const easing = 'ease-out';
const id = '67PPNB2QCnz';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('65DkYkBOSyZ');
const duration = 500;
const easing = 'ease-out';
const id = '5wFMOgYjBHk';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('6o8SVzvJblC');
const duration = 250;
const easing = 'ease-out';
const id = '6O327Xwf4A5';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('6lzlQZ6dQaz');
const duration = 750;
const easing = 'ease-out';
const id = '6OzQWpXD2CL';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('6e3D32PRh5r');
const duration = 750;
const easing = 'ease-out';
const id = '6OnPqEvLRAp';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('5lEAZF6Y6yh');
const duration = 500;
const easing = 'ease-out';
const id = '66smap51SFG';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('5ylzNguRq3m');
const duration = 500;
const easing = 'ease-out';
const id = '5kfLECgiSFB';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('64hhNJ1kXjI');
const duration = 500;
const easing = 'ease-out';
const id = '6HUYysjucLD';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('6elNjrLVKsB');
const duration = 500;
const easing = 'ease-out';
const id = '6k3GFvOLbWx';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('5unMaAQGhsX');
const duration = 250;
const easing = 'ease-out';
const id = '5iEA8wFMJdT';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  const target = object('5q2dVFUgquK');
const duration = 500;
const easing = 'ease-out';
const id = '6Vw6seHYgsQ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script42 = function()
{
  const target = object('6KKktUhvYAW');
const duration = 500;
const easing = 'ease-out';
const id = '6b74DF3kCTs';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('5qFlYzU86MQ');
const duration = 500;
const easing = 'ease-out';
const id = '5dM0Fs7AmSB';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('6hBoCC8BA5u');
const duration = 500;
const easing = 'ease-out';
const id = '5qZTgJMYMbf';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  const target = object('5uikV48N3os');
const duration = 500;
const easing = 'ease-out';
const id = '68jhuTdkoWZ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('6rib0aPIk9o');
const duration = 500;
const easing = 'ease-out';
const id = '5p9sHkp5u8S';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  const target = object('6FPFJzDmXre');
const duration = 500;
const easing = 'ease-out';
const id = '5rLXgvqTlsq';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('5oUdaBnAM1n');
const duration = 500;
const easing = 'ease-out';
const id = '69nYv9jsDuS';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script49 = function()
{
  const target = object('6IYWUzUBK2R');
const duration = 500;
const easing = 'ease-out';
const id = '6lZP1MuUijE';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script50 = function()
{
  const target = object('6pACX2sU1XB');
const duration = 500;
const easing = 'ease-out';
const id = '65XfenPjETr';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script51 = function()
{
  const target = object('6a3GYqw6yKQ');
const duration = 500;
const easing = 'ease-out';
const id = '5gQIV8dlBaa';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script52 = function()
{
  const target = object('6Qqnx4k1ZJL');
const duration = 500;
const easing = 'ease-out';
const id = '5tJnQGWt3XA';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script53 = function()
{
  const target = object('6OXGugdTSFW');
const duration = 500;
const easing = 'ease-out';
const id = '6fssf6enZHP';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script54 = function()
{
  const target = object('6RcgfwpeYzI');
const duration = 500;
const easing = 'ease-out';
const id = '64nfIakIQbQ';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script55 = function()
{
  const target = object('5zjdQ1n7YgE');
const duration = 750;
const easing = 'ease-out';
const id = '6JWz380HesF';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script56 = function()
{
  const target = object('6SyOSQopzCc');
const duration = 250;
const easing = 'ease-out';
const id = '5fMqdSbV8T5';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script57 = function()
{
  const target = object('5cvGfMhFw4x');
const duration = 500;
const easing = 'ease-out';
const id = '5Xuc3c259fc';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script58 = function()
{
  const target = object('5hphfnYEGbV');
const duration = 500;
const easing = 'ease-out';
const id = '5tVL3vaPUME';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script59 = function()
{
  const target = object('5zRYQSbundc');
const duration = 500;
const easing = 'ease-out';
const id = '5uk07igpiKI';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
