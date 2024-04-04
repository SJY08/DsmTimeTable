const class1 =
  //1반 시간표 테이블 코드드
  "<tr>\n" +
  "            <th class=\"bs\"><div>요일</div>교시</th>" +
  "            <th>월</th>\n" +
  "            <th>화</th>\n" +
  "            <th>수</th>\n" +
  "            <th>목</th>\n" +
  "            <th>금</th>\n" +
  "          </tr>\n" +
  "        <tbody>\n" +
  "          <tr>\n" +
  "            <td><b>1</b></td>\n" +
  "            <td><b>창체</b><br />권경</td>\n" +
  "            <td><b>음악</b><br />송시</td>\n" +
  "            <td><b>과학</b><br />오상</td>\n" +
  "            <td><b>체육</b><br />이기</td>\n" +
  "            <td><b>음악</b><br />송시</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>2</b></td>\n" +
  "            <td><b>과학</b><br />오상</td>\n" +
  '            <td rowspan="2"><b>프로</b><br />권경</td>\n' +
  "            <td><b>사회</b><br />오정</td>\n" +
  "            <td><b>수학</b><br />이성</td>\n" +
  "            <td><b>수학</b><br />이성</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>3</b></td>\n" +
  "            <td><b>수학</b><br />이성</td>\n" +
  "            <td><b>체육</b><br />이기</td>\n" +
  "            <td><b>프로</b><br />양은</td>\n" +
  "            <td><b>웹프</b><br />서인</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>4</b></td>\n" +
  "            <td><b>영어</b><br />이진</td>\n" +
  "            <td><b>국어</b><br />안수</td>\n" +
  "            <td><b>미술</b><br />연주</td>\n" +
  "            <td><b>국어</b><br />정선</td>\n" +
  "            <td><b>컴구</b><br />권현</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>5</b></td>\n" +
  '            <td rowspan="2"><b>프로</b><br />권경</td>\n' +
  "            <td><b>영어</b><br />이진</td>\n" +
  "            <td><b>컴구</b><br />장연</td>\n" +
  "            <td><b>영어</b><br />이진</td>\n" +
  "            <td><b>사회</b><br />오정</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>6</b></td>\n" +
  "            <td><b>사회</b><br />오정</td>\n" +
  '            <td rowspan="2"><b>웹프</b><br />서인</td>\n' +
  "            <td><b>창체</b><br />오상</td>\n" +
  '            <td rowspan="2" class="bsla"></td>' +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>7</b></td>\n" +
  "            <td><b>컴구</b><br />장연</td>\n" +
  "            <td><b>과학</b><br />오상</td>\n" +
  "            <td><b>창체</b><br />권경</td>\n" +
  "          </tr>";

const class2 =
  //2반 시간표 테이블 코드드
  "<tr>\n" +
  "            <th class=\"bs\"><div>요일</div>교시</th>" +
  "            <th>월</th>\n" +
  "            <th>화</th>\n" +
  "            <th>수</th>\n" +
  "            <th>목</th>\n" +
  "            <th>금</th>\n" +
  "          </tr>\n" +
  "        <tbody>\n" +
  "          <tr>\n" +
  "            <td><b>1</b></td>\n" +
  "            <td><b>창체</b><br />이기</td>\n" +
  "            <td><b>체육</b><br />이기</td>\n" +
  "            <td><b>컴구</b><br />권현</td>\n" +
  "            <td><b>과학</b><br />오상</td>\n" +
  "            <td><b>웹프</b><br />서인</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>2</b></td>\n" +
  '            <td rowspan="2"><b>프로</b><br />권경</td>\n' +
  "            <td><b>국어</b><br />안수</td>\n" +
  "            <td><b>수학</b><br />이성</td>\n" +
  "            <td><b>컴구</b><br />장연</td>\n" +
  "            <td><b>음악</b><br />송시</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>3</b></td>\n" +
  "            <td><b>수학</b><br />이성</td>\n" +
  "            <td><b>미술</b><br />연주</td>\n" +
  "            <td><b>국어</b><br />정선</td>\n" +
  "            <td><b>컴구</b><br />장연</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>4</b></td>\n" +
  "            <td><b>과학</b><br />오상</td>\n" +
  "            <td><b>영어</b><br />이진</td>\n" +
  "            <td><b>과학</b><br />오상</td>\n" +
  '            <td rowspan="2"><b>웹프</b><br />서인</td>\n' +
  "            <td><b>프로</b><br />양은</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>5</b></td>\n" +
  "            <td><b>수학</b><br />이성</td>\n" +
  "            <td><b>사회</b><br />오정</td>\n" +
  "            <td><b>영어</b><br />이진</td>\n" +
  "            <td><b>영어</b><br />이진</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>6</b></td>\n" +
  "            <td><b>사회</b><br />오정</td>\n" +
  '            <td rowspan="2"><b>프로</b><br />권경</td>\n' +
  "            <td><b>체육</b><br />이기</td>\n" +
  '            <td rowspan="2"><b>창체</b><br />양은</td>\n' +
  '            <td rowspan="2" class="bsla"></td>' +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>7</b></td>\n" +
  "            <td><b>음악</b><br />송시</td>\n" +
  "            <td><b>사회</b><br />오정</td>\n" +
  "          </tr>";

const class3 =
  //3반 시간표 테이블 코드드
  "<tr>\n" +
  "            <th class=\"bs\"><div>요일</div>교시</th>" +
  "            <th>월</th>\n" +
  "            <th>화</th>\n" +
  "            <th>수</th>\n" +
  "            <th>목</th>\n" +
  "            <th>금</th>\n" +
  "          </tr>\n" +
  "        <tbody>\n" +
  "          <tr>\n" +
  "            <td><b>1</b></td>\n" +
  "            <td><b>창체</b><br />오정</td>\n" +
  "            <td><b>국어</b><br />안수</td>\n" +
  "            <td><b>수학</b><br />이성</td>\n" +
  "            <td><b>국어</b><br />정선</td>\n" +
  "            <td><b>사회</b><br />오정</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>2</b></td>\n" +
  "            <td><b>체육</b><br />이기</td>\n" +
  "            <td><b>영어</b><br />이진</td>\n" +
  "            <td><b>미술</b><br />연주</td>\n" +
  "            <td><b>과학</b><br />오상</td>\n" +
  "            <td><b>프로</b><br />양은</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>3</b></td>\n" +
  "            <td><b>웹프</b><br />차현</td>\n" +
  "            <td><b>과학</b><br />오상</td>\n" +
  "            <td><b>컴구</b><br />권현</td>\n" +
  "            <td><b>영어</b><br />이진</td>\n" +
  '            <td rowspan="2"><b>프로</b><br />전호</td>\n' +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>4</b></td>\n" +
  "            <td><b>사회</b><br />오정</td>\n" +
  "            <td><b>수학</b><br />이성</td>\n" +
  "            <td><b>체육</b><br />이기</td>\n" +
  "            <td><b>사회</b><br />오정</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>5</b></td>\n" +
  "            <td><b>음악</b><br />송시</td>\n" +
  "            <td><b>웹프</b><br />차현</td>\n" +
  '            <td rowspan="2"><b>프로</b><br />전호</td>\n' +
  "            <td><b>컴구</b><br />장연</td>\n" +
  "            <td><b>수학</b><br />이성</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>6</b></td>\n" +
  "            <td><b>영어</b><br />이진</td>\n" +
  "            <td><b>음악</b><br />송시</td>\n" +
  "            <td><b>창체</b><br />차현</td>\n" +
  '            <td rowspan="2" class="bsla"></td>' +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>7</b></td>\n" +
  "            <td><b>과학</b><br />오상</td>\n" +
  "            <td><b>컴구</b><br />장연</td>\n" +
  "            <td><b>웹프</b><br />차현</td>\n" +
  "            <td><b>창체</b><br />오정</td>\n" +
  "          </tr>";

const class4 =
  //4반 시간표 테이블 코드드
  "<tr>\n" +
  "            <th class=\"bs\"><div>요일</div>교시</th>" +
  "            <th>월</th>\n" +
  "            <th>화</th>\n" +
  "            <th>수</th>\n" +
  "            <th>목</th>\n" +
  "            <th>금</th>\n" +
  "          </tr>\n" +
  "        <tbody>\n" +
  "            <td><b>1</b></td>\n" +
  "            <td><b>창체</b><br />전호</td>\n" +
  "            <td><b>사회</b><br />오정</td>\n" +
  "            <td><b>미술</b><br />연주</td>\n" +
  "            <td><b>음악</b><br />송시</td>\n" +
  "            <td><b>체육</b><br />이기</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>2</b></td>\n" +
  "            <td><b>음악</b><br />송시</td>\n" +
  "            <td><b>수학</b><br />이성</td>\n" +
  '            <td rowspan="2"><b>프로</b><br />전호</td>\n' +
  "            <td><b>국어</b><br />정선</td>\n" +
  "            <td><b>컴구</b><br />장연</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>3</b></td>\n" +
  "            <td><b>영어</b><br />이진</td>\n" +
  "            <td><b>컴구</b><br />장연</td>\n" +
  "            <td><b>사회</b><br />오정</td>\n" +
  "            <td><b>수학</b><br />이성</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>4</b></td>\n" +
  "            <td><b>웹프</b><br />차현</td>\n" +
  "            <td><b>체육</b><br />이기</td>\n" +
  "            <td><b>웹프</b><br />차현</td>\n" +
  "            <td><b>프로</b><br />양은</td>\n" +
  "            <td><b>웹프</b><br />차현</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>5</b></td>\n" +
  "            <td><b>컴구</b><br />권현</td>\n" +
  "            <td><b>과학</b><br />오상</td>\n" +
  "            <td><b>사회</b><br />오정</td>\n" +
  "            <td><b>수학</b><br />이성</td>\n" +
  "            <td><b>과학</b><br />오상</td>\n" +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>6</b></td>\n" +
  '            <td rowspan="2"><b>프로</b><br />전호</td>\n' +
  "            <td><b>영어</b><br />이진</td>\n" +
  "            <td><b>영어</b><br />이진</td>\n" +
  "            <td><b>창체</b><br />이진</td>\n" +
  '            <td rowspan="2" class="bsla"></td>' +
  "          </tr>\n" +
  "          <tr>\n" +
  "            <td><b>7</b></td>\n" +
  "            <td><b>국어</b><br />안수</td>\n" +
  "            <td><b>과학</b><br />오상</td>\n" +
  "            <td><b>창체</b><br />전호</td>\n" +
  "          </tr>";

//html에 있는 selector를 js 변수로 연결
const selector = document.getElementById("selector");

//cookie 변수 생성, 
let cookie = document.cookie;
//cookie 값이 없다면 cookie 값을 "1 - 1"로 설정
if(cookie === "") cookie="1 - 1";
//selector의 벨류 값을 쿠키에 저장
selector.value = cookie;

//selector가 바뀌면 리로드
selector.addEventListener("change", reload);

reload();

//함수선언식 리로드 ->
function reload() {
  document.cookie=selector.value;

  //selector의 벨류 값이 각각 1 - 1, 1 - 2, 1 - 3, 1 - 4일때 table값을 class1~4로 변경
  switch (selector.value) {
    case "1 - 1":
      document.getElementById("table").innerHTML = class1;
      break;
    case "1 - 2":
      document.getElementById("table").innerHTML = class2;
      break;
    case "1 - 3":
      document.getElementById("table").innerHTML = class3;
      break;
    case "1 - 4":
      document.getElementById("table").innerHTML = class4;
      break;
  }
}
