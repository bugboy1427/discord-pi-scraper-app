import { spawn } from 'child_process';

const scraper = spawn('./script.sh');
scraper.stdout.on('data', function (data) {
  console.log(data);
  // output = String.concat(output, data);
});
