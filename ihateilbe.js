function highlightWord() {

  var highlightwordlist = eval (
	  {
		"야매":	 ["개개끼","야매는 씨발 개니미!"],
		"박근혜":	 ["닭대가리","닭아 미안해"],
		"새누리":	["꼴통","개한민국 꼴통정담"], 
		"일베충":	["벌레","일베 이용자들을 부르는 정상적인 말"], 
		"베충이":	["벌레캐릭터","일베충들이 만든 자신들의 미화 캐릭터(그래봐야 벌레다)"], 
		"일베":	["벌레소굴", "일베충들이 모여사는 벌레 소굴이다."],
		"Google":	["고마워찡긋","이짓거리 할 수 있게 만들어준 회사"],
		"십알단":	["그네알바","십자군알바단"],


		"7시":	 ["일베어의심단어", "지도상 전라도의 위치가 7시라는 것을 빗대어 전라도를 지칭함"],
		"ASKY":	 ["일베어의심단어", " 여러 커뮤니티에서 사용되는 말. 남,여자친구가 안생긴다는 뜻의 \"안생겨요\"의 앞 글자를 본떠 알파벳으로 부르는 말이다. 그러나 요즘들어 이 용어를 일베가 자신들의 용어로 만들고자 \"아따 슨상님 계실적엔 이런일이 없었는디\"라는 뜻으로 폄하하며 홍보하고 있기 때문에 주의해야 한다. 원뜻은 \"안생겨요\"이다."],
		"aut":	 ["일베어의심단어", "과거 광우병 시위 때 한 네티즌아 out을 aut으로 사용한걸 따라함"],
		"MC무현":	 ["일베어의심단어", "일베가 만든 가상의 가수. 고 노무현 대통령의 연설이나 말들을 소스로 이용해 합성한 음원에서 유래되었다."],
		"SAD":	 ["일베어의심단어", "새부 전 운영자"],
		"SUCKSEX":	 ["일베어의심단어", "성공의 SUCCESS를 변화한 것."],
		"간잽이":	 ["일베어의심단어", "원래 뜻은 간고등어에 간을 치는 사람을 의미합니다. 안철수 국회의원이 자꾸 정치계에서 간만 보고 빠지는 행위를 반복해 간잽이라고 명한걸로 알려져있습니다."],
		"간철수":	 ["일베어의심단어", "안철수 국회의원의 대선 후보 시절, 자신의 의견을 명확히 표명하지 않고, 간 보듯이 모호한 행동을 취하는 것을 비하하는 말"],
		"감자":	 ["일베어의심단어", "강원도"],
		"감자국":	 ["일베어의심단어", "강원도"],
		"감자도":	 ["일베어의심단어", "강원도"],
		"갓카":	 ["일베어의심단어", "대통령이 뛰어난 초능력을 발휘했을 경우 갓카라 한다."],
		"개쌍도":	 ["일베어의심단어", "경상도"],
		"고무통":	 ["일베어의심단어", "고 노무현 대통령의 줄임말로서, 노무현 전 대통령을 조롱하는 단어"],
		"국뽕":	 ["일베어의심단어", "과도한 민족주의자"],
		"기분됴타":	 ["일베어의심단어", "기분좋다의 변형"],
		"김치":	 ["일베어의심단어", "한국인 혹은 한국인의 특성을 비하할 목적으로 사용"],
		"김치녀":	 ["일베어의심단어", "한국인 여성을 비하할 목적으로 사용"],
		"까보전":	 ["일베어의심단어", "까고 보니 전라도 사람. 전라도인을 지칭함"],
		"ㄴㅁㅎ":	 ["일베어의심단어", "ㄴㅁㅎ=노무혐 / ㄴㅁㄴㅁㅎ=노무노무혐 \"노무노무 혐오스럽다\"는 뜻으로 극혐과 동의어. 노무현을 비하하는 의미가 있다."],
		"낙태충":	 ["일베어의심단어", "낙태를 하는 여자를 비하하는 말"],
		"네다홍":	 ["일베어의심단어", "네, 다음 홍어. 홍어는 전라도 사람의 속어이다."],
		"노릇노릇":	 ["일베어의심단어", "대구 지하철 방화사건에서 불에 타죽은 희생자들을 비하하는 말. 대구, 경북, 경상도 지역 주민들을 비하하는데 사용한다."],
		"노무노무":	 ["일베어의심단어", "고 노무현 대통령을 조롱하는 언어"],
		"노시계":	 ["일베어의심단어", "고 노무현 대통령을 비하하는 말"],
		"노알라":	 ["일베어의심단어", "고 노무현 대통령을 비하하는 말"],
		"노오란 그 분":	 ["일베어의심단어", "고 노무현 대통령을 비하하는 말"],
		"노운지":	 ["일베어의심단어", "고 노무현 대통령을 비하하는 말"],
		"놈현":	 ["일베어의심단어", "고 노무현 대통령을 비하하는 말"],
		"땅끄":	 ["일베어의심단어", "탱크, 전차, 전두환 전 대통령을 이르는 말"],
		"땅크":	 ["일베어의심단어", "전두환 전 대통령"],
		"라도":	 ["일베어의심단어", "전라도"],
		"盧":	 ["일베어의심단어", "노무현 전 대통령의 성, 경상도 사투리와 혼용하여, 노무현 대통령을 비하하기 위해 사용함"],
		"로린이":	 ["일베어의심단어", "어린이 + 로리타. 아동을 성적 대상으로 이야기할 때 쓰임"],
		"멍청도":	 ["일베어의심단어", "충청도"],
		"문죄인":	 ["일베어의심단어", "문재인 전 대통령 후보"],
		"민주화":	 ["일베어의심단어", "게시글이나 상대의 의견에 수긍하지 못할 때, 민주화라고 한다."],
		"보밍아웃":	 ["일베어의심단어", "여성의 성기와 커밍아웃의 합성으로, 일베 안에서 자신이 여자라는 것을 밝힘"],
		"보빨":	 ["일베어의심단어", "남성이 여성을 과하게 치켜세우거나, 여성의 입장에서 의견을 피력하는 행위"],
		"부엉이 바위":	 ["일베어의심단어", "고 노무현 대통령이 서거한 바위"],
		"산업화":	 ["일베어의심단어", "일베의 이용자가 아닌 사람을 일베의 이용자가 되도록 하는 행위 또는 그 결과"],
		"삼일한":	 ["일베어의심단어", "삼일에 한번 여자를 때려야한다는 일베충들의 언어"],
		"새부":	 ["일베어의심단어", "현 일베 운영자"],
		"설라디언":	 ["일베어의심단어", "전라도 출신의 서울 거주자"],
		"수꼴":	 ["일베어의심단어", "수구꼴통. 보수를 비하하는 말"],
		"스시국":	 ["일베어의심단어", "일본"],
		"스시녀":	 ["일베어의심단어", "일본인 여자"],
		"슨상님":	 ["일베어의심단어", "김대중 전 대통령"],
		"씹선비":	 ["일베어의심단어", "듣고 싶지 않은 훈계를 하는 사람을 일컫어 하는 말, 일베에서 오늘의 유머 사용자를 비하할 때 주로 쓰인다."],
		"알보칠":	 ["일베어의심단어", "알고 보니 7시 사람. 지도상 전라도의 위치가 7시라는 것을 빗대어 전라도를 지칭함"],
		"에헴":	 ["일베어의심단어", "\"에헴\"은 실제로 사전에 존재하는 헛기침 소리를 나타내는 단어. \"엣헴\"은 일베충들이 오늘의 유머 코스프레를 할 때 자신이 선비라는 걸 알리기 위해 사용하는 기침소리."],
		"엑윽":	 ["일베어의심단어", "장애인 비하"],
		"엣헴":	 ["일베어의심단어", "오유를 비꼼"],
		"오유충":	 ["일베어의심단어", "오늘의 유머 사이트 이용자를 비하하여 쓰는 말"],
		"운지":	 ["일베어의심단어", "고 노무현 대통령의 서거를 조롱하여 말함"],
		"원조가카":	 ["일베어의심단어", "박정희"],
		"일밍아웃":	 ["일베어의심단어", "자신이 일베를 한다는 것을, 다른 사람에게 알림"],
		"일벤져스":	 ["일베어의심단어", "일베인 중 최고를 말함"],
		"일부심":	 ["일베어의심단어", "일베하는 자부심."],
		"자연인":	 ["일베어의심단어", "고 노무현 대통령을 비하하는 말"],
		"재기甲":	 ["일베어의심단어", "성재기 남성연대 전 대표"],
		"재기찡":	 ["일베어의심단어", "성재기 남성연대 전 대표"],
		"전땅크":	 ["일베어의심단어", "전두환 전 대통령"],
		"전라디언":	 ["일베어의심단어", "전라도 사람을 비하하는 말."],
		"좆목질":	 ["일베어의심단어", "남자의 성기와 친목질의 합성어. 남성들 사이의 친목 활동을 말함"],
		"좆선족":	 ["일베어의심단어", "조선족을 비하하는 말."],
		"좌음":	 ["일베어의심단어", "좌파 다음. 좌파적 정치 성향을 가진 게시물 등이 다음에 올라왔을 때 좌음이라 칭함."],
		"좌이버":	 ["일베어의심단어", "좌파 네이버. 좌파적 정치 성향을 가진 게시물 등이 네이버에 올라왔을 때 좌이버라 칭함."],
		"좌이트":	 ["일베어의심단어", "좌파 네이트. 좌파적 정치 성향을 가진 게시물 등이 네이트에 올라왔을 때 좌이트라 칭함."],
		"좌좀":	 ["일베어의심단어", "좌빨좀비, 진보를 비하하는 말"],
		"좌좀년":	 ["일베어의심단어", "좌파, 좀비, 여자의 줄인 말로서, 진보 성향의 여자를 비하함"],
		"주먹":	 ["일베어의심단어", "주면 먹는다. 여기서 [먹는다]는 이성에 대한 성관계를 뜻하는 속어."],
		"주절먹":	 ["일베어의심단어", "주면 절하고 먹는다. 여기서 [먹는다]는 이성에 대한 성관계를 뜻하는 속어."],
		"중궈":	 ["일베어의심단어", "진중권 논객"],
		"중꿔":	 ["일베어의심단어", "진중권 논객"],
		"중력절":	 ["일베어의심단어", "노무현 전 대통령 서거일"],
		"진중궈":	 ["일베어의심단어", "진중권 논객"],
		"쪽국":	 ["일베어의심단어", "일본. 쪽바리의 국가를 줄여 말함."],
		"탈김치":	 ["일베어의심단어", "탈 김치녀. 한국인 여성을 칭찬할 목적으로 사용"],
		"탈라도":	 ["일베어의심단어", "탈 전라도. 전라도 사람이나, 전라도 사람 같지 않을 경우를 말함"],
		"통구이":	 ["일베어의심단어", "대구 지하철 방화사건을 비하하는 말. 대구, 경북, 경상도 지역을 비하하는데 사용됨."],
		"통궈":	 ["일베어의심단어", "대구 지하철 방화사건을 비하하는 말. 대구, 경북, 경상도 지역을 비하하는데 사용됨."],
		"통들통들":	 ["일베어의심단어", "통구이와 부들부들의 합성어. 경상도 사람이 떠는 모습을 빗대어 말함."],
		"홍들홍들":	 ["일베어의심단어", "홍어와 부들부들의 합성어. 전라도 사람이 떠는 모습을 빗대어 말함."],
		"홍어":	 ["일베어의심단어", "전라도 사람을 비하하는 말."],
		"홍팍":	 ["일베어의심단어", "홍어파크의 줌말. MLB 파크 사이트 이용자를 비하하여 쓰는 말"]
		  }
		);

	$.noConflict();
	var count = 0;
	var total = 0;
	for ( key in highlightwordlist ) {
      var str = jQuery.trim(unescape(key));
      if (str.length > 0) {
      	var search = "body :contains('"+str+"')";
		console.log([search]);
        jQuery(search).each(function() {
        	var htmlStr = jQuery(this).html();
        	var replacedStr = htmlStr.replace(new RegExp(str,"gm"), "<span style='background-color:#FF9900;color: #FFFF00;font-size:1.2em; text-decoration: line-through; ' title='원본단어 : "+str+"\n뜻 : "+highlightwordlist[key][1]+"'><strong>" + highlightwordlist[key][0] + "</strong></span>");
        	jQuery(this).html(replacedStr);
			jQuery.error = console.error;
			count = count+1;
			console.log([str, replacedStr, count]);
        });
      }
	}

	var port = chrome.extension.connect({name: "count"});
	port.postMessage({replaceCount: count});
}

//addJQuery(letsJQuery);

function addMyEvent(obj, event, handler){
	if(obj.addEventListener){
		obj.addEventListener(event,handler,false);
	}
	else if(obj.attachEvent){
		obj.attachEvent("on"+event,handler);
	}
	else{
		obj["on"+event]=handler;
	}
}

addMyEvent(window, 'load', highlightWord);


//document.body.style.background = 'yellow';