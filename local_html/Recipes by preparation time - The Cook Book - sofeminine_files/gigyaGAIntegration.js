"undefined"==typeof gigya&&(gigya={isGigya:!0}),gigya.defaultEventMaps||(gigya.defaultEventMaps=[]);var _gaq=_gaq||[];!function(){var e=function(e){return function(t){return t.source?"Gigya "+t.source:"Gigya "+e+" API"}},t=function(){_gaq.push(["_trackSocial"].concat(Array.prototype.slice.call(arguments)))},n=function(){_gaq.push(["_trackEvent"].concat(Array.prototype.slice.call(arguments)))},o=function(e,n,o){for(var i=e.split(","),a=0;a<i.length;a++)t(i[a],n,o)};gigya.defaultEventMaps.push({defaultMethod:n,eventMap:[{events:"sendDone",method:o,args:["$providers","Gigya $source - Share Published","$targetURL",document.location.href]},{events:"followClicked",method:t,args:["$button.provider","Gigya Follow - button clicked","$button.actionURL",document.location.href]},{events:"reactionClicked",args:["Gigya Reaction Bar","Button Clicked","$reaction.text"]},{events:"reactionUnclicked",args:["Gigya Reaction Bar","Button Unclicked","$reaction.text"]},{events:"commentSubmitted",args:[function(e){return"reviews"==e.mode?"Gigya Reviews":"Gigya Comments"},function(e){return"reviews"==e.mode?"Review Published":"Comment Published"},"$streamID"]},{events:"commentVoted",args:[function(e){return"reviews"==e.mode?"Gigya Reviews":"Gigya Comments"},function(e){return"reviews"==e.mode?"Review Voted":"Comment Voted"},"$streamID"]},{events:"login",args:[e("Login"),"Social Login","$provider"]},{events:"logout",args:[e("Logout"),"Logout"]},{events:"connectionAdded",args:[e("Add Connection"),"Social Connection Added","$provider"]},{events:"connectionRemoved",args:[e("Remove Connection"),"Social Connection Removed","$provider"]}]})}(),function(e,t,n){e.GoogleAnalyticsObject=n,e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)}}(window,document,"ga"),function(){var e=function(e){return function(t){return t.source?"Gigya "+t.source:"Gigya "+e+" API"}},t=function(e,t,n,o){ga("send",{hitType:"social",socialNetwork:e,socialAction:t,socialTarget:n,page:o})},n=function(e,t,n,o){ga("send",{hitType:"event",eventCategory:e,eventAction:t,eventLabel:n,eventValue:o})},o=function(e,n,o){for(var i=e.split(","),a=0;a<i.length;a++)t(i[a],n,o)};gigya.defaultEventMaps.push({defaultMethod:n,eventMap:[{events:"sendDone",method:o,args:["$providers","Gigya $source - Share Published","$targetURL",document.location.href]},{events:"followClicked",method:t,args:["$button.provider","Gigya Follow - button clicked","$button.actionURL",document.location.href]},{events:"reactionClicked",args:["Gigya Reaction Bar","Button Clicked","$reaction.text"]},{events:"reactionUnclicked",args:["Gigya Reaction Bar","Button Unclicked","$reaction.text"]},{events:"commentSubmitted",args:[function(e){return"reviews"==e.mode?"Gigya Reviews":"Gigya Comments"},function(e){return"reviews"==e.mode?"Review Published":"Comment Published"},"$streamID"]},{events:"commentVoted",args:[function(e){return"reviews"==e.mode?"Gigya Reviews":"Gigya Comments"},function(e){return"reviews"==e.mode?"Review Voted":"Comment Voted"},"$streamID"]},{events:"login",args:[e("Login"),"Social Login","$provider"]},{events:"logout",args:[e("Logout"),"Logout"]},{events:"connectionAdded",args:[e("Add Connection"),"Social Connection Added","$provider"]},{events:"connectionRemoved",args:[e("Remove Connection"),"Social Connection Removed","$provider"]}]})}();