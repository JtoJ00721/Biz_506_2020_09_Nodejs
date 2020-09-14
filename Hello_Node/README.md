# Hello Node Project
## Nodejs를 사용하여 Web Application Server 생성하기
1. workspace / nodejs 폴더 생성
2. nodejs 폴더에서 express 프레임워크를 사용하여 프로젝트 생성
    - express Hello_Node
3. cd Hello_Node : 프로젝트 폴더로 이동
4. npm install : dependency download
    - package.jason 파일에 설정된 dependency들을 다운로드 하여
    node_modules 폴더에 저장
5. 프로젝트 시작
    가. npm start : 기본시작하기
    나. nodemon : 개발환경에서 파일이 변경(수정)하면 자동으로 
    서버를 재시작하는 tool을 사용하기

## nodejs 의 view 설정
1. nodejs의 탄생시점에서 jade라는 view를 사용했다.
2. 2.x로 버전업이 되면서 이름이 pug로 변경되었다.
3. npm install pug : view 단의 도구 설치
4. views 폴더의 파일들 /*.pug 로 이름변경
5. app.js 파일에서  jade를 pug로 변경


## pug view
1. 전통적인 html 코딩이 아닌 새로운 문법구조로 만드는 view 파일
2. html과 달리 tag가 열리기만 하고 닫히는 tag가 없다.
3. 각 tag의 시작은 왼쪽정렬로 정확히 구조가 일치해야 한다.
tag 에 tag를 포함할때는 포함되는 tag의 앞에 tab을 추가해 주어야 한다.
pug nodejs에 의해서 transfiler(파일변환)가 되고 길제로는 html 코드로 
만들어져서 client에 전송된다.
6. nodejs에 설치한 pug 모듈에 의해서 파일이 변환된다.






