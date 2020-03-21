var fs = require('fs');
var infile = fs.createReadStream('./demofile.txt', { flags: 'r' });
 
//스트림으로 읽어들이는 과정 또는 읽기가 완료 됐을때 이벤트가 발생된다
 
// 중간 중간 읽어 들이는 중간 이벤트
infile.on('data', function (data) {
    console.log('읽어들인 데이터 : ' + data);
});
 
//읽기가 완료 됐을때의 이벤트
infile.on('end', function () {
    console.log('읽기 종료');
});

// https://3dmpengines.tistory.com/1857
