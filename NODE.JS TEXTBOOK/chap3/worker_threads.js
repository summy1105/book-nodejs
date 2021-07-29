const { Worker, isMainThread, parentPort } = require("worker_threads");

if(isMainThread){
  //쓰레드 생성
  const worker = new Worker(__filename);
  worker.on('message', message => console.log('from worker', message)); //워커 쓰레드 리스너
  worker.on('exit', () =>console.log('worker exit'))
  worker.postMessage('ping');
}else{ //메인쓰레드가 아닐때
  parentPort.on('message', value=>{ //mian 쓰레드 리스너
    console.log('from parent', value);
    parentPort.postMessage('pong')
    parentPort.close();// main 쓰레드와 연결 종료
  })
}