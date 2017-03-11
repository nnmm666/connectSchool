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
    $scope.recruit = {
    	'<div>지원자격</div>' : "<div>· <span> 커넥트스쿨 제휴 대학에 재학중 또는 휴학중인 학생</span> <br>· 학부 2학년 이상 (전공 무관, 휴학생 가능), 남녀 모두 지원 가능<br>· 기획부터 운영까지 SW교육의 모든 것을 경험하고 싶은 분<br>· 1년간 성실하게 온/오프라인 사전교육과 프로그램에 참여 가능한 분<br>· 평소 소프트웨어 교육에 대한 관심이 깊은 분</div>",
    	'<div>우대조건</div>' : "<div>· 사회배려대상자 (관련 증빙자료 제출) <br>· 경찰, 소방관, 군부사관 자녀 및 국가 유공자 자녀 <br>· 엔트리, 스크래치를 활용한 소프트웨어 교육 경험자 </div>",
    	'<div>모집일정</div>' : "<div>· <span>지원기간: 2017.03.10(금) ~ 2017.03.27(월) 오후 7시까지 </span><br>· 서류합격자 발표: 2017.03.30(메일, 문자)<br>· 면접전형: 2017.04.03 ~ 2017.04.09(지역별 실시)<br>· 최종합격자 발표: 2017.04.11(메일, 문자)</div>",
    	'<div>활동기간</div>' : "<div>2017.04 ~ 2017.12</div>",
    	"<div>선발인원</div>" : "<div>약 200여명</div>",
    	'<div>지원방법</div>' : "<div>개별 온라인 지원</div>"
    };

    $scope.activities = [
    	{
    		'제목' : '대학생 선생님과 함께하는 sw교실',
    		'일정' : '5월 13일 ~ 6월 3일(상반기, 매주 토요일) </br> 11월 4일 ~ 12월 2일(하반기, 매주 토요일)',
    		'대상' : '소프트웨어 교육을 희망하는 초등학생(4~6학년)',
    		'장소' : '강릉원주대학교 외 23곳',
    		'내용' : "지역의 초등학생(4~6학년)에게 5주동안 토요일마다 블록코딩을 통해 소프트웨어의 원리를 가르치고 학생 스스로 나만의 프로젝트를 <br> 기획하고 실현할 수 있도록 지도하는 프로그램입니다. <br> 교육생 모집은 소프트웨어야 놀자 사이트(<a href= 'http://www.playsw.or.kr/program/progress/2'>http://www.playsw.or.kr/program/progress/2</a>)를 통해 이루어집니다.(개별 신청)"
    	},
    	{
    		'제목' : '대학과 함께하는 여름방학 SW캠프',
    		'일정' : '미정 (상세 일정 추후 공지)',
    		'대상' : '소프트웨어 교육에 흥미와 관심이 많은 초·중등학생(학년무관)',
    		'장소' : '강릉원주대학교 외 23곳',
    		'내용' : "커넥트재단이 후원하는 여름방학 소프트웨어 교육 일일 캠프로 각 지역 파트너 대학에서 주도하는 무료 학습 캠프입니다. <br> 대학에서 기획한 양질의 교육 프로그램을 소프트웨어 교육에 흥미와 관심이 많은 학부모님들과 초·중등학생들에게 제공하는 프로그램입니다.</br> 참가자 모집은 소프트웨어야 놀자 사이트(<a href= 'http://www.playsw.or.kr/program/progress/2'>http://www.playsw.or.kr/program/progress/2</a>)를 통해 이루어집니다.(개별 신청)"
    	},
    	{
    		'제목' : '찾아가는 SW교실',
    		'주관' : '커넥트재단',
    		'일정' : '연중 지속 운영(상세 일정 추후 공지)',
    		'대상' : '교육의 기회가 적은 학생들',
    		'장소' : '지역 중학교(자유학기제), 청소년 수련관 등',
    		'내용' : "대학생 선생님이 학습에 대한 관심과 열정은 있으나 교육의 기회가 적은 각 지역의 중학생과 무상으로 교육이 절대적으로 필요한 학생들에게 소프트웨어 교육(엔트리, 앱인벤터)을 가르치기 위해 7주간 각 지역의 중학교와 기관에 찾아가는 프로그램입니다.※본 프로그램은 개별 신청이 불가능한 프로그램으로 중학교와 기관은 정부 기관의 추천을 받고 커넥트재단이 별도 심사하여 선정합니다."
    	},
    	{
    		'제목' : '찾아가는 SW캠프',
    		'주관' : '커넥트재단',
    		'일정' : '7~8월 (상세 일정 추후 공지)',
    		'대상' : '교육의 기회가 적은 도서, 산간지역 초등학생들',
    		'장소' : '도서,산간지역 초등학교',
    		'내용' : "대학생 선생님이 직접 기획하고 운영하는 여름방학 봉사활동 프로그램으로 도서, 산간지역에 소프트웨어 교육 보급을 목적으로 합니다. ※본 프로그램은 개별 신청이 불가능한 프로그램으로 초등학교는 정부 기관의 추천을 받고 커넥트재단이 별도 심사하여 선정합니다."
    	}
    ];



    $scope.capacity = {
    	"대학생 봉사단 지원은 국내 학부 재학생만 가능한가요?" : '아니요, 학부 2학년 이상 재학생 및 휴학생도 지원 가능합니다. <br>단, 입학예정자 및 졸업수료자는 지원 불가합니다.',
    	"저는 파트너 대학 소속 대학생이 아닙니다. 지원이 가능한가요?" : "아니요, 교육장 확보로 인해 제휴가 되어있지 않은 대학은 참여가 어려워 <br> 파트너 대학 소속 대학생만 지원 가능합니다.",
    	"현재 타장학금 수혜 중인데 커넥트스쿨 활동비도 받을 수 있나요?" : "커넥트스쿨 활동비는 타 장학금 수혜 여부와 관계없이 지급합니다. <br> 현재 수혜 받고 있는 타 기관에 중복 수혜 가능 여부를 확인하시기 바랍니다.",
    	"팀으로 지원하고 싶습니다. 팀 지원은 안되나요?" : "네, 팀으로 지원은 불가합니다."
    };

    $scope.support = {
    	"학점은 직전학기 평점을 기입해야하나요? 전체학기 누적 평점을 기입해야하나요?" : '지원서 작성일 기준, 성적 증명서에 기재된 전체학기 누적 평점을 기입하시기 바랍니다.',
    	"최종 제출 후, 내용을 잘못 입력하여 수정하고 싶습니다. 어떻게 해야하나요?" : "최종 제출 후에는 지원서 수정 및 제출 취소 모두 불가합니다.<br> 제출 전 반드시 별도의 파일로 저장해두시기 바라며, 작성 내용을 꼼꼼히 확인하신 후 제출하시기 바랍니다."
    };

    $scope.document = {
    	"지원서 작성시 소프트웨어 교육 관련 활동 경험 또는 봉사활동 경험이 없는 경우 증빙서류를 제출하지 않아도 되나요?" : "네, 제출하지 않아도 됩니다. <br> 하지만 관련 경험이 있을 시 서류합격에 영향을 끼칠 수 있습니다.",
    	"지원서에 기재한 성적과, 면접 당일 제출할 서류의 성적이 달라질 예정입니다. 어떻게 해야 하나요?" : "지원서 기재 성적이 증빙서류 성적보다 낮은 경우는 문제 없으나, 높게 기재된 경우 합격이 취소됩니다.<br> 지원서 제출 후 학기말 성적이 반영되어 전체 평점이 낮아진 경우 <br> 면접 당일 증빙 서류 제출 시 프로그램 담당자에게 말씀하시기 바랍니다.",
    	"지원서에 내용을 잘못 기재하거나 기재하지 않아 증빙 서류의 내용과 일치하지 않을 경우 어떤 불이익이 있나요?" : "서류 전형에 합격했더라도 합격이 취소됩니다. <br> 지원서를 최종 제출하신 후에는 어떠한 상황에도 수정이 불가하기 때문에 유의사항을 반드시 숙지하시고 <br> 잘못 기재하거나 기재하지 않아 발생하는 불이익이 없도록 지원서 제출 전 꼼꼼하게 확인하시기 바랍니다.",
    	"증빙 서류는 언제, 어떤 것을 제출하나요?" : "성적증명서, 사회배려대상자, 국가유공자자녀 증빙서류 중 <br> 본인에게 해당하는 모든 내용에 대한 증빙 서류를 면접 당일 프로그램 담당자에게 제출하시면 됩니다. <br> 모든 증빙서류는 발급일 기준 3개월 이내의 것만 유효합니다. <br> [공통 필수 제출] <br> - 성적증명서(원본) [작성자 제출] <br>- 사회배려대상자(기초생활수급대상자/차상위 계층) 증명서 중 1종 <br>- 경찰, 소방관, 군부사관 자녀 및 국가 유공자 자녀 증명서 ",
    	"사본 혹은 캡쳐본으로 제출해도 되나요?" : "성적증명서, 기초생활수급자/차상위 계층 증빙 서류, 국가유공자 자녀 증빙서류는 원본 제출만 가능합니다.",
    	"가족 명의로 기초생활수급자 또는 차상위 계층이 등록되어 있습니다. 증빙 서류 제출 시 어떻게 해야 하나요? " : "본인 명의가 아닌 경우, 기초생활수급자, 차상위 계층 증빙 서류와 함께 가족관계증명서를 제출하시기 바랍니다." 
    };

    $scope.interview = {
    	"면접 일정과 장소를 어떻게 알 수 있나요?" : "서류 합격자 발표 시 메일을 통해 면접 일시, 장소를 안내할 예정입니다. <br> 면접은 지역별로 실시됩니다.",
    	"면접 일정과 장소 변경이 가능한가요?" : "면접 일정과 장소는 변경이 불가합니다.<br> 예를 들어, 주거지는 서울이지만 소속 대학교가 강원권일 경우 강원 지역 면접에 응시하셔야 합니다.",
    	"교통비 지원 기준이 궁금합니다."  : "답변 교통비는 지급되지 않습니다.",
    	"면접 참석 확인서 발급이 가능한가요?" : "답변 별도의 면접 참석 확인서는 희망자에 한하여 제공 가능합니다."
    };

    $scope.activity = {
    	"최종합격자 발표 이후 발대식 일정과 장소가 궁금합니다." : " 최종합격자 발표 후 4월 중순경 발대식을 진행합니다.(장소, 일정 추후 공지)",
    	"일정상 발대식 참석이 어려울 경우 봉사단 프로그램에 참여를 못하게 되나요?" : "네, 발대식은 반드시 참석하셔야 합니다. (불참시 증빙 자료 제출 필)",
    	"찾아가는 소프트웨어 교실을 운영할 때 중학교나 지역 기관은 저희가 선정하는 건가요?" : "아니요, 커넥트재단에서 소속 대학교가 위치한 지역의 중학교 또는 기관을 미리 선정 후 대학생 봉사단을 연결시켜 드립니다.",
    	"찾아가는 소프트웨어 캠프는 도서,산간지역 초등학교에 허락을 받고 기획해야 하나요?" : "아니요, 학교와 상관없이 봉사단 소속 대학생 선생님이 자체적으로 기획하여 진행할 수 있습니다.",
    	"찾아가는 소프트웨어 캠프의 경우 제 소속 대학과 가까운 지역의 초등학교로 지원해야하나요?" : "아니요,  찾아가는 여름방학 소프트웨어 캠프의 경우 본인이 현재 살고있는 실거주지 기준으로 지원하셔도 됩니다." ,
    	"찾아가는 소프트웨어 캠프의 경우 대학별로 활동해야 하나요?" : "4개의 주요활동 중 찾아가는 소프트웨어 캠프의 경우 실거주지 기준이므로 개별로 활동하셔도 됩니다."

    }

    $scope.currentTab = 'capacity';

    $scope.menus = {
    	capacity : false,
    	support : false,
    	document : false,
    	interview : false,
    	activity: false
    }

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
  });
 