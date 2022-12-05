import http from 'k6/http';
import { sleep } from 'k6';

export default function(){
	http.get('http://<link of the entry point>/');
	sleep(1);
}
