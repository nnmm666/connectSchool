'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope) {
    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    $scope.currentIntroduceMenu = 'connect';
    $scope.toggleSize = true;
    $scope.recruit = {
    	'<div>지원자격</div>' : "<div>· <span> 커넥트스쿨 파트너 대학에 재학중 또는 휴학중인 학생</span> <br>· 학부 2학년 이상 (전공 무관, 휴학생 가능), 남녀 모두 지원 가능<br>· 기획부터 운영까지 소프트웨어 교육의 모든 것을 경험하고 싶은 분<br>· 1년간 성실하게 온/오프라인 사전교육과 프로그램에 참여 가능한 분<br>· 평소 소프트웨어 교육에 대한 관심이 깊은 분</div>",
    	'<div>우대조건</div>' : "<div>· 사회배려대상자 (관련 증빙자료 제출) <br>· 경찰, 소방관, 군부사관 자녀 및 국가 유공자 자녀 <br>· 엔트리, 스크래치를 활용한 소프트웨어 교육 경험자 </div>",
    	'<div>모집일정</div>' : "<div>· <span>지원기간: 2017.03.10(금) ~ 2017.03.30(목) 24시까지 </span><br>· 서류합격자 발표: 2017.03.31(메일, 문자)<br>· 면접전형: 2017.04.03 ~ 2017.04.09(지역별 실시)<br>· 최종합격자 발표: 2017.04.11(메일, 문자)</div>",
    	'<div>활동기간</div>' : "<div>2017.04 ~ 2017.12</div>",
    	"<div>선발인원</div>" : "<div>약 200여명</div>",
    	'<div>지원방법</div>' : "<div>개별 온라인 지원</div>"
    };

    $scope.connect = {
        '<div> 내용 </div>' : "<div>1. 소프트웨어 입문 과정<br>소프트웨어에 대해 체계적으로 배우고, <br>대학생 선생님과 팀이 되어 프로젝트를 기획하고 실현하며 <br>세상에 하나뿐인 ‘나만의 프로그램’을 만들게 됩니다.<br><br>2. 소프트웨어 X 수학 융합 과정<br>소프트웨어를 배우며 수학에 대한 막연한 두려움을 깨고, <br>흥미와 자신감을 얻어갈 수 있도록<br>커넥트스쿨이 새롭게 준비한 교육과정입니다.<br>* 융합 과정은 경기, 강원권 대학에서 시범 운영 됩니다.</div>",
        '<div>지원방법</div>' : "<div>· 소프트웨어야 놀자 홈페이지에서 개별 온라인 지원 <br>· 교육생 모집 기간 : 2017년 9월 13일 ~ 10월 18일 <br>· 교육생 선정 결과 발표 : 2017년 10월 23일 월요일 오후 중 <br>· 교육생으로 선정된 분에 한하여 이메일과 문자메시지로 안내드립니다. </div>",
        '<div> 일정 </div>' : "<div>2017.10.28 ~ 11.25</div>",
        '<div> 장소 </div>' : "<div>강릉원주대학교 등 전국 29개 대학교</div>",
        "<div> 대상 </div>" : "<div>소프트웨어를 처음 접하는 초등학교 4, 5, 6학년</div>"
    };

    $scope.activities = [
    	// {
    	// 	'제목' : '소프트웨어 교실',
    	// 	'일정' : '5월 13일 ~ 6월 3일(상반기, 매주 토요일) </br> 11월 4일 ~ 12월 2일(하반기, 매주 토요일)',
    	// 	'대상' : '소프트웨어 교육을 희망하는 초등학생(4~6학년)',
    	// 	'장소' : '강릉원주대학교 외 23곳',
    	// 	'내용' : "대학생 선생님이 지역의 초등학생에게 5주간 블록코딩 도구인 엔트리를 활용하여 소프트웨어의 원리를 가르치고, 학생이 팀을 이뤄 프로젝트를 기획하고 실현할 수 있도록 지도하는 프로그램입니다. <br>* 교육생 모집은 소프트웨어야 놀자 사이트를 통해 이루어집니다."
    	// },
    	{
    		'제목' : '커넥트스쿨',
    		'일정' : '5월 13일 ~ 6월 10일 (매주 토요일)<br>10월 28일 ~ 11월 25일 (매주 토요일)',
    		'대상' : '소프트웨어를 처음 접하는 초등학교 4, 5, 6학년',
    		'장소' : '강릉원주대학교 등 전국 29개 대학교',
    		'내용' : "전국 29개의 대학교의 유휴 인프라를 활용한 교육이 연간 2회 이루어집니다. 대학생 선생님들이 소프트웨어를 처음 접하는 초등학생에게 양질의 교육 프로그램을 제공합니다. 블록코딩 도구인 엔트리를 활용하여 소프트웨어의 원리를 배우고, 팀을 이뤄 프로젝트를 기획하고 실현할 수 있도록 지도합니다.",
    	},
    	{
    		'제목' : '찾아가는 커넥트스쿨',
    		'일정' : '7월 8일 ~ 29일 (매주 토요일)<br>9월 9일 ~ 30일 (매주 토요일)',
    		'대상' : '소프트웨어 교육을 접할 기회가 상대적으로 적은 학생들',
    		'장소' : '지역 초등학교, 중학교 및 청소년수련관 등',
    		'내용' : "상대적으로 교육의 기회가 부족한 학생에게 소프트웨어 교육 기회를 제공하기 위해, 도서 산간 지역의 일선 학교와 청소년 수련관 등으로 대학생 선생님들이 직접 찾아갑니다. 소프트웨어 교육을 받길 원하지만 다양한 이유로 소외 받고 있는 학생들에게 직접 찾아가며 교육격차를 완화하는 데 힘쓰고 있습니다."
    	},
    	{
    		'제목' : '커넥트스쿨 캠프',
    		'일정' : '7월 22일 ~ 8월 9일 (여름방학, 개최 대학별 일정 상이)',
    		'대상' : '소프트웨어 교육을 체험하고 싶은 전국의 초등, 중등생 및 학부모',
    		'장소' : '강릉원주대학교 등 전국 29개 대학교 (행사 별로 개최 대학 상이)',
    		'내용' : "커넥트스쿨과 파트너 대학이 함께 개최하는 전국적인 소프트웨어 캠프입니다. 지역별 특색 있는 프로그램을 기획하여 다채로운 교육의 장이 될 수 있도록 구성합니다. 2017년도 7월에 진행된 여름방학 캠프에서는 ‘엄마와 함께하는 미니 로봇청소기 만들기’ / ‘윤리, 인성교육 중심의 소프트웨어 교육 체험’ / ‘다문화 학생 대상 지역산업과 소프트웨어 교육’ / ‘여학생 대상 미래도시 만들기’ 등 다양한 대상과 다채로운 프로그램을 통해 소프트웨어 교육의 원리를 이해하고 흥미를 느낄 수 있도록 도왔습니다."
    	}
    ];



    $scope.capacity = {
    	"대학생 봉사단 지원은 국내 학부 재학생만 가능한가요?" : '아니요, 학부 2학년 이상 재학생 및 휴학생도 지원 가능합니다. <br>단, 입학예정자 및 졸업수료자는 지원 불가합니다.',
    	"저는 파트너 대학 소속 대학생이 아닙니다. 지원이 가능한가요?" : "아니요, 커넥트스쿨이 개최되는 파트너 대학을 중심으로 주요 활동이 이루어집니다 <br>따라서, 유기적인 운영을 위해 파트너 대학 소속 대학생만 지원받고 있습니다.",
    	"현재 타장학금 수혜 중인데 커넥트스쿨 장학금도 받을 수 있나요?" : "현재 수혜 받고 있는 타 기관에 중복 수혜 가능 여부를 확인하시기 바랍니다.",
    	"팀으로 지원하고 싶습니다. 팀 지원은 안되나요?" : "네, 팀으로 지원은 불가합니다."
    };

    $scope.support = {
    	"학점 항목에서 직전학기 평점을 기준으로 선택해야 하나요? 전체학기 누적 평점을 기준으로 선택해야 하나요?" : '지원서 작성일 기준, 성적 증명서에 기재된 전체학기 누적 평점을 기준으로 본인의 학점에 해당하는 항목을 선택하시면 됩니다.<br>(4.5 만점 기준)',
    };

    $scope.document = {
    	"지원서 작성시 소프트웨어 교육 관련 활동 경험 또는 봉사활동 경험이 없는 경우 증빙서류를 제출하지 않아도 되나요?" : "네, 제출하지 않아도 됩니다. <br> 하지만 관련 경험이 있을 시 서류합격에 영향을 끼칠 수 있습니다.",
    	"지원서에 내용을 잘못 기재하거나 기재하지 않아 증빙 서류의 내용과 일치하지 않을 경우 어떤 불이익이 있나요?" : "서류 전형에 합격했더라도 합격이 취소됩니다. <br> 지원서를 최종 제출하신 후에는 어떠한 상황에도 수정이 불가하기 때문에 유의사항을 반드시 숙지하시고 <br> 잘못 기재하거나 기재하지 않아 발생하는 불이익이 없도록 지원서 제출 전 꼼꼼하게 확인하시기 바랍니다.",
    	"증빙 서류는 언제, 어떤 것을 제출하나요?" : "성적증명서, 사회배려대상자, 국가유공자자녀 증빙서류 중 <br> 본인에게 해당하는 모든 내용에 대한 증빙 서류를 면접 당일 프로그램 담당자에게 제출하시면 됩니다. <br> 모든 증빙서류는 발급일 기준 3개월 이내의 것만 유효합니다. <br><br> [공통 필수 제출] <br> - 성적증명서(원본) [작성자 제출] <br><br>[유형별 제출]<br>- 사회배려대상자(기초생활수급대상자/차상위 계층) 증명서 중 1종 <br>- 경찰, 소방관, 군부사관 자녀 및 국가 유공자 자녀 증명서 ",
    	"사본 혹은 캡쳐본으로 제출해도 되나요?" : "성적증명서, 기초생활수급자/차상위 계층 증빙 서류, 국가유공자 자녀 증빙서류는 원본 제출만 가능합니다.",
    	"가족 명의로 기초생활수급자 또는 차상위 계층이 등록되어 있습니다. 증빙 서류 제출 시 어떻게 해야 하나요? " : "본인 명의가 아닌 경우, 기초생활수급자, 차상위 계층 증빙 서류와 함께 가족관계증명서를 제출하시기 바랍니다." 
    };

    $scope.interview = {
    	"면접 일정과 장소를 어떻게 알 수 있나요?" : "서류 합격자 발표 시 메일을 통해 면접 일시, 장소를 안내할 예정입니다. <br> 면접은 지역별로 실시됩니다.",
    	"면접 일정과 장소 변경이 가능한가요?" : "면접 일정과 장소는 변경이 불가합니다.<br> 예를 들어, 주거지는 서울이지만 소속 대학교가 강원권일 경우 강원 지역 면접에 응시하셔야 합니다.",
    	"교통비 지원 기준이 궁금합니다."  : "교통비는 지급되지 않습니다.",
    	"면접 참석 확인서 발급이 가능한가요?" : "별도의 면접 참석 확인서는 희망자에 한하여 제공 가능합니다."
    };

    $scope.activity = {
    	"최종합격자 발표 이후 발대식 일정과 장소가 궁금합니다." : "최종 합격자 발표시 발대식 일정과 장소도 함께 메일로 공지됩니다. ",
    	"일정상 발대식 참석이 어려울 경우 봉사단 프로그램에 참여를 못하게 되나요?" : "네, 발대식에서 각 지역에서 수업하실 교육 내용을 바탕으로 사전교육이 진행되므로 반드시 참석하셔야 합니다.<br> (불참시 증빙 자료 제출 필)",
    	"<소프트웨어 캠프>는 모든 파트너 대학에서 개최되는 건가요?" : "아니요, 모든 파트너 대학에서 개최되지는 않습니다. <br> 관련 자세한 내용은 추후 소프트웨어야 놀자 블로그를 통해 별도 공지드릴 예정입니다.",
        "커넥트스쿨의 모든 교육 프로그램은 무료로 이루어지나요?" : "네, 커넥트스쿨은 여러 가지 현실적인 이유로 소프트웨어 교육을 받지 못하는 학생들을 위해 마련된 교육 프로그램입니다.<br> 소프트웨어 교육을 받길 희망하는 학생이라면 누구나 비용 부담 없이 참여할 수  있습니다. ",
        "<찾아가는 커넥트스쿨>을 운영할 때 중학교나 지역 기관은 저희가 선정하는 건가요?" : "아니요, 커넥트재단에서 소속 대학교가 위치한 지역의 중학교 또는 기관을 미리 선정 후 대학생 봉사단을 연결시켜 드립니다.",
    	"여름방학에 진행되는 프로그램(1학기 찾아가는 커넥트스쿨, 소프트웨어 캠프)의 경우 팀별로 활동해야 하나요?" : "여름방학에 진행되는 프로그램의 경우 실거주지 기준으로 배정됩니다. 개별로 활동하셔도 됩니다."
    }

    $scope.currentTab = 'capacity';
    $scope.cessationAlert = true;
    $scope.menus = {
    	capacity : false,
    	support : false,
    	document : false,
    	interview : false,
    	activity: false
    }

    $('.img-responsive').css('width' , 100+'%');
    $('.img-responsive').css('height' , window.innerHeight+'px');
    
    if(window.innerWidth > 768)
        $('.img-responsive').css('background-size' , window.innerWidth + 'px' + '' + window.innerHeight+'px');
    else {
        $('.img-responsive').css('background-size' , 1000 + 'px' +'' + 1000+'px');
    }

    window.onresize = function(event) {
        $('.img-responsive').css('width' , window.innerWidth+'px');
        $('.img-responsive').css('height' , window.innerHeight+'px');
    };


    var initMenu = function(){
	    $scope.menus = {
	    	capacity : false,
	    	support : false,
	    	document : false,
	    	interview : false,
	    	activity: false
	    }    	
    };

    $scope.getText = function(key){
    	var obj = {
	    	capacity : '지원자격',
	    	support : '지원서',
	    	document : '증빙서류',
	    	interview : '면접',
	    	activity : '활동'
    	};

    	return obj[key];
    }

    $scope.showData = function(key) {
    	$scope.currentTab = key;
    }

    $scope.getContent = function(){
    	return $scope[$scope.currentTab];
    }

    $scope.applyConnectSchool = function() {
    	
    }

    $scope.clickToggle = function(){
        $scope.toggleSize = !$scope.toggle;
    }

    $scope.goApply = function() {
        window.open("http://www.playsw.or.kr/program/progress/2",'_blank');
    }
  });
 